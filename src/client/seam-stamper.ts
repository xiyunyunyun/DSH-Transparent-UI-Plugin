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

import { SPOT_ATTR } from './spot-core.ts'

interface Seam {
  /** Attribute to stamp (bare name; value is always ''). */
  readonly attribute: string
  /** CSS selector for the element(s) to stamp. */
  readonly selector: string
  /** Stamp only the first (topmost) match, not every descendant match. */
  readonly first?: boolean
}

const SEAMS: readonly Seam[] = [
  // The layout frame: the sidebar column's direct parent.
  { attribute: 'data-dsh-frame', selector: ':has(> [class*="sidebarCol"])' },
  // The sidebar content root (topmost `root` under the column — settings
  // internals also carry a `root` class but sit deeper, so first match wins).
  { attribute: 'data-dsh-sidebar-root', selector: '[class*="sidebarCol"] [class*="root"]', first: true },
  // New-session button (the raised-surface seam).
  { attribute: 'data-dsh-surface', selector: 'button[class*="newSession"]' },
  // Trajectory view (the only composer-overlay view today).
  { attribute: 'data-dsh-trajectory', selector: '[data-conversation-composer-overlay]' },
  // Details panel (topmost `root` under the details column).
  { attribute: 'data-dsh-details', selector: '[class*="detailsCol"] [class*="root"]', first: true },
  // Composer bar root: the composer card's direct parent.
  { attribute: 'data-dsh-inputbar', selector: ':has(> [data-composer-card])' },
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

function stamp(seam: Seam): void {
  if (seam.first) {
    const el = document.querySelector(seam.selector)
    if (el !== null && !el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, '')
    return
  }
  for (const el of document.querySelectorAll(seam.selector)) {
    if (!el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, '')
  }
}

function stampAll(): void {
  for (const seam of SEAMS) stamp(seam)
  stampPluginViews()
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
function stampPluginViews(): void {
  for (const root of document.querySelectorAll<HTMLElement>('[data-slot="conversation.view"] > *')) {
    // The chat view (and any view embedding a composer — the hero) keep
    // their own seams; generic view glass must not wash them. The chat
    // mounts PROGRESSIVELY (its node slots appear after the root), so the
    // first pass can misread it as a plugin view — the generic stamps are
    // therefore REVERSIBLE: every pass re-judges and strips them the moment
    // the chat markers exist.
    const isChat = root.querySelector("[data-slot^='conversation.chat'], [data-slot^='tool.call'], [data-composer-card], [data-dsh-inputbar]") !== null
    if (isChat) {
      if (root.hasAttribute('data-dsh-view')) root.removeAttribute('data-dsh-view')
      if (root.hasAttribute(SPOT_ATTR)) root.removeAttribute(SPOT_ATTR)
      continue
    }
    if (!root.hasAttribute('data-dsh-view')) root.setAttribute('data-dsh-view', '')
    let spotted = false
    for (const card of root.querySelectorAll<HTMLElement>("[class*='card'], [class*='Card']")) {
      // List CONTAINERS (*cards* ULs) are wrappers, not panes; a card nested
      // inside an already-stamped card stays part of that pane.
      if (card.matches('ul, [class*="cards"]') || card.closest('[' + SPOT_ATTR + ']') !== null) continue
      card.setAttribute(SPOT_ATTR, '')
      spotted = true
    }
    if (!spotted && !root.hasAttribute(SPOT_ATTR)) root.setAttribute(SPOT_ATTR, '')
  }
}

/**
 * Stamp the seams once, then keep them stamped as React remounts nodes.
 * @returns a disposer that disconnects the observer.
 */
export function startSeamStamper(): () => void {
  stampAll()
  // Coalesce stamp passes to one per frame: click-driven React commits fire
  // this observer per batch, and a synchronous pass runs a dozen :has
  // querySelectors plus attribute writes (style invalidation) — exactly the
  // work that turned every button press into a visible hitch of the
  // ambient scene. One frame of stamp latency is invisible.
  let scheduled = 0
  let disposed = false
  const observer = new MutationObserver(() => {
    if (scheduled !== 0 || disposed) return
    scheduled = requestAnimationFrame(() => {
      scheduled = 0
      if (!disposed) stampAll()
    })
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  return () => {
    disposed = true
    if (scheduled !== 0) cancelAnimationFrame(scheduled)
    scheduled = 0
    observer.disconnect()
  }
}
