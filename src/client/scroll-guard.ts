/**
 * Popover scroll guard: wheel / trackpad scrolls over the input bar's anchored
 * lists (指令 command list, model menu, usage panels) must never scroll the
 * chat messages BEHIND the popover. Two failure modes, one guard:
 *
 * - a list that IS a scroller (the command listbox) reaches its boundary and
 *   chains the remaining delta into the chat scroll container — the messages
 *   behind the list keep scrolling after the list bottomed out;
 * - a popover that NEVER scrolls (the model menu is overflow:hidden with
 *   fitting content) is skipped by the browser's scroll chain entirely, so the
 *   wheel lands on the chat scroll container directly — CSS
 *   `overscroll-behavior` cannot help there, because an element that never
 *   scrolls is never consulted as a scroller.
 *
 * The guard listens on `wheel` (non-passive, document-level like every other
 * feed here) and lets the popover's own scrollers consume the delta natively;
 * only when NOTHING between the event target and the popover surface can
 * scroll in the delta's direction does it `preventDefault()` — the chain into
 * the page behind dies there. Scoped to popover surfaces ([role=menu],
 * [role=listbox], [role=dialog] and the stamped popover shell), so scrolling
 * everywhere else — the messages, the sidebar, the composer card — keeps the
 * stock behavior untouched.
 */

/** Popover surfaces whose scroll must not leak into the page behind them. */
const SURFACE_SELECTOR = '[role="menu"], [role="listbox"], [role="dialog"], [data-dsh-popover-shell]'

/** Whether `node` is a user-scrollable box that can consume `delta` along the
 *  Y (or X) axis right now. Only auto/scroll count: overflow:hidden boxes are
 *  script-scrollable but the user wheel can never move them. */
function canConsume(node: HTMLElement, axis: 'Y' | 'X', delta: number): boolean {
  const cs = getComputedStyle(node)
  const overflow = axis === 'Y' ? cs.overflowY : cs.overflowX
  if (overflow !== 'auto' && overflow !== 'scroll') return false
  const max = axis === 'Y' ? node.scrollHeight - node.clientHeight : node.scrollWidth - node.clientWidth
  if (max <= 0) return false
  const pos = axis === 'Y' ? node.scrollTop : node.scrollLeft
  if (delta < 0) return pos > 0.5
  return pos < max - 0.5
}

const onWheel = (event: WheelEvent): void => {
  if (event.defaultPrevented) return
  const target = event.target
  if (!(target instanceof Element)) return
  const surface = target.closest(SURFACE_SELECTOR)
  if (surface === null) return
  const deltaY = event.deltaY
  const deltaX = event.deltaX
  if (deltaY === 0 && deltaX === 0) return
  // Walk from the target up THROUGH the surface: any scroller that can consume
  // the delta natively wins; reaching the surface's parent means the wheel is
  // headed for the page behind the popover — stop it here.
  let node: Element | null = target
  while (node !== null && node !== surface.parentElement) {
    if (node instanceof HTMLElement) {
      if (deltaY !== 0 && canConsume(node, 'Y', deltaY)) return
      if (deltaX !== 0 && canConsume(node, 'X', deltaX)) return
    }
    node = node.parentElement
  }
  event.preventDefault()
}

/**
 * Attach the popover scroll guard.
 * @returns a disposer that drops the listener.
 */
export function startScrollGuard(): () => void {
  document.addEventListener('wheel', onWheel, { passive: false })
  return () => {
    document.removeEventListener('wheel', onWheel)
  }
}
