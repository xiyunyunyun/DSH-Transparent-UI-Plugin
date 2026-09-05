/**
 * Cursor spotlight glow + geometric tilt: the deepseek.com/harness
 * feature-card hover interactions, ported onto the floating glass panes.
 *
 * Two effects ride the same hover marker (`data-spot-on`):
 * - a blue radial glow that follows the cursor — a `data-dsh-aqua-glow`
 *   overlay inside each pane whose inline background a JS pointermove
 *   writes (`radial-gradient(180px at Xpx Ypx, rgba(120,170,255,.15),
 *   transparent 70%)`, official values). The glow sits BEHIND the glass
 *   (z-index -1) so it diffuses through the translucent surface and never
 *   covers content;
 * - a cursor-driven rigid tilt written inline per pointermove, the official
 *   card's exact recipe (sign-verified from its inline transform):
 *   `perspective(800px) rotateX(θx) rotateY(θy) scale(1.01)` with
 *   θx = −k·Δy, θy = +k·Δx — the edge under the cursor sinks, the far edge
 *   lifts (cursor right ⇒ right sinks; cursor top ⇒ top sinks), ≈1° at the
 *   pane edge, 0.1s ease-out transition;
 *
 * Port notes:
 * - the sidebar NEVER tilts (its settings overlay renders inside the column
 *   and a running transform would re-anchor it — the panel traps at the
 *   column width); it keeps the glow;
 * - the composer bar (inputbar) DOES tilt. Tooltips that mount inside it
 *   (send/stop, context, stats — the app's viewport-anchored Fd bubbles) are
 *   re-pinned to their trigger every frame by the bubble-anchor loop, so the
 *   tilt stays live while they show and the hover text never lands in the
 *   bar's poisoned coordinate space; dialogs/menus/listboxes cannot be
 *   re-pinned that way (they clamp by measuring their rendered box), so
 *   those alone pause the tilt via the keeper's glide-back and are revealed
 *   once the transform is home;
 * - the tilt rides a short CSS transition and reduced motion skips it;
 * - geometry is measured ONCE per hover session in untransformed local space
 *   (offset-based — immune to the pane's own rotation) and refreshed on
 *   DOM/layout changes, so the per-frame path does zero layout reads.
 *
 * Two html-attribute gates from the layer's settings: `data-dsh-aqua-spotlight`
 * (glow) and `data-dsh-aqua-press` (tilt). Hover tracking runs when EITHER is
 * on. The glow divs are maintained by spot-core's overlay keeper, independent
 * of the toggles.
 */
import { repinPanelBubbles } from './bubble-anchor.ts'
import {
  closestSpot, ensureGlow, glassLocalRect, GLOW_ATTR, inside, ON_ATTR, spotElements,
  startOverlayKeeper, visualRect,
} from './spot-core.ts'

/** html attribute the layer uses to switch the glow effect (its toggle). */
export const SPOTLIGHT_ATTRIBUTE = 'data-dsh-aqua-spotlight'

/** html attribute the layer uses to switch the tilt effect (its toggle). */
export const PRESS_ATTRIBUTE = 'data-dsh-aqua-press'

/** Glow radius, px — matches the official card. */
const GLOW_RADIUS = 180

/** Fallback glow color (the CSS var is normally provided by the stylesheet). */
const GLOW_FALLBACK = 'rgba(90, 215, 255, 0.17)'

/** Tilt magnitude at the pane edge, radians (≈1° — perceptible but gentle). */
const TILT_MAX = 0.0175

/** Panes whose min dimension exceeds this (px) tilt at half magnitude —
 *  large boards (the trajectory timeline, a full-page plugin view) would
 *  otherwise read as violently pressed at the edges. */
const TILT_GENTLE_MIN = 480

/** Tilt perspective distance, px (official value). */
const TILT_PERSPECTIVE = 800

/** How long after a sidebar collapse/expand flip the sidebar pane stays out
 *  of the tilt (ms). During the flip the rail runs the app's 300ms grid-slide
 *  plus the 150ms margin/border-radius transition of the glass pane itself —
 *  a live tilt writes a transform every frame on top, which re-anchors the
 *  pane mid-layout-animation and forces its backdrop-filter to resample for
 *  every frame of the flight (the collapse jank). The glow stays live. */
const SIDEBAR_FLIP_QUIET_MS = 450

