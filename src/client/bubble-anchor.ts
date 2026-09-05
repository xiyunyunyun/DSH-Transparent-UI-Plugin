/**
 * Bubble anchor: viewport-anchored tooltips ([role=tooltip]) mount INSIDE the
 * panels the spotlight tilts (inputbar buttons, the stats row, sidebar and
 * header buttons). While such a panel holds ANY transform — even the neutral
 * glide-hold — it becomes the bubble's containing block: the bubble renders
 * shifted by the panel's own origin, and the app's mount-time clamp then
 * measures that phantom box and "corrects" the bubble to a wrong spot (the
 * misaligned hover text flying to the upper-left, the phantom vertical
 * scrollbar, and — before this loop existed — the forced glide-back that
 * snapped the tilt home).
 *
 * This controller re-pins every panel bubble to the position the app
 * INTENDED, derived from the trigger element itself (Fd's recipe:
 * horizontally centered over the trigger — or the trigger's right edge +
 * 10px for side="right" — the bubble edge sits 8px from the trigger,
 * clamped to the 12px viewport margins). The correction is written into
 * the inline `left/top` — the LAYOUT box itself moves, so no scroll region
 * is ever inflated by a misplaced box — with transitions disabled so the
 * per-frame writes are not retargeted by the app's transition:all.
 *
 * The trigger is the bubble's PREVIOUS ELEMENT SIBLING: Fd renders
 * `[clonedChild, bubble]` consecutively into the same parent, which is the
 * only order-stable identification — the trigger's parent is frequently a
 * toolbar with unrelated siblings (the trailing row's other buttons, the
 * stats dock's hidden jump anchor), so any "single non-bubble child" scan
 * bails exactly on the buttons that need the pin most (send/stop, stats).
 *
 * Pinning happens SYNCHRONOUSLY at mount (a MutationObserver microtask runs
 * before the browser paints) — the poisoned frames are never painted and
 * never reach the scrollable overflow — and continues per rAF frame while
 * the pointer is inside a panel so the bubble tracks the tilted glass.
 *
 * The panel KEEPS its tilt while a tooltip is up (no glide-back, no hidden
 * frames); the bubble simply rides the tilt.
 */

import { SPOT_SELECTOR } from './spot-core.ts'

/** Panels whose bubbles this controller owns: every tilt spot. The spot set
 *  is the superset of the surfaces that host interactive controls (sidebar,
 *  header, inputbar, trajectory, plugin-view cards), so new spots — e.g. a
 *  plugin view's card panes — pin their bubbles automatically. */
const PANEL_SELECTOR = SPOT_SELECTOR

/** The app's viewport clamp margin, px (Fd's H). */
const VIEWPORT_MARGIN = 12

/** Gap between the trigger's right edge and a side="right" bubble, px. */
const RIGHT_GAP = 10

/** Gap between the trigger and a top/bottom bubble, px (Fd's constant). */
const EDGE_GAP = 8

/** Mounted hook the tilt controller invokes after transform writes. */
let notifyPin: (() => void) | undefined

/** Synchronous re-pin of every panel bubble — the tilt controller calls
 *  this right after writing a pane's transform (no-op while unmounted). */
export function repinPanelBubbles(): void {
  notifyPin?.()
}

/**
 * Start the pinning controller.
 * @returns a disposer that stops every feed and drops the written pins.
 */
