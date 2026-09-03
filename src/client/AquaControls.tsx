/**
 * Shared controls for the Aqua settings surfaces: the Knob (stepless slider +
 * number box), the Segmented picker, the FontPicker dropdown (self-drawn
 * glass menu over enumerated system fonts), and the wallpaper file reader.
 */
import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import css from './AquaAppearanceRow.module.css'

/** One slider + number box, wired to a single value. */
export interface KnobProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (value: number) => void
}

/** Render one knob row. */
export function Knob({ label, value, min, max, step, unit, onChange }: KnobProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min))
  return (
    <label className={css.knob}>
      <span className={css.knobLabel}>{label}</span>
      <input
        type="range"
        className={css.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => { onChange(clamp(Number(e.target.value))) }}
      />
      <span className={css.numberWrap}>
        <input
          type="number"
          className={css.number}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => { onChange(clamp(Number(e.target.value))) }}
        />
        <span className={css.unit}>{unit}</span>
      </span>
    </label>
  )
}

/** One segment of a Segmented picker. */
export interface SegmentedOption<T extends string> {
  id: T
  label: string
}

export interface SegmentedProps<T extends string> {
  /** Accessible name for the button group. */
  label: string
  value: T
  options: readonly SegmentedOption<T>[]
  onSelect: (value: T) => void
}

/** Render a two-button segmented picker. */
export function Segmented<T extends string>({ label, value, options, onSelect }: SegmentedProps<T>) {
  return (
    <div className={css.segmented} role="group" aria-label={label}>
      {options.map(option => (
        <button
          key={option.id}
          type="button"
          className={option.id === value ? css.segActive : css.seg}
          aria-pressed={option.id === value}
          onClick={() => { onSelect(option.id) }}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

/** Read a file, downscale to ≤1920px, and return a compact JPEG data URL. */
export async function fileToDataUrl(file: File): Promise<string> {
  const raw = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => { resolve(String(reader.result)) }
    reader.onerror = () => { reject(reader.error) }
    reader.readAsDataURL(file)
  })
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const im = new Image()
    im.onload = () => { resolve(im) }
    im.onerror = () => { reject(new Error('image load failed')) }
    im.src = raw
  })
  const scale = Math.min(1, 1920 / Math.max(image.width, image.height))
  const w = Math.max(1, Math.round(image.width * scale))
  const h = Math.max(1, Math.round(image.height * scale))
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (ctx === null) return raw
  ctx.drawImage(image, 0, 0, w, h)
  return canvas.toDataURL('image/jpeg', 0.82)
}

/** Builtin font families shown before (and as the fallback to) the system
 *  enumeration — always available, no permission needed. */
export const BUILTIN_LATIN_FONTS = ['Space Grotesk Variable', 'Segoe UI', 'Arial', 'Verdana', 'Tahoma', 'Georgia', 'Times New Roman', 'Consolas', 'Courier New']
export const BUILTIN_CJK_FONTS = ['Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Noto Serif SC', 'SimSun', 'SimHei', 'KaiTi', 'FangSong', 'Songti SC', 'STHeiti']

/** Chinese display names for the common CJK families. queryLocalFonts
 *  reports the ENGLISH name-table entry, so without this map a Chinese
 *  user sees "Microsoft YaHei" and cannot tell it is 微软雅黑. Keys are
 *  the CSS-referenced (English) family; the alias is display-only. */
const CJK_FONT_LABELS: Record<string, string> = {
  'Microsoft YaHei': '微软雅黑',
  'Microsoft YaHei UI': '微软雅黑',
  'Microsoft JhengHei': '微軟正黑體',
  'PingFang SC': '苹方-简',
  'PingFang TC': '苹方-繁',
  'PingFang HK': '苹方-香港',
  'Hiragino Sans GB': '冬青黑体',
  'Noto Sans SC': '思源黑体',
  'Noto Serif SC': '思源宋体',
  'Source Han Sans SC': '思源黑体',
  'Source Han Serif SC': '思源宋体',
  SimSun: '宋体',
  NSimSun: '新宋体',
  SimHei: '黑体',
  KaiTi: '楷体',
  'KaiTi_GB2312': '楷体',
  FangSong: '仿宋',
  'FangSong_GB2312': '仿宋',
  DengXian: '等线',
  'Songti SC': '宋体-简',
  'Songti TC': '宋体-繁',
  STHeiti: '华文黑体',
  STXihei: '华文细黑',
  STKaiti: '华文楷体',
  STSong: '华文宋体',
  STFangsong: '华文仿宋',
  STZhongsong: '华文中宋',
  STLiti: '华文隶书',
  STXingkai: '华文行楷',
  STXinwei: '华文新魏',
  STHupo: '华文琥珀',
  STCaiyun: '华文彩云',
  LiSu: '隶书',
  YouYuan: '幼圆',
  'DFKai-SB': '標楷體',
  PMingLiU: '新細明體',
  MingLiU: '細明體',
}

/** Display label for a font family: "中文名（English）" when a Chinese
 *  alias exists, the plain name otherwise. The stored value stays the
 *  English family (what CSS font-family references reliably). */
export function fontLabel(name: string): string {
  const alias = CJK_FONT_LABELS[name]
  return alias === undefined ? name : `${alias}（${name}）`
}

/** Enumerate the installed system font families via the Local Font Access
 *  API. Needs a user gesture (the picker's first open) and a permission
 *  grant; null when unavailable, denied, or failed. */
async function listSystemFonts(): Promise<string[] | null> {
  try {
    if (window.queryLocalFonts === undefined) return null
    const faces = await window.queryLocalFonts()
    const families = [...new Set(faces.map((f) => f.family).filter((name) => name))].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
    return families.length > 0 ? families : null
  } catch {
    return null
  }
}

/** True when the family paints CJK glyphs itself: measure 永語字 through
 *  the family over a monospace fallback — a different width means the
 *  family covered the characters (no glyph fallback happened). */
function familyHasCJK(family: string): boolean {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const text = '永語字'
    ctx.font = '72px monospace'
    const base = ctx.measureText(text).width
    ctx.font = `72px "${String(family).replace(/"/g, '')}", monospace`
    return Math.abs(ctx.measureText(text).width - base) > 0.5
  } catch {
    return false
  }
}