/** performance.now() of the last data-sidebar-collapsed flip (−∞ = none). */
let sidebarFlippedAt = -Infinity

/** Ease-back settle time (ms) — must outlast the CSS transform transition. */
const SETTLE_MS = 240

/** The glow is live only while its gate attribute is on <html>. */
function glowGated(): boolean {
  return document.documentElement.hasAttribute(SPOTLIGHT_ATTRIBUTE)
}

/** The tilt is live only while its gate attribute is on <html>. */
function tiltGated(): boolean {
  return document.documentElement.hasAttribute(PRESS_ATTRIBUTE)
}

/** Hover tracking runs when EITHER effect is enabled. */
function hoverGated(): boolean {
  return glowGated() || tiltGated()
}

/** Whether the tilt may run on this pane right now. */
function tiltable(spot: HTMLElement): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (spot.matches('[class*="sidebarCol"]')) {
    // The settings overlay renders INSIDE the sidebar column: tilting the
    // sidebar while the panel is open would re-anchor its fixed overlay into
    // the column — so the sidebar pauses while a dialog exists (the keeper
    // untraps it instantly the moment the panel mounts). The html attribute
    // is the seam stamper's maintained state gate (zero querying per frame).
    if (document.documentElement.hasAttribute('data-dsh-dialog-open')) return false
    // Collapse/expand transition window: see SIDEBAR_FLIP_QUIET_MS.
    if (performance.now() - sidebarFlippedAt < SIDEBAR_FLIP_QUIET_MS) return false
  }
  // A VISIBLE popover mounted inside the inputbar (send/stop tooltips,
  // model menus, dsh-context modals — all position:fixed against the
  // viewport) pauses the bar's tilt. The persistent stats tooltip hides
  // when the pointer leaves the bar (clearSpot), so hidden ones don't
  // block the tilt from coming back on the next hover.
  if (spot.hasAttribute('data-dsh-inputbar') && inputbarPopover(spot) !== null) return false
  return true
}

/** The first VISIBLE VIEWPORT-ANCHORED (position:fixed) dialog-ish popover
 *  mounted INSIDE the inputbar, if any. Only fixed ones pause the tilt: they
 *  position themselves in viewport coordinates that a transform re-anchors
 *  and cannot be re-pinned per frame. The app's current menus/dialogs are
 *  position:absolute INSIDE the pane (anchored to their trigger) — they ride
 *  the tilted glass coherently and must NOT pause the tilt (clicking a
 *  button used to flatten the glass for the whole popover lifetime). Plain
 *  tooltips ([role=tooltip]) are likewise pinned by the bubble-anchor loop. */
function inputbarPopover(spot: HTMLElement): HTMLElement | null {
  const popover = Array.from(spot.querySelectorAll('[role="dialog"], [role="menu"], [role="listbox"]'))
    .find((candidate) => {
      // One computed-style object, two reads — this runs per paint frame.
      const cs = getComputedStyle(candidate)
      return cs.visibility !== 'hidden' && cs.position === 'fixed'
    })
  return popover ?? null
}

/** One hover session: geometry captured at entry, kept fresh by the feed. */
interface SpotSession {
  spot: HTMLElement
  /** The visible glass region in viewport space (cursor math). */
  visual: DOMRect
  /** The visible glass region in spot-local, UNtransformed space (glow
   *  geometry + tilt pivot). */
  local: { left: number; top: number; width: number; height: number }
  /** Glow overlay (null while the glow toggle is off). */
  glow: HTMLElement | null
}

/**
 * Attach the delegated pointer feeds. Everything is document-level: no
 * per-pane listeners, and the rAF merge collapses pointermove bursts to one
 * style write per frame.
 * @returns a disposer that drops listeners, overlays, and inline styles.
 */
