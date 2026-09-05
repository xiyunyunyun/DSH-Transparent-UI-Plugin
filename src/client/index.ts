/**
 * Aqua client plugin body: the toggleable glassmorphism skin. Owns the durable
 * enable flag through the Host settings namespace, applies/retracts the theme
 * layer through {@link AquaLayer}, and registers one settings surface: a
 * dedicated "Seaglass" page in the settings nav (`settings.section`) — the
 * master switch at the top of the page (reachable in every deployment, even
 * when the Host does not serve the namespace) plus every glass knob and the
 * per-script font pickers. The Plugins-section card was removed: it duplicated
 * the master switch. One click on the master switch returns the stock UI
 * (every layer is an effect, disposed on flip).
 */
import type { Context } from '@deepseek-ai/cordis'
import type { BoundActions } from '@deepseek-ai/dsh-client-ui-slots'
// Type-only: pulls the `settings.section` SlotMap merge.
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { AQUA_SETTINGS_NAMESPACE } from '../aqua-settings-constants.ts'
import type { AquaSettings } from '../aqua-settings.ts'
import { AquaAppearanceRow, type AquaAppearanceRowInjected } from './AquaAppearanceRow.tsx'
import { createAquaRowStore, type AquaSettingsPayload } from './settings-store.ts'
import { en, NS, zh } from './locales.ts'
import { AQUA_ENABLED_KEY, AquaLayer } from './theme-layer.ts'
// Side-effect imports: the theme-layer stylesheet (unloaded with the plugin)
// and the self-hosted Space Grotesk @font-face (no shell dependency).
import './aqua.module.css'
import './fonts.module.css'

/** Required services: theme override stack plus the settings-card surfaces. */
export const inject = ['theme', 'slots', 'locale', 'settingsScope']

/**
 * Read the pre-settings-namespace enable flag without confusing an absent
 * key with an explicitly stored `false` value.
 */
function readLegacyEnabled(): boolean | undefined {
  try {
    const raw = localStorage.getItem(AQUA_ENABLED_KEY)
    return raw === null ? undefined : raw === 'true'
  } catch {
    return undefined
  }
}

/**
 * Client plugin body.
 * @param ctx - client cordis context.
 */
