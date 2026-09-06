/**
 * Workspace-local replica of the monorepo's shared DSH client-plugin preset
 * (packages/client/tsdown.client.ts). The upstream preset lives only in the
 * DeepSeek Harness monorepo; this stand-in rebuilds the browser bundle with
 * the exact loading protocol the shipped lib/client.js uses:
 *
 *   window.__ModuleLoader__.load({
 *     id: "<plugin name>",
 *     factory: (require) => { ...cjs body...; return module.exports; }
 *   });
 *
 * plus the \`dsh-css\` virtual-module plugin: every .css import compiles to a
 * JS snippet that injects ONE <style data-plugin-css="pkg/file.css"> tag
 * (idempotent per tag), and css-modules files (imported with a binding) get
 * their class names hashed to the SAME prefixes the shipped bundle uses, so
 * the rebuilt markup stays byte-compatible with the deployed page.
 *
 * Only lib/client.js is rebuilt here. lib/index.js / lib/invariant.js (ESM
 * host half) and lib/types/** (declarations) are unchanged by client-only
 * edits and keep their shipped artifacts.
 */
// NOTE: deliberately NO 'tsdown' import here — this preset sits one level
// above the plugin dir, outside the package's node_modules resolution, and
// tsdown's config loader would fail to resolve the package from here. The
// plain config object is all tsdown needs.
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

/** The plugin identity every injection tag and the loader id must carry. */
const PKG = '@deepseek-ai/dsh-client-ui-seaglass'

/**
 * css-modules hash maps lifted from the shipped bundle (the monorepo preset
 * hashes via lightningcss; without it here, the shipped hashes are reused
 * verbatim — self-consistent CSS text + map + JSX references).
 */
const MODULE_HASHES: Record<string, Record<string, string>> = {
  'AquaAppearanceRow.module.css': {
    unit: 'VYJBRq_unit',
    toggle: 'VYJBRq_toggle',
    subGroup: 'VYJBRq_subGroup',
    knob: 'VYJBRq_knob',
    controls: 'VYJBRq_controls',
    groupHint: 'VYJBRq_groupHint',
    slider: 'VYJBRq_slider',
    subTitle: 'VYJBRq_subTitle',
    row: 'VYJBRq_row',
    rowHint: 'VYJBRq_rowHint',
    number: 'VYJBRq_number',
    toggleOn: 'VYJBRq_toggleOn',
    segmented: 'VYJBRq_segmented',
    group: 'VYJBRq_group',
    seg: 'VYJBRq_seg',
    segActive: 'VYJBRq_segActive',
    wallpaperPick: 'VYJBRq_wallpaperPick',
    rowLabel: 'VYJBRq_rowLabel',
    fileInput: 'VYJBRq_fileInput',
    deleteButton: 'VYJBRq_deleteButton',
    knobHint: 'VYJBRq_knobHint',
    numberWrap: 'VYJBRq_numberWrap',
    inlineLabel: 'VYJBRq_inlineLabel',
    check: 'VYJBRq_check',
    pickButton: 'VYJBRq_pickButton',
    knobLabel: 'VYJBRq_knobLabel',
    fontSelect: 'VYJBRq_fontSelect',
    fontPick: 'VYJBRq_fontPick',
    fontMenu: 'VYJBRq_fontMenu',
    fontMenuUp: 'VYJBRq_fontMenuUp',
    fontMenuScroll: 'VYJBRq_fontMenuScroll',
    fontGroupLabel: 'VYJBRq_fontGroupLabel',
    fontOpt: 'VYJBRq_fontOpt',
  },
}

interface PluginLike {
  name: string
  enforce?: string
  resolveId?: (source: string, importer: string | undefined) => string | null | undefined
  load?: (this: { warn?: (message: string) => void }, id: string) => string | null
}

/**
 * The \`dsh-css\` virtual module: compiles every imported stylesheet to a
 * self-injecting JS module. Plain imports (aqua/fonts) inject their text
 * only; bound imports (the two settings-card sheets) also export the class
 * map, with the hash prefixes kept from the shipped build.
 */
