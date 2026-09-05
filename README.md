# @deepseek-ai/dsh-client-ui-seaglass

English | [中文](README.zh.md)

> **Compatibility** — DSH `0.1.2-rc.1` · **Updated** 2026-09-05 · Plugin v1.5.0
>
> **What's new in this update**
>
> - **Renamed to Seaglass**: the theme is now `@deepseek-ai/dsh-client-ui-seaglass` (repo `dsh-client-ui-seaglass`). Same theme, new name — update your install command / profile patch accordingly (see Installation)
> - **Glassier code blocks**: single-line (inline) and multi-line code blocks now ride the frost slider like every other glass surface instead of sitting as opaque slabs — the block shell keeps its backdrop blur, so code stays readable over the fluid
> - **Plugins-page toggle removed**: the plugin card in Settings → Plugins duplicated the theme's own master switch — it is gone; the master switch lives at the top of the dedicated **Settings → Seaglass** page
> - **View pages join the glass**: the trajectory view and any plugin's full page (e.g. dsh-context's context dashboard) turn glass automatically — the shared layer tokens go translucent inside them, their card panes tilt and glow under the cursor, and future plugin views inherit the same treatment with zero coordination
> - **Command list glass**: the composer command list (and any anchored popover shell) reads as one frosted pane instead of a solid slab, and the input bar keeps its tilt while you hover the open list

Seaglass is a highly customizable glassmorphism theme for the DeepSeek Harness web UI. The header, sidebar, composer, stats line, trajectory view, and plugin view pages all become panes of frosted glass. You can set an image or video wallpaper, and switching the theme off returns the stock UI exactly, with no source changes to DSH itself.

![](assets/1.png)

![](assets/2.png)

![](assets/3.png)

![](assets/4.png)

## Features

- **Two modes**: **Mica** restyles the layout into floating glass cards (blur and frost adjustable), while **Compatibility Mode** keeps the stock layout byte-for-byte and only swaps the material to generic glass — other plugins' UI gets the same treatment automatically
- **Free backdrop**: a living fluid board (hue adjustable) or your own wallpaper (fills the page, aspect preserved, with its own blur and frost); light wallpapers look best in light mode, dark wallpapers in dark mode
- **Background brightness**: follows the resolved scheme — dark mode darkens (0–50), light mode brightens (50–100), 50 is unchanged
- **Particle whale**: the deepseek.com/harness centerpiece fish (a 2D port of the site's particle engine), centered in the chat area right of the sidebar — white particles on dark, gray on light, toggleable in settings
- **Glossy "Harness" badge**: in dark mode the sidebar wordmark wears the official nameplate pill (135° gradient ring + soft glow); light mode keeps the stock plate
- **Edge fades**: 5px gradient blur bands pinned to the top and bottom of the page, above the chat content — scrolling content melts into the edges; faint white veil on light, faint black on dark
- **Third-party plugin compatibility**: badges, stat buttons, selects, chips, pills and tags inside any plugin dialog (e.g. `dsh-tokenledger`) pick up the glass automatically; floating panels and their tooltips are no longer clipped by the sidebar; plugin view pages become glass panes with tilting cards
- One switch: off restores the stock UI exactly, and every effect is removed with the plugin

## Installation

### Option 1: npm one-liner (recommended)

```sh
dsh plugin --profile web add dsh-client-ui-seaglass
```

Installs the latest version from npm and registers it as a profile plugin layer (`dsh.bundle` patch) — works on every platform. Reload the web UI and it is on.

### Option 2: GitHub installer (fallback)

No npm account and no git needed (falls back to a plain zip download).

**Windows (one command):**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/xiyunyunyun/dsh-client-ui-seaglass/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

Installs the **latest release** by default. The script links the plugin into the profile's `node_modules` and registers `ui-seaglass` in `cordis.patch.yml` (idempotent — safe to run again).

Pin a version or track the dev branch:

```powershell
.\install.ps1 -Version 'v1.5.0'    # a specific release
.\install.ps1 -Version 'main'      # the development branch
```

**macOS / Linux (manual, three steps):**

```sh
git clone --depth 1 --branch v1.5.0 https://github.com/xiyunyunyun/dsh-client-ui-seaglass.git
ln -s "$PWD/dsh-client-ui-seaglass" "$DSH_HOME/profiles/node_modules/@deepseek-ai/dsh-client-ui-seaglass"
```

then append to `$DSH_HOME/profiles/web/cordis.patch.yml`:

```yaml
- insert:
    - id: ui-seaglass
      name: '@deepseek-ai/dsh-client-ui-seaglass'
```

## Usage

Reload the web UI. Seaglass is **on by default**; the master switch sits at the top of the dedicated **Settings → Seaglass** page (right after General), and every other control lives on the same page: mode, blur/frost (Mica mode), fluid color, background brightness, backdrop (fluid/wallpaper) with its wallpaper controls, the particle-whale toggle, and the per-script font pickers. With the master switch off, the whole control block collapses to the switch plus a hint.
