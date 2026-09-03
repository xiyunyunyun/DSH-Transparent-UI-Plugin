# @deepseek-ai/dsh-client-ui-aqua

English | [中文](README.zh.md)

> **Compatibility** — DSH `0.1.1-rc.2` · **Updated** 2026-09-03 · Plugin v1.4.0
>
> **What's new in this update**
>
> - **Dedicated Aqua settings page**: the theme gets its own page in the settings nav (after General), with a page-top master switch so it stays toggleable even on deployments where the Host does not serve the plugin namespace — plus every glass knob moved in from the General section
> - **Per-script font customization**: separate English / Chinese font pickers with a self-drawn glass dropdown (the native `<select>` popup is unthemeable and flashes white in dark mode), system font enumeration via the Local Font Access API, a builtin common-font list as fallback, CJK-first grouping per field, bilingual "中文名（English）" labels, and code blocks following the picks (only when at least one font is set, so code never loses its monospace)
> - **Inputbar tilt restored**: the composer now tilts toward the cursor exactly like the header and sidebar. The popovers that previously forced it off (tooltips / menus are `position:fixed` inside the bar) are hidden during the tilt session and revealed — with their fade-in replayed — the same frame the transform glides home; the persistent stats tooltip also hides on leave, so the tilt always comes back
> - **Stats tooltip over the sidebar**: a wide stats tooltip is no longer covered by the sidebar glass (the bar lifts above it while a popover is up)
> - **Glass completion & tuning**: code blocks (shell + banner), the settings dialog, menus, listboxes and tooltips all turn frosted — every one of them follows the blur and frost sliders, the alpha levels are tuned lighter, and native `<select>` elements from third-party plugins get scheme-locked theme colors instead of flashing bright white in dark mode

This release targets the current DSH `settings.plugin.item` keyed-slot contract.


Aqua is a highly customizable glassmorphism theme for the DeepSeek Harness web UI. The header, sidebar, composer, stats line, and trajectory view all become panes of frosted glass. you can put video for wallpaper and Switch it off and the stock UI comes back exactly, with no source changes to DSH itself.

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
- **Third-party plugin compatibility**: badges, stat buttons, selects, chips, pills and tags inside any plugin dialog (e.g. `dsh-tokenledger`) pick up the glass automatically; floating panels and their tooltips are no longer clipped by the sidebar
- One switch: off restores the stock UI exactly, and every effect is removed with the plugin

## Installation

### Option 1: npm one-liner (recommended)

```sh
dsh plugin --profile web add dsh-client-ui-aqua
```

Installs the latest version from npm and registers it as a profile plugin layer (`dsh.bundle` patch) — works on every platform. Reload the web UI and it is on.

### Option 2: GitHub installer (fallback)

No npm account and no git needed (falls back to a plain zip download).

**Windows (one command):**

```powershell
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest 'https://github.com/WYH66666666/DSH-Transparent-UI-Plugin/raw/main/install.ps1' -OutFile install.ps1; .\install.ps1"
```

Installs the **latest release** by default. The script links the plugin into the profile's `node_modules` and registers `ui-aqua` in `cordis.patch.yml` (idempotent — safe to run again).

Pin a version or track the dev branch:

```powershell
.\install.ps1 -Version 'v1.1.0'   # a specific release
.\install.ps1 -Version 'main'     # the development branch
```

**macOS / Linux (manual, three steps):**

```sh
git clone --depth 1 --branch v1.1.0 https://github.com/WYH66666666/DSH-Transparent-UI-Plugin.git
ln -s "$PWD/DSH" "$DSH_HOME/profiles/node_modules/@deepseek-ai/dsh-client-ui-aqua"
```

then append to `$DSH_HOME/profiles/web/cordis.patch.yml`:

```yaml
- insert:
    - id: ui-aqua
      name: '@deepseek-ai/dsh-client-ui-aqua'
```

## Usage

Reload the web UI. Aqua is **on by default**; the master switch lives in **Settings → Plugins → Glass theme** (same shape as the other plugin cards), and every other control sits directly under **Settings → General → Appearance** (no title of its own): mode, blur/frost (Mica mode), fluid color, background brightness, backdrop (fluid/wallpaper) with its wallpaper controls, and the particle-whale toggle. With the master switch off, the whole control block under Appearance is hidden.
