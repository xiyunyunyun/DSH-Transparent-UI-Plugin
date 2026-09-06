/**
 * Runtime seam stamper.
 *
 * The Aqua stylesheet keys off stable data-* hooks (`data-dsh-frame`,
 * `data-dsh-sidebar-root`, `data-hero-headline`, …). In the monorepo those
 * hooks are authored into the base packages' source; for a self-contained
 * distribution (installed against a stock DSH) this module stamps them onto
 * the matching elements at runtime, so the stylesheet works with zero base
 * edits. Each selector uses only stable attributes already present in the
 * stock UI (`data-composer-card`, `data-conversation-composer-overlay`,
 * ARIA roles) or lightningcss-preserved class-name substrings.
 *
 * Stamps are idempotent and inert without the `data-dsh-aqua` root attribute
 * (the whole stylesheet is gated on it), so they are simply left in place when
 * the layer flips off — "off" still renders the exact stock UI.
 */

import { invalidateSpotCache, SPOT_ATTR } from './spot-core.ts'

interface Seam {
  /** Attribute to stamp (bare name; value is always ''). */
  readonly attribute: string
  /** CSS selector for the element(s) to stamp. */
  readonly selector: string
  /** Stamp only the first (topmost) match, not every descendant match. */
  readonly first?: boolean
  /** Cheap invalidation probe for :has-style seams whose match is an
   *  ANCESTOR of what gets inserted (the inserted node itself never matches
   *  the seam selector). When this selector appears anywhere in an inserted
   *  subtree, the seam is re-queried. Defaults to the seam selector itself. */
  readonly probe?: string
}

const SEAMS: readonly Seam[] = [
  // The layout frame: the sidebar column's direct parent. (The inserted
  // sidebarCol is the probe — the frame match is its ANCESTOR.)
  { attribute: 'data-dsh-frame', selector: ':has(> [class*="sidebarCol"])', probe: '[class*="sidebarCol"]' },
  // The sidebar content root (topmost `root` under the column — settings
  // internals also carry a `root` class but sit deeper, so first match wins).
  { attribute: 'data-dsh-sidebar-root', selector: '[class*="sidebarCol"] [class*="root"]', first: true },
  // New-session button (the raised-surface seam).
  { attribute: 'data-dsh-surface', selector: 'button[class*="newSession"]' },
  // Trajectory view (the only composer-overlay view today).
  { attribute: 'data-dsh-trajectory', selector: '[data-conversation-composer-overlay]' },
  // Details panel (topmost `root` under the details column).
  { attribute: 'data-dsh-details', selector: '[class*="detailsCol"] [class*="root"]', first: true },
  // Composer bar root: the composer card's direct parent. (The inserted
  // composer card is the probe — the inputbar match is its ANCESTOR.)
  { attribute: 'data-dsh-inputbar', selector: ':has(> [data-composer-card])', probe: '[data-composer-card]' },
  // Composer attach "+" button.
  { attribute: 'data-dsh-add', selector: '[data-composer-card] [class*="add"]' },
  // Session stats line under the composer (composer.dock slot).
  { attribute: 'data-dsh-stats', selector: '[data-slot="conversation.composer.dock"] [class*="root"]' },
  // Spotlight / hover-tilt panes: the floating-glass surfaces the cursor
  // glow and the geometric press target. The inputbar (composer + its
  // docked stats band) is ONE spot so the fused piece tilts and glows
  // together; the small + bead and chat bubbles stay out so the effect
  // reads as "the glass panes", not every surface.
  { attribute: 'data-dsh-aqua-spot', selector: 'header', first: true },
  { attribute: 'data-dsh-aqua-spot', selector: '[class*="sidebarCol"]', first: true },
  { attribute: 'data-dsh-aqua-spot', selector: '[data-dsh-inputbar]' },
  { attribute: 'data-dsh-aqua-spot', selector: '[data-dsh-trajectory]' },
  { attribute: 'data-dsh-aqua-spot', selector: '[data-dsh-surface]' },
  // The sidebar wordmark button (its badge plate gets the official pill).
  { attribute: 'data-dsh-wordmark', selector: '[class*="sidebarCol"] [class*="brand"]', first: true },
]