/** One font-family dropdown row control. The menu is SELF-DRAWN: the native
 *  <select> popup is OS chrome — unthemeable, and it flashes bright white in
 *  dark mode. Entries: the theme default, the builtin common list, and — once
 *  the first open's Local Font Access grant resolves — the installed system
 *  families (CJK-aware ordering when {@link cjk} is set). Keyboard:
 *  Enter/Space or Arrow opens, Arrow navigates, Enter picks, Esc/outside
 *  closes. A stored value missing from every list gets an extra entry so the
 *  selection still displays. */
export function FontPicker({ label, value, builtin, defaultName, cjk, t, onChange }: {
  label: string
  value: string
  builtin: readonly string[]
  defaultName: string
  /** CJK field: system families split into 中文 first, Latin last. */
  cjk?: boolean
  t: (key: string) => string
  onChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [system, setSystem] = useState<string[] | null>(null)
  const [systemCjk, setSystemCjk] = useState<string[] | null>(null)
  const [systemRest, setSystemRest] = useState<string[] | null>(null)
  const [highlight, setHighlight] = useState(-1)
  const [openUp, setOpenUp] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const entries: Array<{ kind: 'option' | 'group'; value?: string; label: string }> = [
    { kind: 'option', value: '', label: `${t('aqua.fontDefault')} · ${defaultName}` },
    { kind: 'group', label: t('aqua.fontBuiltin') },
    ...builtin.map((name) => ({ kind: 'option' as const, value: name, label: name })),
    ...(value !== '' && !builtin.includes(value) && !(system ?? []).includes(value) ? [{ kind: 'option' as const, value, label: value }] : []),
    ...(system === null ? [] : cjk ? [
      { kind: 'group' as const, label: t('aqua.fontSystemCjk') },
      ...systemCjk.map((name) => ({ kind: 'option' as const, value: name, label: name })),
      { kind: 'group' as const, label: t('aqua.fontSystemLatin') },
      ...systemRest.map((name) => ({ kind: 'option' as const, value: name, label: name })),
    ] : [
      { kind: 'group' as const, label: t('aqua.fontSystemLatin') },
      ...systemRest.map((name) => ({ kind: 'option' as const, value: name, label: name })),
      { kind: 'group' as const, label: t('aqua.fontSystemCjk') },
      ...systemCjk.map((name) => ({ kind: 'option' as const, value: name, label: name })),
    ])),
  ]
  const options = entries.filter((entry): entry is { kind: 'option'; value: string; label: string } => entry.kind === 'option')
  const optionIndex = new Map(options.map((entry, idx) => [entry, idx]))
  const enumerate = (): void => {
    if (system !== null) return
    void listSystemFonts().then((families) => {
      if (families === null) return
      const known: string[] = []
      const others: string[] = []
      for (const name of families) (CJK_FONT_LABELS[name] !== undefined || familyHasCJK(name) ? known : others).push(name)
      setSystem(families)
      setSystemCjk(known)
      setSystemRest(others)
    })
  }
  const pick = (entry: { value?: string }): void => {
    onChange(entry.value ?? '')
    setOpen(false)
  }
  /** Open (or close): flip the flag, pick the expansion direction from
   *  the scrollable panel's VISIBLE space around the trigger — the menu
   *  clips against that ancestor, not the viewport — and enumerate once. */
  const toggle = (): void => {
    const trigger = rootRef.current?.querySelector('button')
    if (open === false && trigger !== null && trigger !== undefined) {
      let scroller: HTMLElement | null = trigger.parentElement
      while (scroller !== null) {
        const overflowY = getComputedStyle(scroller).overflowY
        if (overflowY === 'auto' || overflowY === 'scroll') break
        scroller = scroller.parentElement
      }
      const rect = trigger.getBoundingClientRect()
      if (scroller !== null) {
        const bounds = scroller.getBoundingClientRect()
        const below = bounds.bottom - rect.bottom
        setOpenUp(below < 264 && rect.top - bounds.top > 264)
      } else {
        setOpenUp(window.innerHeight - rect.bottom < 264 && rect.top > 264)
      }
    }
    setOpen(!open)
  }
  // Outside click + Escape close the menu.
  useEffect(() => {
    if (!open) return
    const onDocDown = (event: PointerEvent): void => {
      if (rootRef.current !== null && event.target instanceof Node && !rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDocDown, true)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDocDown, true)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])
  // On open (and when the system list arrives): highlight + reveal the
  // current value, and kick off the one-shot font enumeration.
  useEffect(() => {
    if (!open) return
    enumerate()
    const current = options.findIndex((entry) => entry.value === value)
    setHighlight(current)
    const list = listRef.current
    if (list !== null) {
      const el = list.querySelector('[data-cur=true]')
      if (el !== null) el.scrollIntoView({ block: 'nearest' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, system])
  // Keyboard navigation over the flat option list.
  const onKeyDown = (event: ReactKeyboardEvent): void => {
    if (!open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggle()
      }
      return
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlight((h) => {
        const count = options.length
        if (count === 0) return -1
        return h < 0 ? (event.key === 'ArrowDown' ? 0 : count - 1) : (h + (event.key === 'ArrowDown' ? 1 : -1) + count) % count
      })
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const entry = options[highlight]
      if (entry !== undefined) pick(entry)
    }
  }
  // Keep the highlighted row in view.
  useEffect(() => {
    const list = listRef.current
    if (open && list !== null && highlight >= 0) {
      const el = list.querySelector(`[data-idx="${highlight}"]`)
      if (el !== null) el.scrollIntoView({ block: 'nearest' })
    }
  }, [highlight])
  return (
    <div className={css.fontPick} ref={rootRef} onKeyDown={onKeyDown}>
      <button
        type="button"
        className={css.fontSelect}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={toggle}
      >
        {value === '' ? `${t('aqua.fontDefault')} · ${defaultName}` : fontLabel(value)}
      </button>
      {open && (
        <div className={openUp ? `${css.fontMenu} ${css.fontMenuUp}` : css.fontMenu} role="listbox" aria-label={label}>
          <div className={css.fontMenuScroll} ref={listRef}>
            {entries.map((entry, idx) => entry.kind === 'group'
              ? <div key={`g${idx}`} className={css.fontGroupLabel}>{entry.label}</div>
              : (
                <button
                  key={`o${idx}`}
                  type="button"
                  className={css.fontOpt}
                  data-cur={entry.value === value}
                  data-idx={optionIndex.get(entry)}
                  data-hi={optionIndex.get(entry) === highlight}
                  onMouseEnter={() => { setHighlight(optionIndex.get(entry) ?? -1) }}
                  onClick={() => { pick(entry) }}
                >
                  {fontLabel(entry.label)}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
