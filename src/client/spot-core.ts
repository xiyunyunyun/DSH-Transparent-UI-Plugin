/**
 * Spot geometry + overlay maintenance, shared by the spotlight/tilt
 * controller (spotlight.ts).
 *
 * A "spot" is a floating-glass pane stamped with `data-dsh-aqua-spot` by the
 * seam-stamper. One injected overlay lives inside a spot:
 * `data-dsh-aqua-glow` — the cursor glow surface (geometry set by the hover
 * controller; the radial fill lives in the stylesheet). It is re-attached
 * after React re-renders wipe it (one shared MutationObserver).
 */

/** Seam attribute marking a floating-glass pane as a spotlight target. */
export const SPOT_ATTR = 'data-dsh-aqua-spot'

/** Attribute on the injected glow overlay div. */
export const GLOW_ATTR = 'data-dsh-aqua-glow'

/** Marker set on a pane while the pointer is inside it. */
export const ON_ATTR = 'data-spot-on'

/** Selector matching every stamped pane. */
export const SPOT_SELECTOR = `[${SPOT_ATTR}]`

/** Nearest stamped pane from an event target (null when outside all panes). */
export function closestSpot(target: EventTarget | null): HTMLElement | null {
  return target instanceof Element ? target.closest<HTMLElement>(SPOT_SELECTOR) : null
}

/** Cached spot list. The seam stamper invalidates it whenever it (re)writes
 *  a spot attribute, so consumers (the overlay keeper's per-change passes,
 *  the spotlight disposer) share one document-wide query instead of several.
 *  A disconnected spot still forces a re-query — the cache never serves
 *  dead nodes. */
let spotCache: HTMLElement[] | null = null

/** Drop the shared spot cache (the seam stamper calls this after touching
 *  any spot attribute; a full re-query happens on the next spotElements). */
export function invalidateSpotCache(): void {
  spotCache = null
}

/** Every stamped pane in document order. */
export function spotElements(): HTMLElement[] {
  if (spotCache === null || spotCache.some((el) => !el.isConnected)) {
    spotCache = Array.from(document.querySelectorAll<HTMLElement>(SPOT_SELECTOR))
  }
  return spotCache
}

/**
 * Visible ANCHORED popovers (command lists, menus) mounted inside a spot.
 * While open they are part of the pane's glass — the app anchors them to the
 * composer INSIDE the pane, so the hover geometry extends over them and the
 * tilt stays live while the pointer is on the list (the popover rides the
 * tilted pane coherently). Fixed ones are NOT part of the pane: they anchor
 * to the viewport and glide the tilt home instead (spotlight.ts).
 */
export function popoverGlassSurfaces(spot: HTMLElement): HTMLElement[] {
  return Array.from(spot.querySelectorAll<HTMLElement>("[role='menu'], [role='listbox'], [role='dialog']")).filter((el) => {
    const cs = getComputedStyle(el)
    return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.position !== 'fixed'
  })
}

/**
 * The visible glass region of a pane (viewport rect). The fused
 * composer+stats spot is the wider invisible inputbar wrapper — its glass is
 * the union of the composer card, the docked stats band, and any mounted
 * anchored popover (the open command list above the card), so the wrapper's
 * side gutters stay outside every effect.
 */
export function visualRect(spot: HTMLElement): DOMRect {
  if (spot.querySelector('[data-composer-card]') !== null) {
    const card = spot.querySelector<HTMLElement>('[data-composer-card]')!
    const r0 = card.getBoundingClientRect()
    let left = r0.left
    let top = r0.top
    let right = r0.right
    let bottom = r0.bottom
    const stats = spot.querySelector<HTMLElement>('[data-dsh-stats]')
    if (stats !== null) {
      const r1 = stats.getBoundingClientRect()
      left = Math.min(left, r1.left)
      top = Math.min(top, r1.top)
      right = Math.max(right, r1.right)
      bottom = Math.max(bottom, r1.bottom)
    }
    for (const pop of popoverGlassSurfaces(spot)) {
      const r2 = pop.getBoundingClientRect()
      left = Math.min(left, r2.left)
      top = Math.min(top, r2.top)
      right = Math.max(right, r2.right)
      bottom = Math.max(bottom, r2.bottom)
    }
    return new DOMRect(left, top, right - left, bottom - top)
  }
  return spot.getBoundingClientRect()
}