/** Cached matches per seam. The seam elements are app-shell nodes that stay
 *  connected for the app's lifetime, so most stamp passes re-validate the
 *  cache instead of re-running the queries. The full query set measured
 *  ~7.7ms per DOM-change frame on a long session (3.2k nodes) — streamed
 *  tokens pay it EVERY frame, and it scales with the message history: this
 *  is exactly why a long conversation turns sluggish while a fresh one is
 *  fluid. Re-queried only when a cached element disconnected or an inserted
 *  subtree could have introduced a match (cheap per-insert probe), plus a
 *  periodic full re-query as the catch-all. */
const seamCache = new Map<Seam, HTMLElement[]>()

function querySeam(seam: Seam): HTMLElement[] {
  if (seam.first) {
    const el = document.querySelector<HTMLElement>(seam.selector)
    return el === null ? [] : [el]
  }
  return Array.from(document.querySelectorAll<HTMLElement>(seam.selector))
}

/** Stamp one seam against its cache. @returns true when the stamped set may
 *  have changed (re-query or an attribute write) — the spot cache feeds off
 *  this. */
function stampSeam(seam: Seam, added: Element[] | null): boolean {
  let els = seamCache.get(seam)
  if (els === undefined || added === null) {
    els = querySeam(seam)
    seamCache.set(seam, els)
  } else {
    const probe = seam.probe ?? seam.selector
    const stale = els.some((el) => !el.isConnected)
      || added.some((root) => root.matches(probe) || root.querySelector(probe) !== null)
    if (stale) {
      els = querySeam(seam)
      seamCache.set(seam, els)
    }
  }
  let touched = false
  for (const el of els) {
    if (!el.hasAttribute(seam.attribute)) {
      el.setAttribute(seam.attribute, '')
      touched = true
    }
  }
  return touched
}

function stampAll(added: Element[] | null = null): void {
  let spotsTouched = false
  for (const seam of SEAMS) {
    if (stampSeam(seam, added) && seam.attribute === SPOT_ATTR) spotsTouched = true
  }
  if (stampPluginViews(added === null)) spotsTouched = true
  if (spotsTouched) invalidateSpotCache()
  // State gates the stylesheet's expensive :has rules key off (cheap html
  // attributes, so streaming / collapse / dialog mutations never pay the
  // :has evaluation cost — the "sidebar collapse & settings open" jank):
  // - data-dsh-dialog-open: a dialog exists anywhere (the settings / plugin
  //   panels render INSIDE the sidebar column);
  // - data-dsh-sidebar-bubble: a tooltip is mounted inside the sidebar col
  //   (the button hover bubbles the 5f overflow release exists for).
  document.documentElement.toggleAttribute('data-dsh-dialog-open', document.querySelector('[role="dialog"]') !== null)
  document.documentElement.toggleAttribute('data-dsh-sidebar-bubble', document.querySelector('[class*="sidebarCol"] [role="tooltip"]') !== null)
  // A menu/dialog/listbox is VISIBLE anywhere: the overflow-clip kill switch
  // on the tilt panes stands down (a fixed popover mid-glide must not be
  // clipped to its pane). Hidden leftovers don't count — they are exactly
  // what the clip exists to contain. While iterating, every visible anchored
  // popover also stamps its shell (see inside).
  let popoverLive = false
  for (const el of document.querySelectorAll('[role="menu"], [role="dialog"], [role="listbox"]')) {
    const cs = getComputedStyle(el)
    if (cs.display === 'none' || cs.visibility === 'hidden') continue
    popoverLive = true
    stampPopoverShell(el, cs)
  }
  document.documentElement.toggleAttribute('data-dsh-popover-live', popoverLive)
}

/**
 * Anchored popover shell: the positioned wrapper the app paints an opaque
 * layer token on (the composer command list's menu shell wraps its
 * role=listbox viewport). Stamped so the stylesheet can turn the SHELL glass
 * instead — the role'd surface inside stops double-painting its own
 * translucent fill against an opaque parent. Only ANCHORED (static/absolute)
 * popovers qualify: fixed dialogs/menus sit on the Host's own full-viewport
 * mask, which must keep its stock veil. The shell must actually paint
 * (transparent Radix positioner wrappers are skipped) and must not be a tilt
 * pane itself.
 */
function stampPopoverShell(el: Element, cs: CSSStyleDeclaration): void {
  if (cs.position === 'fixed') return
  const shell = el.parentElement
  if (
    shell === null || shell === document.body ||
    shell.hasAttribute('data-dsh-popover-shell') ||
    shell.hasAttribute(SPOT_ATTR) ||
    shell.matches('header, [data-dsh-inputbar], [data-dsh-trajectory], [class*="sidebarCol"]')
  ) return
  const ps = getComputedStyle(shell)
  if (ps.display === 'none') return
  if (ps.backgroundColor === 'rgba(0, 0, 0, 0)' || ps.backgroundColor === 'transparent') return
  shell.setAttribute('data-dsh-popover-shell', '')
}