function dshCss(): PluginLike {
  return {
    name: 'dsh-css',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!source.endsWith('.css') || importer === undefined) return null
      return '\0dsh-css:' + resolve(dirname(importer), source).replace(/\.css$/, '.aqcss')
    },
    load(id) {
      if (!id.startsWith('\0dsh-css:')) return null
      const file = id.slice('\0dsh-css:'.length).replace(/\.aqcss$/, '.css')
      const base = file.split(/[\\/]/).pop() ?? file
      const raw = readFileSync(file, 'utf8')
      const map = MODULE_HASHES[base]
      let css = raw
      if (map !== undefined) {
        for (const [name, hashed] of Object.entries(map)) {
          css = css.replace(new RegExp('\\.' + name + '(?![\\w-])', 'g'), '.' + hashed)
        }
      }
      const tagId = PKG + '/' + base
      return [
        `const css = ${JSON.stringify(css)};`,
        `const tagId = ${JSON.stringify(tagId)};`,
        `if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {`,
        `	\tconst tag = document.createElement("style");`,
        `	\ttag.dataset.plugin = ${JSON.stringify(PKG)};`,
        `	\ttag.dataset.pluginCss = tagId;`,
        `	\ttag.textContent = css;`,
        `	\tdocument.head.appendChild(tag);`,
        `}`,
        `export default ${JSON.stringify(map ?? {}, null, '\t')};`,
      ].join('\n')
    },
  }
}

/**
 * Build the browser half: src/client/index.ts → lib/client.js under the
 * ModuleLoader wrapper, externals resolved through the loader's require.
 * @param name - the plugin package name (loader id / tag prefix).
 * @param _extra - ignored here; host entries and declarations keep their
 *   shipped artifacts (client-only edits never touch them).
 */
export function clientBundle(name: string, _extra: string[] = []) {
  // The workspace has no monorepo tsconfig.base.client.json to extend, so the
  // build runs on a self-contained tsconfig.build.json (jsx: react-jsx is the
  // part the oxc transform actually consumes).
  const tsconfig = 'tsconfig.build.json'
  // tsdown 0.22 names CJS output .cjs; the plugin's package exports (and the
  // shipped layout) require lib/client.js — pin the extension explicitly.
  const shared = { outDir: 'lib', tsconfig, dts: false, minify: false, clean: false, outExtensions: () => ({ js: '.js', dts: '.d.ts' }) }
  return [
    // Browser half: the ModuleLoader-wrapped bundle.
    {
      ...shared,
      entry: { client: 'src/client/index.ts' },
      format: 'cjs',
      platform: 'browser',
      sourcemap: true,
      /* rolldown's tree-shake drops the DEFINITION of a cross-module function
         export whose only consumer sits in another module (observed with
         spot-core's invalidateSpotCache in 1.5.4: the call survived as a bare
         identifier, the function body vanished → ReferenceError at plugin
         start → the whole theme mount aborted). The bundle is ~320KB and
         ships locally; dead-code elimination buys nothing here. */
      treeshake: false,
      external: [/^react(?:\/.*)?$/, /^@deepseek-ai\//],
      banner: `
window.__ModuleLoader__.load({
\tid: ${JSON.stringify(name)},
\tfactory: (require) => {
\t\tvar module = { exports: {} };
\t\tvar exports = module.exports;
\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: "Module" });`,
      footer: `
\t\treturn module.exports;
\t}
});`,
      plugins: [dshCss() as never],
    },
    // Host half: the ESM node entries (unchanged sources, rebuilt because the
    // monorepo build is not available on this machine).
    {
      ...shared,
      entry: { index: 'src/index.ts', invariant: 'src/invariant.ts' },
      format: 'esm',
      platform: 'neutral',
      external: [/^@deepseek-ai\//],
    },
  ]
}