export function apply(ctx: Context): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-aqua: settings dictionaries')

  // The layer owns its lifecycle: enable flag, token stack, and CSS attribute
  // are all effects released on disable/dispose.
  const layer = new AquaLayer(ctx)
  const settings = ctx.settingsScope.bind<AquaSettings>({ namespace: AQUA_SETTINGS_NAMESPACE })
  let legacyMigrationAttempted = false
  const syncHostEnabled = (): void => {
    const snapshot = settings.getSnapshot()
    if (snapshot.status !== 'ready' || typeof snapshot.value?.enabled !== 'boolean') return

    const user = snapshot.user
    const hasHostEnabled = typeof user === 'object'
      && user !== null
      && !Array.isArray(user)
      && Object.prototype.hasOwnProperty.call(user, 'enabled')
    if (hasHostEnabled) {
      legacyMigrationAttempted = true
      layer.setEnabled(snapshot.value.enabled)
      return
    }

    if (!legacyMigrationAttempted) {
      legacyMigrationAttempted = true
      const legacyEnabled = readLegacyEnabled()
      if (legacyEnabled !== undefined) {
        layer.setEnabled(legacyEnabled)
        void settings.set('enabled', legacyEnabled)
        return
      }
    }

    layer.setEnabled(snapshot.value.enabled)
  }
  ctx.effect(() => {
    const dispose = settings.subscribe(syncHostEnabled)
    syncHostEnabled()
    return dispose
  }, 'ui-aqua: settings mirror')

  // One store mirror of the layer state: the settings section's Appearance
  // row (master switch + every knob).
  const appearanceStore = createAquaRowStore()
  let appearanceBound: BoundActions<typeof appearanceStore> | undefined
  let revision = 0
  const payload = (): AquaSettingsPayload => {
    const s = layer.getSettings()
    return {
      enabled: layer.getEnabled(),
      mode: s.mode,
      blur: s.blur,
      frost: s.frost,
      fluidHue: s.fluidHue,
      fluidDepth: s.fluidDepth,
      bgBrightness: s.bgBrightness,
      dark: layer.getDark(),
      background: s.background,
      wallpaper: s.wallpaper,
      whale: s.whale,
      critters: s.critters,
      mesh: s.mesh,
      spotlight: s.spotlight,
      press: s.press,
      wallpaperBlur: s.wallpaperBlur,
      wallpaperFrost: s.wallpaperFrost,
      videoBlur: s.videoBlur,
      videoBrightness: s.videoBrightness,
      fontLatin: s.fontLatin,
      fontCjk: s.fontCjk,
    }
  }
  const sync = (): void => {
    const next = payload()
    appearanceBound?.sync(next, revision)
    revision += 1
  }
  // The Appearance switch flips the brightness knob's half-range; re-sync
  // both stores so the row re-renders with the new range.
  ctx.effect(() => ctx.on('theme/change', () => { sync() }), 'ui-aqua: appearance scheme sync')

  const appearanceInjected = (actions: BoundActions<typeof appearanceStore>): AquaAppearanceRowInjected => {
    appearanceBound = actions
    sync()
    return {
      setMode: (mode) => {
        layer.setMode(mode)
        sync()
      },
      setBlur: (blur) => {
        layer.setBlur(blur)
        sync()
      },
      setFrost: (frost) => {
        layer.setFrost(frost)
        sync()
      },
      setFluidHue: (fluidHue) => {
        layer.setFluidHue(fluidHue)
        sync()
      },
      setFluidDepth: (fluidDepth) => {
        layer.setFluidDepth(fluidDepth)
        sync()
      },
      setBgBrightness: (bgBrightness) => {
        layer.setBgBrightness(bgBrightness)
        sync()
      },
      setBackground: (background) => {
        layer.setBackground(background)
        sync()
      },
      setWallpaper: (wallpaper) => {
        layer.setWallpaper(wallpaper)
        sync()
      },
      setWhale: (whale) => {
        layer.setWhale(whale)
        sync()
      },
      setCritters: (critters) => {
        layer.setCritters(critters)
        sync()
      },
      setMesh: (mesh) => {
        layer.setMesh(mesh)
        sync()
      },
      setSpotlight: (spotlight) => {
        layer.setSpotlight(spotlight)
        sync()
      },
      setPress: (press) => {
        layer.setPress(press)
        sync()
      },
      setWallpaperBlur: (wallpaperBlur) => {
        layer.setWallpaperBlur(wallpaperBlur)
        sync()
      },
      setWallpaperFrost: (wallpaperFrost) => {
        layer.setWallpaperFrost(wallpaperFrost)
        sync()
      },
      setVideoBlur: (videoBlur) => {
        layer.setVideoBlur(videoBlur)
        sync()
      },
      setVideoBrightness: (videoBrightness) => {
        layer.setVideoBrightness(videoBrightness)
        sync()
      },
      setFontLatin: (fontLatin) => {
        layer.setFontLatin(fontLatin)
        sync()
      },
      setFontCjk: (fontCjk) => {
        layer.setFontCjk(fontCjk)
        sync()
      },
      setEnabled: (enabled) => {
        layer.setEnabled(enabled)
        void settings.set('enabled', enabled)
        sync()
      },
      authorizeVideo: () => {
        layer.authorizeVideo()
      },
    }
  }

  // Dedicated "Seaglass" page in the settings nav (after General, before
  // Models): the section page owns the master switch and every knob — the
  // Plugins-section card (a duplicate master switch) was removed.
  const t = ctx.locale.bind(NS)
  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'aqua',
    order: 5,
    label: () => t('aqua.nav'),
    locale: NS,
    store: appearanceStore,
    inject: appearanceInjected,
  }, AquaAppearanceRow))
}