export function startBubbleAnchor(): () => void {
  let raf = 0
  /** Whether the pointer is currently inside a tilt panel. */
  let insidePanel = false

  /** Fd mounts `[clonedChild, bubble]` consecutively: the trigger is the
   *  bubble's previous element sibling (skipping stray tooltip siblings).
   *  Falls back to the single-non-bubble-child scan for portals that place
   *  the bubble elsewhere. */
  const triggerOf = (bubble: HTMLElement): Element | null => {
    let prev = bubble.previousElementSibling
    while (prev !== null && prev.getAttribute('role') === 'tooltip') {
      prev = prev.previousElementSibling
    }
    if (prev !== null) return prev
    const parent = bubble.parentElement
    if (parent === null) return null
    let anchor: Element | null = null
    for (const child of parent.children) {
      if (child === bubble || child.getAttribute('role') === 'tooltip') continue
      if (anchor !== null) return null
      anchor = child
    }
    return anchor
  }

  /** Pin one bubble at its trigger's intended viewport spot (idempotent —
   *  each call re-measures and only cancels the residual error). The
   *  correction is written into the inline `left/top` — NOT the translate
   *  property: a translate moves the painted box but the layout box stays
   *  wherever the poisoned inline coords put it (hundreds of px below the
   *  pane), and a clipped scrollable overflow still counts it — the residual
   *  +51px scrollbar jump. Rewritten coords put the LAYOUT box itself inside
   *  (or above) the pane, so no scroll region is ever inflated. */
  const pinBubble = (bubble: HTMLElement): void => {
    pinBatch([bubble])
  }

  /** All layout READS for a pin, before any write. */
  const measurePin = (bubble: HTMLElement): { bubble: HTMLElement; ar: DOMRect; br: DOMRect; side: string } | null => {
    const anchor = triggerOf(bubble)
    const ar = anchor?.getBoundingClientRect()
    if (ar === undefined || (ar.width === 0 && ar.height === 0)) {
      return null // no usable trigger — leave the app's own positioning alone
    }
    const br = bubble.getBoundingClientRect()
    return { bubble, ar, br, side: bubble.getAttribute('data-side') ?? 'top' }
  }

  /** The write half: compute + apply from already-read geometry. */
  const applyPin = (measured: { bubble: HTMLElement; ar: DOMRect; br: DOMRect; side: string }): void => {
    const { bubble, ar, br, side } = measured
    let dx = 0
    let dy = 0
    if (side === 'right') {
      dx = ar.right + RIGHT_GAP - br.left
      dy = ar.top + ar.height / 2 - (br.top + br.height / 2)
    } else if (side === 'bottom') {
      dx = ar.left + ar.width / 2 - (br.left + br.width / 2)
      dy = ar.bottom + EDGE_GAP - br.top
    } else {
      dx = ar.left + ar.width / 2 - (br.left + br.width / 2)
      dy = ar.top - EDGE_GAP - br.bottom
    }
    // Reproduce the app's viewport clamp on the pinned box (12px margins).
    const vw = window.innerWidth
    if (br.right + dx > vw - VIEWPORT_MARGIN) dx = vw - VIEWPORT_MARGIN - br.right
    if (br.left + dx < VIEWPORT_MARGIN) dx = VIEWPORT_MARGIN - br.left
    const curLeft = Number.parseFloat(bubble.style.left)
    const curTop = Number.parseFloat(bubble.style.top)
    if (!Number.isFinite(curLeft) || !Number.isFinite(curTop)) return
    const nextLeft = `${curLeft + dx}px`
    const nextTop = `${curTop + dy}px`
    if (bubble.style.left !== nextLeft) bubble.style.left = nextLeft
    if (bubble.style.top !== nextTop) bubble.style.top = nextTop
  }

  /** Pin a batch of bubbles READS-FIRST: every rect is read before any
   *  left/top is written, so the batch costs ONE forced reflow instead of
   *  two per bubble. A reflow of a long-message conversation is expensive,
   *  and the per-frame pin loop runs exactly while the sidebar flip keeps
   *  the whole document layout dirty every frame. */
  const pinBatch = (bubbles: HTMLElement[]): void => {
    const measured = []
    for (const bubble of bubbles) {
      if (bubble.style.transition !== 'none') bubble.style.transition = 'none'
      if (bubble.style.translate !== '') bubble.style.translate = ''
      const m = measurePin(bubble)
      if (m !== null) measured.push(m)
    }
    for (const m of measured) applyPin(m)
  }

  const step = (): void => {
    raf = 0
    const bubble = document.querySelector<HTMLElement>('[role="tooltip"]')
    const panel = bubble !== null && bubble.isConnected ? bubble.closest<HTMLElement>(PANEL_SELECTOR) : null
    if (bubble === null || panel === null) {
      // Nothing to pin. Keep the loop alive only while the pointer stays
      // inside a panel (the next bubble must be tracked from its first
      // frame) — otherwise the per-frame work stops.
      if (insidePanel) raf = requestAnimationFrame(step)
      return
    }
    // Sidebar flip window: the flip keeps the whole document layout dirty
    // every frame, so a pin here would force a full reflow per frame (long
    // messages make one expensive). The bubble drifts with the rail for the
    // 450ms window — imperceptible next to the collapse animation itself.
    if (document.documentElement.hasAttribute('data-dsh-sidebar-anim')) {
      raf = requestAnimationFrame(step)
      return
    }
    pinBatch([bubble])
    raf = requestAnimationFrame(step)
  }

  /** Re-pin every panel bubble SYNCHRONOUSLY. The tilt controller calls
   *  this right after writing a pane's transform: a transform write re-
   *  anchors mounted bubbles into the pane's coordinate space mid-frame,
   *  and waiting for the next rAF would let exactly one poisoned frame
   *  reach layout+paint (the one-frame scrollbar jump). Same-task re-pinning
   *  keeps the layout this frame paints already correct. */
  const pinPanelBubbles = (): void => {
    const bubbles: HTMLElement[] = []
    for (const bubble of document.querySelectorAll<HTMLElement>('[role="tooltip"]')) {
      if (bubble.closest(PANEL_SELECTOR) !== null) bubbles.push(bubble)
    }
    if (bubbles.length > 0) pinBatch(bubbles)
  }

  /** Mount-time pin: the observer callback runs as a microtask AFTER the
   *  app's commit but BEFORE the browser paints, so the bubble's first
   *  rendered frame is already pinned — no poisoned frame is ever painted
   *  and the phantom scrollable overflow never exists. */
  const mountObserver = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        if (node.getAttribute('role') === 'tooltip') {
          if (node.closest(PANEL_SELECTOR) !== null) pinBubble(node)
          continue
        }
        for (const bubble of node.querySelectorAll<HTMLElement>('[role="tooltip"]')) {
          if (bubble.closest(PANEL_SELECTOR) !== null) pinBubble(bubble)
        }
      }
    }
  })

  const insidePanelOf = (target: Element | null): boolean => {
    return target !== null && target.closest(PANEL_SELECTOR) !== null
  }
  const onOver = (event: PointerEvent): void => {
    insidePanel = insidePanelOf(event.target instanceof Element ? event.target : null)
    if (insidePanel && raf === 0) step()
  }
  const onOut = (event: PointerEvent): void => {
    insidePanel = insidePanelOf(event.relatedTarget instanceof Element ? event.relatedTarget : null)
    if (insidePanel || raf === 0) return
    // Leaving every panel: keep looping only while a panel bubble survives
    // (focus tooltips, unmount lag); otherwise stop the per-frame work.
    const bubble = document.querySelector<HTMLElement>('[role="tooltip"]')
    if (bubble === null || bubble.closest(PANEL_SELECTOR) === null) {
      cancelAnimationFrame(raf)
      raf = 0
    }
  }
  document.addEventListener('pointerover', onOver, { capture: true, passive: true })
  document.addEventListener('pointerout', onOut, { capture: true, passive: true })
  // Tracking feed for bubbles that appear without a pointer crossing (focus)
  // and for tooltips mounted before this controller started.
  mountObserver.observe(document.documentElement, { childList: true, subtree: true })

  // The tilt controller (spotlight.ts) re-pins synchronously after every
  // transform write via this hook.
  notifyPin = pinPanelBubbles

  return () => {
    mountObserver.disconnect()
    if (raf !== 0) cancelAnimationFrame(raf)
    raf = 0
    document.removeEventListener('pointerover', onOver, { capture: true })
    document.removeEventListener('pointerout', onOut, { capture: true })
    for (const bubble of document.querySelectorAll<HTMLElement>('[role="tooltip"]')) {
      if (bubble.closest(PANEL_SELECTOR) !== null) {
        bubble.style.removeProperty('translate')
        bubble.style.removeProperty('transition')
      }
    }
  }
}