/** Is the pointer over the visible glass of the pane? */
export function inside(visual: DOMRect, clientX: number, clientY: number): boolean {
  return clientX >= visual.left && clientX <= visual.right
    && clientY >= visual.top && clientY <= visual.bottom
}

/** Offset-chain position of `el` within `ancestor` (both boxes), in the
 *  UNTRANSFORMED layout space — offsetLeft/offsetTop ignore transforms, so
 *  this stays exact while the pane is tilted. */
function localTopLeft(el: HTMLElement, ancestor: HTMLElement): { x: number; y: number } {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node !== null && node !== ancestor) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y }
}

/**
 * The visible glass region of a pane in the pane's own local space
 * (untransformed — safe to measure while tilted). For the fused
 * composer+stats spot this is the union of the composer card, the docked
 * stats band, and any mounted anchored popover; for the other panes it is
 * the pane's own box.
 */
export function glassLocalRect(spot: HTMLElement): { left: number; top: number; width: number; height: number } {
  const card = spot.querySelector<HTMLElement>('[data-composer-card]')
  if (card === null) {
    return { left: 0, top: 0, width: spot.offsetWidth, height: spot.offsetHeight }
  }
  const cardPos = localTopLeft(card, spot)
  let left = cardPos.x
  let top = cardPos.y
  let right = left + card.offsetWidth
  let bottom = top + card.offsetHeight
  const stats = spot.querySelector<HTMLElement>('[data-dsh-stats]')
  if (stats !== null) {
    const statsPos = localTopLeft(stats, spot)
    left = Math.min(left, statsPos.x)
    top = Math.min(top, statsPos.y)
    right = Math.max(right, statsPos.x + stats.offsetWidth)
    bottom = Math.max(bottom, statsPos.y + stats.offsetHeight)
  }
  for (const pop of popoverGlassSurfaces(spot)) {
    const popPos = localTopLeft(pop, spot)
    left = Math.min(left, popPos.x)
    top = Math.min(top, popPos.y)
    right = Math.max(right, popPos.x + pop.offsetWidth)
    bottom = Math.max(bottom, popPos.y + pop.offsetHeight)
  }
  return { left, top, width: right - left, height: bottom - top }
}

/** Ensure the pane carries exactly one glow overlay div. */
export function ensureGlow(spot: HTMLElement): HTMLElement {
  let glow = spot.querySelector<HTMLElement>(`:scope > [${GLOW_ATTR}]`)
  if (glow === null) {
    glow = document.createElement('div')
    glow.setAttribute(GLOW_ATTR, '')
    glow.setAttribute('aria-hidden', 'true')
    spot.appendChild(glow)
  }
  return glow
}

/**
 * One shared observer + resize feed: keeps the glow divs glued to the panes
 * through React re-renders and notifies the caller of DOM/layout changes
 * (the caller coalesces the callbacks).
 * @returns a disposer that removes every injected glow div.
 */
export function startOverlayKeeper(onChange: () => void): () => void {
  // Coalesce to one pass per frame: React commits (every click, every
  // streamed token) fire this observer per batch, and a synchronous pass
  // walks the whole document plus forced-layout geometry — work that used
  // to land mid-commit and read as stutter in the ambient scene.
  let scheduled = false
  let disposed = false
  const tick = (): void => {
    if (scheduled || disposed) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      if (disposed) return
      for (const spot of spotElements()) ensureGlow(spot)
      onChange()
    })
  }
  tick()
  const observer = new MutationObserver(tick)
  observer.observe(document.documentElement, { childList: true, subtree: true })
  window.addEventListener('resize', tick, { passive: true })
  return () => {
    disposed = true
    observer.disconnect()
    window.removeEventListener('resize', tick)
    for (const glow of document.querySelectorAll(`[${GLOW_ATTR}]`)) glow.remove()
  }
}