export function startSpotlight(): () => void {
  /** The hovered pane (cleared on leave). */
  let current: HTMLElement | null = null
  /** Geometry for the hovered pane. */
  let session: SpotSession | null = null
  let raf = 0
  let refreshRaf = 0
  /** Panes currently carrying a JS-written transform (wipe only those). */
  const tilted = new WeakSet<HTMLElement>()
  /** Pending ease-back removal timers per pane (leave → neutral → cleanup). */
  const settle = new Map<HTMLElement, number>()
  /** Inputbar popovers already revealed after a glide-back (element-keyed:
   *  a React rerender must not restart their fade-in). */
  const revealed = new WeakSet<HTMLElement>()

  /** Ease a pressed pane back to neutral, then drop the inline transform. */
  const easeBack = (spot: HTMLElement): void => {
    if (!tilted.has(spot)) return
    tilted.delete(spot)
    // Neutral transform lets the CSS transition glide the pane home; the
    // inline transform is removed after the flight (a residual transform
    // would keep the pane a containing block for fixed descendants).
    spot.style.transform =
      `perspective(${TILT_PERSPECTIVE}px) rotateX(0rad) rotateY(0rad) scale(1)`
    // The glide write and its removal both re-anchor any mounted panel
    // bubble mid-frame — re-pin synchronously so no poisoned frame paints.
    repinPanelBubbles()
    const id = window.setTimeout(() => {
      settle.delete(spot)
      spot.style.removeProperty('transform')
      spot.style.removeProperty('transform-origin')
      repinPanelBubbles()
    }, SETTLE_MS)
    settle.set(spot, id)
  }

  /** Drop every effect this controller wrote onto a pane. */
  const clearSpot = (spot: HTMLElement): void => {
    spot.removeAttribute(ON_ATTR)
    if (current === spot) {
      current = null
      session = null
    }
    const glow = spot.querySelector<HTMLElement>(`:scope > [${GLOW_ATTR}]`)
    if (glow !== null) glow.style.removeProperty('background-image')
    // Inputbar popovers own their visibility (tooltips unmount on leave;
    // dialogs/menus are force-released by the keeper only while mounted) —
    // only the reveal marker and the tilt itself are dropped here.
    if (spot.hasAttribute('data-dsh-inputbar')) {
      spot.removeAttribute('data-tilt-revealed')
    }
    easeBack(spot)
  }

  /** Capture (or refresh) the hover geometry; sets the glow overlay box. */
  const measure = (spot: HTMLElement): SpotSession => {
    const visual = visualRect(spot)
    const local = glassLocalRect(spot)
    const glow = glowGated() ? ensureGlow(spot) : null
    if (glow !== null) {
      glow.style.left = `${local.left}px`
      glow.style.top = `${local.top}px`
      glow.style.width = `${local.width}px`
      glow.style.height = `${local.height}px`
    }
    return { spot, visual, local, glow }
  }

  /** Write the glow gradient and/or the tilt transform for the pointer position. */
  const paint = (s: SpotSession, clientX: number, clientY: number): void => {
    if (raf !== 0) return
    raf = requestAnimationFrame(() => {
      raf = 0
      const { spot, visual, local } = s
      // Over a gutter / padding region, not the glass — nothing to paint.
      if (!inside(visual, clientX, clientY)) {
        clearSpot(spot)
        return
      }
      let glow = s.glow
      if (glow === null && glowGated()) {
        // Toggle flipped on mid-hover: late-bind the glow overlay.
        s = session = measure(spot)
        glow = s.glow
      }
      if (glow !== null) {
        if (glowGated()) {
          // background-image only: the shorthand would wipe any CSS paint.
          glow.style.backgroundImage =
            `radial-gradient(${GLOW_RADIUS}px at ${clientX - visual.left}px ${clientY - visual.top}px, var(--dsh-aqua-spot-color, ${GLOW_FALLBACK}), transparent 70%)`
        } else {
          // Toggle flipped off mid-hover: drop the last radial so the
          // now-ungated div turns invisible immediately.
          glow.style.removeProperty('background-image')
        }
      }
      if (tiltGated() && tiltable(spot)) {
        // Normalized cursor offset from the glass center, clamped to ±0.5 —
        // the official card's formula, sign-verified against its inline
        // transform: cursor right ⇒ rotateY POSITIVE, cursor TOP ⇒ rotateX
        // POSITIVE — the edge under the cursor sinks, the far edge lifts.
        const dx = Math.min(0.5, Math.max(-0.5, (clientX - visual.left) / visual.width - 0.5))
        const dy = Math.min(0.5, Math.max(-0.5, (clientY - visual.top) / visual.height - 0.5))
        // Large boards (the trajectory timeline, a full-page plugin view)
        // get half the magnitude so the press stays gentle; card-sized
        // spots get the full recipe.
        const tiltMax = Math.min(visual.width, visual.height) > TILT_GENTLE_MIN ? TILT_MAX * 0.5 : TILT_MAX
        // Rotate about the visible glass center (spot-local, untransformed).
        // Same recipe for every pane — the sidebar and its collapsed rail
        // included.
        const pendingGlide = settle.get(spot)
        if (pendingGlide !== undefined) {
          clearTimeout(pendingGlide)
          settle.delete(spot)
          spot.style.removeProperty('transition')
        }
        spot.style.transformOrigin =
          `${local.left + local.width / 2}px ${local.top + local.height / 2}px`
        spot.style.transform =
          `perspective(${TILT_PERSPECTIVE}px) rotateX(${tiltMax * -2 * dy}rad) rotateY(${tiltMax * 2 * dx}rad) scale(1.01)`
        tilted.add(spot)
        // The tilt write (re-)anchors mounted panel bubbles into the pane's
        // coordinate space mid-frame — without a same-task re-pin, exactly
        // one poisoned frame reaches layout+paint (the scrollbar jump).
        repinPanelBubbles()
      } else if (tilted.has(spot)) {
        // A guarded pane — a VISIBLE dialog/menu/listbox mounted inside the
        // inputbar — must drop the transform IMMEDIATELY: those popovers
        // clamp against the viewport by measuring their rendered box, which
        // a held transform poisons (the pane is their containing block), and
        // they cannot be re-pinned per frame. The instant release coincides
        // with the popover's own appearance, so nothing reads as abrupt;
        // every other release (tilt toggled off mid-hover) keeps the eased
        // glide. Plain tooltips stay here — bubble-anchor pins them under
        // the live tilt.
        if (spot.hasAttribute('data-dsh-inputbar') && inputbarPopover(spot) !== null) {
          spot.style.setProperty('transition', 'none')
          spot.style.removeProperty('transform')
          spot.style.removeProperty('transform-origin')
          void spot.offsetWidth
          spot.style.removeProperty('transition')
          tilted.delete(spot)
          repinPanelBubbles()
        } else {
          easeBack(spot)
        }
      }
    })
  }

  const onMove = (event: PointerEvent): void => {
    if (!hoverGated()) return
    const spot = closestSpot(event.target)
    if (spot === null || session?.spot !== spot) return
    // The tilt stays LIVE over buttons — flattening the pane just because
    // the cursor crossed a control read as the glass abruptly "dropping"
    // (the one thing every variant of trigger-snapping got complained about).
    // Popover safety is owned entirely by tiltable() + the keeper instead:
    // paint already skips (and eases home) a pane with a VISIBLE popover
    // mounted inside the bar, and the keeper glides the transform away and
    // only then reveals the popover at its exact viewport spot — so no
    // bubble is ever painted under a live transform.
    paint(session, event.clientX, event.clientY)
  }

  const onOver = (event: PointerEvent): void => {
    if (!hoverGated()) return
    const spot = closestSpot(event.target)
    if (spot === null) return
    // The settings overlay renders INSIDE the sidebar column: while it is
    // open, the sidebar stays out of every hover effect (stamper-maintained
    // state gate — no per-entry query).
    if (spot.matches('[class*="sidebarCol"]') && document.documentElement.hasAttribute('data-dsh-dialog-open')) return
    // Gutter/padding entries never start a session (and must not cancel a
    // pending ease-back settle), so the glass check comes first.
    const next = measure(spot)
    if (!inside(next.visual, event.clientX, event.clientY)) return
    // Re-entry during an ease-back: cancel the pending inline cleanup.
    const id = settle.get(spot)
    if (id !== undefined) {
      clearTimeout(id)
      settle.delete(spot)
    }
    spot.setAttribute(ON_ATTR, '')
    current = spot
    session = next
    paint(next, event.clientX, event.clientY)
  }

  const onOut = (event: PointerEvent): void => {
    const spot = closestSpot(event.target)
    if (spot === null || spot !== current) return
    // Moving between children keeps the effects live; leaving the visible
    // glass (including into the wrapper's gutters) clears them.
    if (session !== null && inside(session.visual, event.clientX, event.clientY)) return
    clearSpot(spot)
  }

  // The glow divs live with the panes through React re-renders; DOM/layout
  // changes also refresh the active hover session (coalesced).
  const keeper = startOverlayKeeper(() => {
    // The settings dialog mounts INSIDE the sidebar column — release the
    // sidebar with a SNAP, not a glide: removing the inline transform while
    // the CSS transition is live would keep the COMPUTED transform alive
    // for ~0.1s and trap the panel's fixed overlay in the column for those
    // frames (the "stuck in the sidebar for a moment" bug). Disabling the
    // transition around the removal makes the release instant.
    for (const spot of spotElements()) {
      if (!spot.matches('[class*="sidebarCol"]')) continue
      if (spot.querySelector('[role="dialog"]') === null) continue
      spot.removeAttribute(ON_ATTR)
      const id = settle.get(spot)
      if (id !== undefined) {
        clearTimeout(id)
        settle.delete(spot)
      }
      tilted.delete(spot)
      spot.style.setProperty('transition', 'none')
      spot.style.removeProperty('transform')
      spot.style.removeProperty('transform-origin')
      void spot.offsetWidth
      spot.style.removeProperty('transition')
      repinPanelBubbles()
      if (current === spot) {
        current = null
        session = null
      }
    }
    // Inputbar popovers that are VIEWPORT-ANCHORED (position:fixed) clamp
    // themselves by measuring their rendered box — a live tilt transform
    // would re-anchor them into the bar and poison that measurement.
    // GLIDE-BACK, not snap: the transform eases home over 0.12s, after
    // which the popover is revealed ONCE (element-keyed — rerenders must
    // not restart its fade-in). The app's current menus/dialogs are
    // position:absolute INSIDE the pane (anchored to their trigger) — they
    // ride the tilted glass coherently and are deliberately skipped here,
    // so clicking a button keeps the tilt alive. Plain tooltips are
    // likewise re-pinned every frame by bubble-anchor.
    for (const spot of spotElements()) {
      if (!spot.hasAttribute('data-dsh-inputbar')) continue
      const popovers = Array.from(spot.querySelectorAll('[role="dialog"], [role="menu"], [role="listbox"]'))
        .filter((popover) => getComputedStyle(popover).position === 'fixed')
      if (popovers.length === 0) continue
      const unrevealed = popovers.filter((popover) => !revealed.has(popover))
      const reveal = (): void => {
        spot.setAttribute('data-tilt-revealed', '')
        for (const popover of unrevealed) {
          revealed.add(popover)
          popover.style.animation = 'none'
          void popover.offsetWidth
          popover.style.removeProperty('animation')
        }
      }
      if (spot.style.transform === '') {
        reveal()
        continue
      }
      if (settle.has(spot)) continue
      spot.style.setProperty('transition', 'transform 0.12s ease-out')
      spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(0rad) rotateY(0rad) scale(1)`
      tilted.delete(spot)
      repinPanelBubbles()
      const id = window.setTimeout(() => {
        settle.delete(spot)
        spot.style.removeProperty('transition')
        spot.style.removeProperty('transform')
        spot.style.removeProperty('transform-origin')
        repinPanelBubbles()
        reveal()
      }, 120)
      settle.set(spot, id)
    }
    if (session === null || refreshRaf !== 0) return
    refreshRaf = requestAnimationFrame(() => {
      refreshRaf = 0
      if (session === null) return
      // Sidebar flip window: the geometry churns every frame and a re-measure
      // forces a full reflow of the (long-message) conversation. The next
      // quiet mutation catches the settled geometry instead.
      if (document.documentElement.hasAttribute('data-dsh-sidebar-anim')) return
      session = measure(session.spot)
    })
  })

  document.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerover', onOver, { passive: true })
  document.addEventListener('pointerout', onOut, { passive: true })

  // Sidebar collapse/expand flips timestamp the tilt-quiet window (only the
  // frame element carries data-sidebar-collapsed; the filter keeps every
  // other attribute change out of this callback).
  const flipObserver = new MutationObserver(() => {
    sidebarFlippedAt = performance.now()
  })
  flipObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-sidebar-collapsed'],
    subtree: true,
  })

  return () => {
    document.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerover', onOver)
    document.removeEventListener('pointerout', onOut)
    flipObserver.disconnect()
    keeper()
    if (raf !== 0) cancelAnimationFrame(raf)
    if (refreshRaf !== 0) cancelAnimationFrame(refreshRaf)
    for (const id of settle.values()) clearTimeout(id)
    settle.clear()
    for (const spot of spotElements()) {
      spot.removeAttribute(ON_ATTR)
      if (tilted.has(spot)) {
        tilted.delete(spot)
        spot.style.removeProperty('transform')
        spot.style.removeProperty('transform-origin')
      }
    }
  }
}