/**
 * Plugin view pages: the conversation.view slot hosts whichever tab view is
 * active — the 对话 chat OR a plugin's full page (dsh-context's 上下文, and
 * any future plugin view mounts here). The chat is identified by its own
 * conversation.chat / tool.call node slots and left alone (it owns dedicated
 * seams); every OTHER root is a plugin view and gets:
 * - `data-dsh-view` — the stylesheet turns the shared layer tokens
 *   translucent inside it, so every surface the plugin paints with the
 *   design tokens becomes glass with zero coordination;
 * - tilt spots on its card-family surfaces (the rectangular panes tilt like
 *   the other glass), falling back to the view root itself when a plugin
 *   paints no cards.
 */
/** View roots already identified as the chat. The chat marker set only
 *  GROWS within one root element's lifetime (nodes mount progressively into
 *  it), so a root that once detected as chat stays chat — re-running the
 *  detection query every stamp pass is pure waste on a long session. Full
 *  passes skip the memo: a root REUSED by React for a different view (same
 *  div, swapped children) gets re-judged within one catch-all period. */
const chatViewRoots = new WeakSet<HTMLElement>()

/** Grace period before an EMPTY non-chat verdict is TRUSTED. When a session
 *  opens, the view root mounts FIRST and the chat marker set lands ~1.3s
 *  later (measured: the conversation payload is loaded asynchronously) — a
 *  root judged on its first frames reads as a plugin view, gets stamped
 *  data-dsh-view + a spot on the ROOT ITSELF, and the whole message flow
 *  tilts under the cursor until the next pass strips it (~1.7s of visibly
 *  skewed text). So a root judged non-chat while still EMPTY enters a grace
 *  window instead: chat markers appearing within it flip the verdict for
 *  free (every mutation pass re-judges), and only a root that is STILL
 *  non-chat after the window is stamped (the card-less plugin-page
 *  fallback). A root that already carries card-family panes is a genuine
 *  plugin view — those mount WITH their content (measured on dsh-context:
 *  the page and its cards commit together, while the chat root mounts
 *  empty) — and are stamped on the FIRST pass, no grace delay. */
const PLUGIN_VIEW_GRACE_MS = 1500
const pluginViewFirstSeen = new WeakMap<HTMLElement, number>()
let graceRecheckTimer = 0
/** Whether the stamper's feeds are live. The grace recheck timer can outlive
 *  startSeamStamper (its closure owns no shared state with this module-level
 *  helper), so the timer checks this flag instead of a closure variable. */
let seamStamperActive = false

/** One delayed full re-check pass so a root whose grace window expires
 *  between mutations still gets stamped (mutation passes alone may not fire
 *  once the view settles). Idempotent — a pending timer is never doubled. */
function scheduleGraceRecheck(): void {
  if (graceRecheckTimer !== 0) return
  graceRecheckTimer = window.setTimeout(() => {
    graceRecheckTimer = 0
    if (!seamStamperActive) return
    stampAll(null)
  }, PLUGIN_VIEW_GRACE_MS + 50)
}

function stampPluginViews(full: boolean): boolean {
  let touched = false
  for (const root of document.querySelectorAll<HTMLElement>('[data-slot="conversation.view"] > *')) {
    // The chat view (and any view embedding a composer — the hero) keep
    // their own seams; generic view glass must not wash them. The chat
    // mounts PROGRESSIVELY (its node slots appear after the root), so the
    // first pass can misread it as a plugin view — the generic stamps are
    // therefore REVERSIBLE: every pass re-judges and strips them the moment
    // the chat markers exist.
    const isChat = (!full && chatViewRoots.has(root))
      || root.querySelector("[data-slot^='conversation.chat'], [data-slot^='tool.call'], [data-composer-card], [data-dsh-inputbar]") !== null
    if (isChat) {
      chatViewRoots.add(root)
      pluginViewFirstSeen.delete(root)
      if (root.hasAttribute('data-dsh-view')) {
        root.removeAttribute('data-dsh-view')
        touched = true
      }
      if (root.hasAttribute(SPOT_ATTR)) {
        root.removeAttribute(SPOT_ATTR)
        touched = true
      }
      continue
    }
    // Card-family panes first: their presence decides the path. A plugin
    // page mounts WITH its content (dsh-context: root + cards in one
    // commit), while the chat root mounts empty and fills ~1.3s later —
    // so cards here mean a genuine plugin view, stamped on this pass with
    // no grace delay.
    const panes: HTMLElement[] = []
    for (const card of root.querySelectorAll<HTMLElement>("[class*='card'], [class*='Card']")) {
      // List CONTAINERS (*cards* ULs) are wrappers, not panes.
      if (card.matches('ul, [class*="cards"]')) continue
      panes.push(card)
    }
    if (panes.length > 0) {
      pluginViewFirstSeen.delete(root)
      if (!root.hasAttribute('data-dsh-view')) {
        root.setAttribute('data-dsh-view', '')
        touched = true
      }
      // The panes are the cards — a root-level spot (the card-less
      // fallback below, or one left from before the cards mounted) must
      // GO, or every gap between cards hovers the WHOLE page.
      if (root.hasAttribute(SPOT_ATTR)) {
        root.removeAttribute(SPOT_ATTR)
        touched = true
      }
      for (const card of panes) {
        // A card nested inside an already-stamped card stays part of that
        // pane. closest() starts at the ELEMENT ITSELF, so a card stamped
        // on an earlier pass used to "contain itself" and was skipped
        // forever — spotted stayed false and the view ROOT fell back to a
        // spot (the whole page became one tilt/glow pane → flicker).
        // Check the parent chain instead.
        if (card.parentElement !== null && card.parentElement.closest('[' + SPOT_ATTR + ']') !== null) continue
        if (card.hasAttribute(SPOT_ATTR)) continue
        card.setAttribute(SPOT_ATTR, '')
        touched = true
      }
      continue
    }
    // No card panes: an EMPTY non-chat root is the ambiguous case (a chat
    // root pre-fill looks exactly like this) — grace window, then the
    // card-less plugin-page fallback (the root itself becomes the pane).
    const seen = pluginViewFirstSeen.get(root)
    if (seen === undefined) {
      pluginViewFirstSeen.set(root, performance.now())
      scheduleGraceRecheck()
      continue
    }
    if (performance.now() - seen < PLUGIN_VIEW_GRACE_MS) {
      scheduleGraceRecheck()
      continue
    }
    if (!root.hasAttribute('data-dsh-view')) {
      root.setAttribute('data-dsh-view', '')
      touched = true
    }
    if (!root.hasAttribute(SPOT_ATTR)) {
      root.setAttribute(SPOT_ATTR, '')
      touched = true
    }
  }
  return touched
}

/**
 * Stamp the seams once, then keep them stamped as React remounts nodes.
 * @returns a disposer that disconnects the observer.
 */
export function startSeamStamper(): () => void {
  seamStamperActive = true
  stampAll(null)
  // Coalesce stamp passes to one per frame: click-driven React commits fire
  // this observer per batch, and a synchronous pass runs a dozen :has
  // querySelectors plus attribute writes (style invalidation) — exactly the
  // work that turned every button press into a visible hitch of the
  // ambient scene. One frame of stamp latency is invisible.
  //
  // Inserted elements are accumulated ACROSS batches (records of superseded
  // batches are otherwise dropped): a node inserted in batch 1 and untouched
  // by batch 2 must still be probed by the pass that finally runs.
  let scheduled = 0
  let disposed = false
  let pendingAdded: Element[] | null = null
  const observer = new MutationObserver((records) => {
    if (disposed) return
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node instanceof Element && node.isConnected) {
          (pendingAdded ??= []).push(node)
        }
      }
    }
    if (scheduled !== 0) return
    scheduled = requestAnimationFrame(() => {
      scheduled = 0
      if (disposed) return
      const added = pendingAdded
      pendingAdded = null
      stampAll(added)
    })
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  // Catch-all: the probe-based cache invalidation covers insertion and
  // removal, and the shell seams almost never change — but a full re-query
  // every ~800ms bounds any miss (an exotic :has ancestor rewrite) to under
  // a second, at a few ms amortized cost.
  const catchAll = window.setInterval(() => {
    if (!disposed) stampAll(null)
  }, 800)
  return () => {
    disposed = true
    seamStamperActive = false
    if (scheduled !== 0) cancelAnimationFrame(scheduled)
    scheduled = 0
    window.clearInterval(catchAll)
    if (graceRecheckTimer !== 0) clearTimeout(graceRecheckTimer)
    graceRecheckTimer = 0
    observer.disconnect()
  }
}
