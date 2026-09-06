
window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-seaglass",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let react = require("react");
let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
let react_jsx_runtime = require("react/jsx-runtime");
let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");

//#region src/aqua-settings-constants.ts
/** Settings namespace shared by the Host registration and browser card. */
const AQUA_SETTINGS_NAMESPACE = "ui-aqua";
/** Field carrying the durable layer enable flag. */
const AQUA_ENABLED_FIELD = "enabled";

//#endregion
//#region \0dsh-css:C:\Users\Administrator\Desktop\dsh_workspace\dsh-client-ui-seaglass\src\client\AquaAppearanceRow.module.aqcss
const css$2 = "/* Aqua settings section page: a page-top master switch row, then the titled\r\n   sub-groups (mode / glass material / background / decorations / fonts).\r\n   This is a standalone settings.page now — no trailing separator, the\r\n   section column owns the rhythm. */\r\n\r\n.VYJBRq_group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\r\n  padding: 8px 0 16px;\r\n}\r\n\r\n/* One titled sub-group: title over its control stack. */\r\n.VYJBRq_subGroup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.VYJBRq_subTitle {\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  font-weight: 600;\r\n  color: var(--dsw-alias-label-primary);\r\n}\r\n\r\n/* Controls stack: one column of rows and knobs. */\r\n.VYJBRq_controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n/* Label + segmented picker row (mode / backdrop source). */\r\n.VYJBRq_row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.VYJBRq_rowLabel {\r\n  flex: none;\r\n  width: 92px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-secondary);\r\n}\r\n\r\n/* Short inline label next to a second toggle in the same row (critters). */\r\n.VYJBRq_inlineLabel {\r\n  flex: none;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-secondary);\r\n}\r\n\r\n/* Hints under a row/knob: indented to the control column (label 92 + gap 10)\r\n * so every explanation lines up with the control it describes. */\r\n.VYJBRq_rowHint {\r\n  margin-top: -4px;\r\n  margin-left: 102px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-tertiary);\r\n}\r\n\r\n/* Full-width hint under a label-less row (the mode hint sits under the\r\n * segmented control, which starts at the group's left edge). */\r\n.VYJBRq_groupHint {\r\n  margin-top: -4px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-tertiary);\r\n}\r\n\r\n.VYJBRq_knobHint {\r\n  margin-top: -4px;\r\n  margin-left: 102px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-tertiary);\r\n}\r\n\r\n/* Boolean toggle pill (particle whale), same language as the master switch. */\r\n.VYJBRq_toggle,\r\n.VYJBRq_toggleOn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  height: 28px;\r\n  padding: 0 10px 0 6px;\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  border-radius: 14px;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-primary);\r\n  cursor: pointer;\r\n}\r\n\r\n.VYJBRq_toggle:hover {\r\n  background: var(--dsw-alias-interactive-bg-hover);\r\n}\r\n\r\n.VYJBRq_toggleOn {\r\n  border-color: transparent;\r\n  background: var(--dsw-alias-state-business-tertiary);\r\n  color: var(--dsw-alias-state-business-primary);\r\n}\r\n\r\n.VYJBRq_check {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n/* Knob: label, slider, number box + unit. */\r\n.VYJBRq_knob {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.VYJBRq_knobLabel {\r\n  flex: none;\r\n  width: 92px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-secondary);\r\n}\r\n\r\n.VYJBRq_slider {\r\n  flex: 1;\r\n  min-width: 0;\r\n  accent-color: var(--dsw-alias-state-business-primary);\r\n}\r\n\r\n.VYJBRq_numberWrap {\r\n  flex: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.VYJBRq_number {\r\n  width: 56px;\r\n  height: 26px;\r\n  padding: 0 6px;\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  border-radius: 8px;\r\n  background: var(--dsw-alias-bg-layer-2);\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-primary);\r\n  text-align: right;\r\n}\r\n\r\n.VYJBRq_number::-webkit-outer-spin-button,\r\n.VYJBRq_number::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.VYJBRq_unit {\r\n  flex: none;\r\n  width: 18px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-tertiary);\r\n}\r\n\r\n/* Segmented picker: two cells in a hairline frame. */\r\n.VYJBRq_segmented {\r\n  display: inline-flex;\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.VYJBRq_seg,\r\n.VYJBRq_segActive {\r\n  height: 26px;\r\n  padding: 0 12px;\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-secondary);\r\n  cursor: pointer;\r\n}\r\n\r\n.VYJBRq_seg + .VYJBRq_seg,\r\n.VYJBRq_segActive + .VYJBRq_seg,\r\n.VYJBRq_seg + .VYJBRq_segActive {\r\n  border-left: 1px solid var(--dsw-alias-border-l2);\r\n}\r\n\r\n.VYJBRq_segActive {\r\n  background: var(--dsw-alias-state-business-tertiary);\r\n  color: var(--dsw-alias-state-business-primary);\r\n}\r\n\r\n/* Wallpaper picker: hidden file input + a ghost button. */\r\n.VYJBRq_wallpaperPick {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.VYJBRq_fileInput {\r\n  display: none;\r\n}\r\n\r\n.VYJBRq_pickButton {\r\n  height: 26px;\r\n  padding: 0 12px;\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  border-radius: 8px;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-primary);\r\n  cursor: pointer;\r\n}\r\n\r\n.VYJBRq_pickButton:hover {\r\n  background: var(--dsw-alias-interactive-bg-hover);\r\n}\r\n\r\n/* Delete-wallpaper ghost button: error-tinted, next to the picker. */\r\n.VYJBRq_deleteButton {\r\n  height: 26px;\r\n  padding: 0 12px;\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  border-radius: 8px;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-error);\r\n  cursor: pointer;\r\n}\r\n\r\n.VYJBRq_deleteButton:hover {\r\n  background: var(--dsw-alias-interactive-bg-hover);\r\n}\r\n\r\n/* Font picker: a trigger button + a SELF-DRAWN glass dropdown. The native\r\n   <select> popup is OS chrome — unthemeable, bright white in dark mode —\r\n   so the menu is plain markup: blur on the non-scrolling shell, the list\r\n   scrolling inside it (blur + scroll on one element makes Chromium smear\r\n   its own content). */\r\n.VYJBRq_fontPick {\r\n  position: relative;\r\n  min-width: 0;\r\n  flex: 1;\r\n  display: flex;\r\n}\r\n\r\n.VYJBRq_fontSelect {\r\n  border: 1px solid var(--dsw-alias-border-l2);\r\n  background: var(--dsw-alias-bg-layer-2);\r\n  border-radius: 8px;\r\n  min-width: 0;\r\n  flex: 1;\r\n  height: 26px;\r\n  padding: 0 8px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-primary);\r\n  cursor: pointer;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.VYJBRq_fontSelect:focus-visible {\r\n  outline: 2px solid rgba(110, 155, 232, 0.85);\r\n  outline-offset: 1px;\r\n}\r\n\r\n.VYJBRq_fontMenu {\r\n  position: absolute;\r\n  top: calc(100% + 4px);\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 30;\r\n  max-height: 240px;\r\n  overflow: hidden;\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-radius: 10px;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  box-shadow:\r\n    0 10px 36px rgba(19, 45, 83, 0.16),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  padding: 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.VYJBRq_fontMenuUp {\r\n  top: auto;\r\n  bottom: calc(100% + 4px);\r\n}\r\n\r\nbody[data-ds-dark-theme] .VYJBRq_fontMenu {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow:\r\n    0 10px 36px rgba(2, 6, 14, 0.5),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07);\r\n}\r\n\r\n.VYJBRq_fontMenuScroll {\r\n  overflow-y: auto;\r\n  overscroll-behavior: contain;\r\n  min-height: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.VYJBRq_fontGroupLabel {\r\n  padding: 4px 8px 2px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n  color: var(--dsw-alias-label-tertiary);\r\n  flex: none;\r\n}\r\n\r\n.VYJBRq_fontOpt {\r\n  flex: none;\r\n  border: none;\r\n  background: transparent;\r\n  border-radius: 6px;\r\n  padding: 5px 8px;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: var(--dsw-alias-label-primary);\r\n  text-align: left;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.VYJBRq_fontOpt:hover,\r\n.VYJBRq_fontOpt[data-hi='true'] {\r\n  background: var(--dsw-alias-interactive-bg-hover);\r\n}\r\n\r\n.VYJBRq_fontOpt[data-cur='true'] {\r\n  color: var(--dsw-alias-state-business-primary);\r\n  background: var(--dsw-alias-state-business-tertiary);\r\n}\r\n";
const tagId$2 = "@deepseek-ai/dsh-client-ui-seaglass/AquaAppearanceRow.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$2) + "]") === null) {
	const tag = document.createElement("style");
	tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-seaglass";
	tag.dataset.pluginCss = tagId$2;
	tag.textContent = css$2;
	document.head.appendChild(tag);
}
var AquaAppearanceRow_module_default = {
	"unit": "VYJBRq_unit",
	"toggle": "VYJBRq_toggle",
	"subGroup": "VYJBRq_subGroup",
	"knob": "VYJBRq_knob",
	"controls": "VYJBRq_controls",
	"groupHint": "VYJBRq_groupHint",
	"slider": "VYJBRq_slider",
	"subTitle": "VYJBRq_subTitle",
	"row": "VYJBRq_row",
	"rowHint": "VYJBRq_rowHint",
	"number": "VYJBRq_number",
	"toggleOn": "VYJBRq_toggleOn",
	"segmented": "VYJBRq_segmented",
	"group": "VYJBRq_group",
	"seg": "VYJBRq_seg",
	"segActive": "VYJBRq_segActive",
	"wallpaperPick": "VYJBRq_wallpaperPick",
	"rowLabel": "VYJBRq_rowLabel",
	"fileInput": "VYJBRq_fileInput",
	"deleteButton": "VYJBRq_deleteButton",
	"knobHint": "VYJBRq_knobHint",
	"numberWrap": "VYJBRq_numberWrap",
	"inlineLabel": "VYJBRq_inlineLabel",
	"check": "VYJBRq_check",
	"pickButton": "VYJBRq_pickButton",
	"knobLabel": "VYJBRq_knobLabel",
	"fontSelect": "VYJBRq_fontSelect",
	"fontPick": "VYJBRq_fontPick",
	"fontMenu": "VYJBRq_fontMenu",
	"fontMenuUp": "VYJBRq_fontMenuUp",
	"fontMenuScroll": "VYJBRq_fontMenuScroll",
	"fontGroupLabel": "VYJBRq_fontGroupLabel",
	"fontOpt": "VYJBRq_fontOpt"
};

//#endregion
//#region src/client/AquaControls.tsx
/**
* Shared controls for the Aqua settings surfaces: the Knob (stepless slider +
* number box), the Segmented picker, the FontPicker dropdown (self-drawn
* glass menu over enumerated system fonts), and the wallpaper file reader.
*/
/** Render one knob row. */
function Knob({ label, value, min, max, step, unit, onChange }) {
	const clamp = (n) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
		className: AquaAppearanceRow_module_default.knob,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: AquaAppearanceRow_module_default.knobLabel,
				children: label
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
				type: "range",
				className: AquaAppearanceRow_module_default.slider,
				min,
				max,
				step,
				value,
				onChange: (e) => {
					onChange(clamp(Number(e.target.value)));
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: AquaAppearanceRow_module_default.numberWrap,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "number",
					className: AquaAppearanceRow_module_default.number,
					min,
					max,
					step,
					value,
					onChange: (e) => {
						onChange(clamp(Number(e.target.value)));
					}
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: AquaAppearanceRow_module_default.unit,
					children: unit
				})]
			})
		]
	});
}
/** Render a two-button segmented picker. */
function Segmented({ label, value, options, onSelect }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: AquaAppearanceRow_module_default.segmented,
		role: "group",
		"aria-label": label,
		children: options.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
			type: "button",
			className: option.id === value ? AquaAppearanceRow_module_default.segActive : AquaAppearanceRow_module_default.seg,
			"aria-pressed": option.id === value,
			onClick: () => {
				onSelect(option.id);
			},
			children: option.label
		}, option.id))
	});
}
/** Read a file, downscale to ≤1920px, and return a compact JPEG data URL. */
async function fileToDataUrl(file) {
	const raw = await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(String(reader.result));
		};
		reader.onerror = () => {
			reject(reader.error);
		};
		reader.readAsDataURL(file);
	});
	const image = await new Promise((resolve, reject) => {
		const im = new Image();
		im.onload = () => {
			resolve(im);
		};
		im.onerror = () => {
			reject(new Error("image load failed"));
		};
		im.src = raw;
	});
	const scale = Math.min(1, 1920 / Math.max(image.width, image.height));
	const w = Math.max(1, Math.round(image.width * scale));
	const h = Math.max(1, Math.round(image.height * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (ctx === null) return raw;
	ctx.drawImage(image, 0, 0, w, h);
	return canvas.toDataURL("image/jpeg", .82);
}
/** Builtin font families shown before (and as the fallback to) the system
*  enumeration — always available, no permission needed. */
const BUILTIN_LATIN_FONTS = [
	"Space Grotesk Variable",
	"Segoe UI",
	"Arial",
	"Verdana",
	"Tahoma",
	"Georgia",
	"Times New Roman",
	"Consolas",
	"Courier New"
];
const BUILTIN_CJK_FONTS = [
	"Microsoft YaHei",
	"PingFang SC",
	"Hiragino Sans GB",
	"Noto Sans SC",
	"Noto Serif SC",
	"SimSun",
	"SimHei",
	"KaiTi",
	"FangSong",
	"Songti SC",
	"STHeiti"
];
/** Chinese display names for the common CJK families. queryLocalFonts
*  reports the ENGLISH name-table entry, so without this map a Chinese
*  user sees "Microsoft YaHei" and cannot tell it is 微软雅黑. Keys are
*  the CSS-referenced (English) family; the alias is display-only. */
const CJK_FONT_LABELS = {
	"Microsoft YaHei": "微软雅黑",
	"Microsoft YaHei UI": "微软雅黑",
	"Microsoft JhengHei": "微軟正黑體",
	"PingFang SC": "苹方-简",
	"PingFang TC": "苹方-繁",
	"PingFang HK": "苹方-香港",
	"Hiragino Sans GB": "冬青黑体",
	"Noto Sans SC": "思源黑体",
	"Noto Serif SC": "思源宋体",
	"Source Han Sans SC": "思源黑体",
	"Source Han Serif SC": "思源宋体",
	SimSun: "宋体",
	NSimSun: "新宋体",
	SimHei: "黑体",
	KaiTi: "楷体",
	"KaiTi_GB2312": "楷体",
	FangSong: "仿宋",
	"FangSong_GB2312": "仿宋",
	DengXian: "等线",
	"Songti SC": "宋体-简",
	"Songti TC": "宋体-繁",
	STHeiti: "华文黑体",
	STXihei: "华文细黑",
	STKaiti: "华文楷体",
	STSong: "华文宋体",
	STFangsong: "华文仿宋",
	STZhongsong: "华文中宋",
	STLiti: "华文隶书",
	STXingkai: "华文行楷",
	STXinwei: "华文新魏",
	STHupo: "华文琥珀",
	STCaiyun: "华文彩云",
	LiSu: "隶书",
	YouYuan: "幼圆",
	"DFKai-SB": "標楷體",
	PMingLiU: "新細明體",
	MingLiU: "細明體"
};
/** Display label for a font family: "中文名（English）" when a Chinese
*  alias exists, the plain name otherwise. The stored value stays the
*  English family (what CSS font-family references reliably). */
function fontLabel(name) {
	const alias = CJK_FONT_LABELS[name];
	return alias === undefined ? name : `${alias}（${name}）`;
}
/** Enumerate the installed system font families via the Local Font Access
*  API. Needs a user gesture (the picker's first open) and a permission
*  grant; null when unavailable, denied, or failed. */
async function listSystemFonts() {
	try {
		if (window.queryLocalFonts === undefined) return null;
		const faces = await window.queryLocalFonts();
		const families = [...new Set(faces.map((f) => f.family).filter((name) => name))].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
		return families.length > 0 ? families : null;
	} catch {
		return null;
	}
}
/** True when the family paints CJK glyphs itself: measure 永語字 through
*  the family over a monospace fallback — a different width means the
*  family covered the characters (no glyph fallback happened). */
function familyHasCJK(family) {
	try {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const text = "永語字";
		ctx.font = "72px monospace";
		const base = ctx.measureText(text).width;
		ctx.font = `72px "${String(family).replace(/"/g, "")}", monospace`;
		return Math.abs(ctx.measureText(text).width - base) > .5;
	} catch {
		return false;
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
function FontPicker({ label, value, builtin, defaultName, cjk, t, onChange }) {
	const [open, setOpen] = (0, react.useState)(false);
	const [system, setSystem] = (0, react.useState)(null);
	const [systemCjk, setSystemCjk] = (0, react.useState)(null);
	const [systemRest, setSystemRest] = (0, react.useState)(null);
	const [highlight, setHighlight] = (0, react.useState)(-1);
	const [openUp, setOpenUp] = (0, react.useState)(false);
	const rootRef = (0, react.useRef)(null);
	const listRef = (0, react.useRef)(null);
	const entries = [
		{
			kind: "option",
			value: "",
			label: `${t("aqua.fontDefault")} · ${defaultName}`
		},
		{
			kind: "group",
			label: t("aqua.fontBuiltin")
		},
		...builtin.map((name) => ({
			kind: "option",
			value: name,
			label: name
		}))
	];
	if (value !== "" && !builtin.includes(value) && !(system ?? []).includes(value)) {
		entries.push({
			kind: "option",
			value,
			label: value
		});
	}
	if (system !== null) {
		const cjkGroup = [{
			kind: "group",
			label: t("aqua.fontSystemCjk")
		}, ...systemCjk.map((name) => ({
			kind: "option",
			value: name,
			label: name
		}))];
		const latinGroup = [{
			kind: "group",
			label: t("aqua.fontSystemLatin")
		}, ...systemRest.map((name) => ({
			kind: "option",
			value: name,
			label: name
		}))];
		entries.push(...cjk ? [...cjkGroup, ...latinGroup] : [...latinGroup, ...cjkGroup]);
	}
	const options = entries.filter((entry) => entry.kind === "option");
	const optionIndex = new Map(options.map((entry, idx) => [entry, idx]));
	const enumerate = () => {
		if (system !== null) return;
		void listSystemFonts().then((families) => {
			if (families === null) return;
			const known = [];
			const others = [];
			for (const name of families) (CJK_FONT_LABELS[name] !== undefined || familyHasCJK(name) ? known : others).push(name);
			setSystem(families);
			setSystemCjk(known);
			setSystemRest(others);
		});
	};
	const pick = (entry) => {
		onChange(entry.value ?? "");
		setOpen(false);
	};
	/** Open (or close): flip the flag, pick the expansion direction from
	*  the scrollable panel's VISIBLE space around the trigger — the menu
	*  clips against that ancestor, not the viewport — and enumerate once. */
	const toggle = () => {
		const trigger = rootRef.current?.querySelector("button");
		if (open === false && trigger !== null && trigger !== undefined) {
			let scroller = trigger.parentElement;
			while (scroller !== null) {
				const overflowY = getComputedStyle(scroller).overflowY;
				if (overflowY === "auto" || overflowY === "scroll") break;
				scroller = scroller.parentElement;
			}
			const rect = trigger.getBoundingClientRect();
			if (scroller !== null) {
				const bounds = scroller.getBoundingClientRect();
				const below = bounds.bottom - rect.bottom;
				setOpenUp(below < 264 && rect.top - bounds.top > 264);
			} else {
				setOpenUp(window.innerHeight - rect.bottom < 264 && rect.top > 264);
			}
		}
		setOpen(!open);
	};
	(0, react.useEffect)(() => {
		if (!open) return;
		const onDocDown = (event) => {
			if (rootRef.current !== null && event.target instanceof Node && !rootRef.current.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("pointerdown", onDocDown, true);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onDocDown, true);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	(0, react.useEffect)(() => {
		if (!open) return;
		enumerate();
		const current = options.findIndex((entry) => entry.value === value);
		setHighlight(current);
		const list = listRef.current;
		if (list !== null) {
			const el = list.querySelector("[data-cur=true]");
			if (el !== null) el.scrollIntoView({ block: "nearest" });
		}
	}, [open, system]);
	const onKeyDown = (event) => {
		if (!open) {
			if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				toggle();
			}
			return;
		}
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			setHighlight((h) => {
				const count = options.length;
				if (count === 0) return -1;
				return h < 0 ? event.key === "ArrowDown" ? 0 : count - 1 : (h + (event.key === "ArrowDown" ? 1 : -1) + count) % count;
			});
		} else if (event.key === "Enter") {
			event.preventDefault();
			const entry = options[highlight];
			if (entry !== undefined) pick(entry);
		}
	};
	(0, react.useEffect)(() => {
		const list = listRef.current;
		if (open && list !== null && highlight >= 0) {
			const el = list.querySelector(`[data-idx="${highlight}"]`);
			if (el !== null) el.scrollIntoView({ block: "nearest" });
		}
	}, [highlight]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: AquaAppearanceRow_module_default.fontPick,
		ref: rootRef,
		onKeyDown,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
			type: "button",
			className: AquaAppearanceRow_module_default.fontSelect,
			"aria-label": label,
			"aria-expanded": open,
			"aria-haspopup": "listbox",
			onClick: toggle,
			children: value === "" ? `${t("aqua.fontDefault")} · ${defaultName}` : fontLabel(value)
		}), open && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: openUp ? `${AquaAppearanceRow_module_default.fontMenu} ${AquaAppearanceRow_module_default.fontMenuUp}` : AquaAppearanceRow_module_default.fontMenu,
			role: "listbox",
			"aria-label": label,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: AquaAppearanceRow_module_default.fontMenuScroll,
				ref: listRef,
				children: entries.map((entry, idx) => entry.kind === "group" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.fontGroupLabel,
					children: entry.label
				}, `g${idx}`) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: AquaAppearanceRow_module_default.fontOpt,
					"data-cur": entry.value === value,
					"data-idx": optionIndex.get(entry),
					"data-hi": optionIndex.get(entry) === highlight,
					onMouseEnter: () => {
						setHighlight(optionIndex.get(entry) ?? -1);
					},
					onClick: () => {
						pick(entry);
					},
					children: fontLabel(entry.label)
				}, `o${idx}`))
			})
		})]
	});
}

//#endregion
//#region src/client/wallpaper-store.ts
/**
* Large wallpaper storage: videos too big for localStorage (its ~5MB quota)
* go into IndexedDB as raw blobs, while the setting keeps a tiny `idb:<id>`
* marker. On boot the layer loads the blob, wraps it in an object URL and
* hands it to the <video> element — no quota trouble, survives restarts.
*/
const DB_NAME = "dsh-aqua-media";
const STORE = "wallpaper";
const DB_VERSION = 1;
/** Fixed key holding the File System Access handle (the browser's remembered
*  file authorization — the closest the web allows to "remember the path"). */
const HANDLE_KEY = "videoHandle";
function openDb() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
		};
		request.onsuccess = () => {
			resolve(request.result);
		};
		request.onerror = () => {
			reject(request.error ?? new Error("indexedDB open failed"));
		};
	});
}
function tx(db, mode) {
	return db.transaction(STORE, mode).objectStore(STORE);
}
/** Store a blob and return its `idb:<id>` marker ('' on failure → caller
*  falls back to the data-URL path). */
async function saveVideoBlob(blob) {
	try {
		const db = await openDb();
		const id = `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
		await new Promise((resolve, reject) => {
			const request = tx(db, "readwrite").put(blob, id);
			request.onsuccess = () => {
				resolve();
			};
			request.onerror = () => {
				reject(request.error ?? new Error("blob put failed"));
			};
		});
		db.close();
		return `idb:${id}`;
	} catch {
		return "";
	}
}
/** Load a stored blob by id (null when absent). */
async function loadVideoBlob(id) {
	try {
		const db = await openDb();
		const blob = await new Promise((resolve, reject) => {
			const request = tx(db, "readonly").get(id);
			request.onsuccess = () => {
				resolve(request.result);
			};
			request.onerror = () => {
				reject(request.error ?? new Error("blob get failed"));
			};
		});
		db.close();
		return blob ?? null;
	} catch {
		return null;
	}
}
/** Drop a stored blob (ignores failures). */
async function deleteVideoBlob(id) {
	try {
		const db = await openDb();
		await new Promise((resolve) => {
			const request = tx(db, "readwrite").delete(id);
			request.onsuccess = () => {
				resolve();
			};
			request.onerror = () => {
				resolve();
			};
		});
		db.close();
	} catch {}
}
/** Persist a File System Access handle so the next visit can re-read the
*  ORIGINAL file without the user picking it again. */
async function saveVideoHandle(handle) {
	try {
		const db = await openDb();
		await new Promise((resolve, reject) => {
			const request = tx(db, "readwrite").put(handle, HANDLE_KEY);
			request.onsuccess = () => {
				resolve();
			};
			request.onerror = () => {
				reject(request.error ?? new Error("handle put failed"));
			};
		});
		db.close();
		return true;
	} catch {
		return false;
	}
}
/** Load the remembered file handle (null when absent or storage fails). */
async function loadVideoHandle() {
	try {
		const db = await openDb();
		const handle = await new Promise((resolve, reject) => {
			const request = tx(db, "readonly").get(HANDLE_KEY);
			request.onsuccess = () => {
				resolve(request.result);
			};
			request.onerror = () => {
				reject(request.error ?? new Error("handle get failed"));
			};
		});
		db.close();
		return handle ?? null;
	} catch {
		return null;
	}
}

//#endregion
//#region src/client/AquaAppearanceRow.tsx
/**
* Aqua row registered as its OWN settings section (`settings.section`, id
* `aqua`): the master switch up top, then every glass knob — mode (mica /
* compatibility), blur/frost (mica mode only), fluid color, background
* brightness, the backdrop source picker, the wallpaper picker with its two
* knobs, and the per-script font pickers. Every write goes straight through
* to the layer, so the skin moves live. When the master switch is off the
* page collapses to the switch plus a hint.
*/
/**
* Render the Aqua settings section.
* @param props - composed slot props.
* @returns the Aqua section page.
*/
function AquaAppearanceRow(props) {
	const { t, setEnabled, setMode, setBlur, setFrost, setCodeFrost, setFluidHue, setFluidDepth, setBgBrightness, setBackground, setWallpaper, setWhale, setCritters, setMesh, setSpotlight, setPress, setWallpaperBlur, setWallpaperFrost, setVideoBlur, setVideoBrightness, setFontLatin, setFontCjk, authorizeVideo, useStore } = props;
	const enabled = useStore((s) => s.enabled);
	const mode = useStore((s) => s.mode);
	const blur = useStore((s) => s.blur);
	const frost = useStore((s) => s.frost);
	const codeFrost = useStore((s) => s.codeFrost);
	const fluidHue = useStore((s) => s.fluidHue);
	const fluidDepth = useStore((s) => s.fluidDepth);
	const bgBrightness = useStore((s) => s.bgBrightness);
	const dark = useStore((s) => s.dark);
	const background = useStore((s) => s.background);
	const whale = useStore((s) => s.whale);
	const critters = useStore((s) => s.critters);
	const mesh = useStore((s) => s.mesh);
	const spotlight = useStore((s) => s.spotlight);
	const press = useStore((s) => s.press);
	const wallpaper = useStore((s) => s.wallpaper);
	const wallpaperBlur = useStore((s) => s.wallpaperBlur);
	const wallpaperFrost = useStore((s) => s.wallpaperFrost);
	const videoBlur = useStore((s) => s.videoBlur);
	const videoBrightness = useStore((s) => s.videoBrightness);
	const fontLatin = useStore((s) => s.fontLatin);
	const fontCjk = useStore((s) => s.fontCjk);
	const fileRef = (0, react.useRef)(null);
	const videoRef = (0, react.useRef)(null);
	const isVideoWallpaper = wallpaper.startsWith("data:video/") || wallpaper.startsWith("idb:") || wallpaper.startsWith("fsa:");
	/** Pick a video. Chromium: File System Access — the browser remembers the
	*  file authorization, so later visits re-read the ORIGINAL file with no
	*  storage copy. Other browsers fall back to the plain file input. */
	const pickVideo = () => {
		if (window.showOpenFilePicker !== undefined) {
			void (async () => {
				try {
					const [handle] = await window.showOpenFilePicker({
						multiple: false,
						types: [{
							description: "Video",
							accept: { "video/*": [
								".mp4",
								".webm",
								".ogg",
								".mov",
								".m4v",
								".mkv"
							] }
						}]
					});
					if (handle === undefined) return;
					setBackground("wallpaper");
					if (await saveVideoHandle(handle)) {
						setWallpaper(`fsa:${handle.name}`);
					} else {
						const file = await handle.getFile();
						void saveVideoBlob(file).then((id) => {
							if (id !== "") setWallpaper(id);
							else void fileToDataUrl(file).then(setWallpaper);
						});
					}
				} catch {}
			})();
		} else {
			videoRef.current?.click();
		}
	};
	/** 选择视频 click: an fsa: video with stale permission re-authorizes in
	*  one click (no picker); anything else opens the picker. */
	const onChooseVideo = () => {
		if (wallpaper.startsWith("fsa:")) {
			void (async () => {
				const handle = await loadVideoHandle();
				if (handle !== null) {
					try {
						const permission = await handle.queryPermission({ mode: "read" });
						if (permission === "granted") {
							authorizeVideo();
							return;
						}
						if (permission === "prompt") {
							const next = await handle.requestPermission({ mode: "read" });
							if (next === "granted") {
								authorizeVideo();
								return;
							}
						}
					} catch {}
				}
				pickVideo();
			})();
		} else {
			pickVideo();
		}
	};
	const bgMin = dark ? 0 : 50;
	const bgMax = dark ? 50 : 100;
	const bgDisplay = Math.min(bgMax, Math.max(bgMin, bgBrightness));
	const masterRow = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: AquaAppearanceRow_module_default.row,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: AquaAppearanceRow_module_default.rowLabel,
			children: t("aqua.title")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			type: "button",
			className: enabled ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
			"aria-pressed": enabled,
			onClick: () => {
				setEnabled(!enabled);
			},
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: AquaAppearanceRow_module_default.check,
				children: enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
			}), enabled ? t("aqua.enable") : t("aqua.disable")]
		})]
	});
	if (!enabled) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: AquaAppearanceRow_module_default.group,
			children: [masterRow, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: AquaAppearanceRow_module_default.groupHint,
				children: t("aqua.sectionDisabled")
			})]
		});
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: AquaAppearanceRow_module_default.group,
		children: [
			masterRow,
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.mode")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: AquaAppearanceRow_module_default.row,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
							label: t("aqua.mode"),
							value: mode,
							options: [{
								id: "mica",
								label: t("aqua.modeMica")
							}, {
								id: "compat",
								label: t("aqua.modeCompat")
							}],
							onSelect: setMode
						})
					})
				})]
			}),
			mode === "mica" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.materialGroup")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.blur"),
							value: blur,
							min: 0,
							max: 40,
							step: .5,
							unit: "px",
							onChange: setBlur
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.frost"),
							value: frost,
							min: 0,
							max: 100,
							step: 1,
							unit: "%",
							onChange: setFrost
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.codeFrost"),
							value: codeFrost,
							min: 0,
							max: 100,
							step: 1,
							unit: "%",
							onChange: setCodeFrost
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.background")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
								label: t("aqua.background"),
								value: background,
								options: [{
									id: "fluid",
									label: t("aqua.backgroundFluid")
								}, {
									id: "wallpaper",
									label: t("aqua.backgroundWallpaper")
								}],
								onSelect: setBackground
							})
						}),
						background === "fluid" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.fluidHue"),
							value: fluidHue,
							min: 0,
							max: 360,
							step: 1,
							unit: "°",
							onChange: setFluidHue
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.fluidDepth"),
							value: fluidDepth,
							min: 0,
							max: 100,
							step: 1,
							unit: "%",
							onChange: setFluidDepth
						})] }),
						background === "wallpaper" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: AquaAppearanceRow_module_default.row,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_default.rowLabel,
									children: t("aqua.wallpaper")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: AquaAppearanceRow_module_default.wallpaperPick,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											ref: fileRef,
											type: "file",
											accept: "image/*",
											className: AquaAppearanceRow_module_default.fileInput,
											onChange: (e) => {
												const file = e.target.files?.[0];
												if (file !== undefined) {
													setBackground("wallpaper");
													void fileToDataUrl(file).then(setWallpaper);
												}
												e.target.value = "";
											}
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											ref: videoRef,
											type: "file",
											accept: "video/mp4,video/webm,video/ogg,video/quicktime",
											className: AquaAppearanceRow_module_default.fileInput,
											onChange: (e) => {
												const file = e.target.files?.[0];
												if (file !== undefined) {
													setBackground("wallpaper");
													void saveVideoBlob(file).then((id) => {
														if (id !== "") {
															setWallpaper(id);
														} else {
															void fileToDataUrl(file).then(setWallpaper);
														}
													});
												}
												e.target.value = "";
											}
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: AquaAppearanceRow_module_default.pickButton,
											onClick: () => {
												fileRef.current?.click();
											},
											children: t("aqua.chooseImage")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: AquaAppearanceRow_module_default.pickButton,
											onClick: onChooseVideo,
											children: t("aqua.chooseVideo")
										}),
										wallpaper !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: AquaAppearanceRow_module_default.deleteButton,
											onClick: () => {
												setWallpaper("");
											},
											children: t("aqua.deleteWallpaper")
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: AquaAppearanceRow_module_default.knobHint,
								children: t("aqua.wallpaperHint")
							}),
							!isVideoWallpaper && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("aqua.wallpaperBlur"),
								value: wallpaperBlur,
								min: 0,
								max: 40,
								step: .5,
								unit: "px",
								onChange: setWallpaperBlur
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("aqua.wallpaperFrost"),
								value: wallpaperFrost,
								min: 0,
								max: 100,
								step: 1,
								unit: "%",
								onChange: setWallpaperFrost
							})] }),
							isVideoWallpaper && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("aqua.videoBlur"),
									value: videoBlur,
									min: 0,
									max: 40,
									step: .5,
									unit: "px",
									onChange: setVideoBlur
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("aqua.videoBrightness"),
									value: videoBrightness,
									min: 0,
									max: 100,
									step: 1,
									unit: "%",
									onChange: setVideoBrightness
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: AquaAppearanceRow_module_default.knobHint,
									children: t("aqua.videoHint")
								})
							] })
						] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
							label: t("aqua.bgBrightness"),
							value: bgDisplay,
							min: bgMin,
							max: bgMax,
							step: 1,
							unit: "%",
							onChange: setBgBrightness
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_default.knobHint,
							children: t(dark ? "aqua.bgBrightnessHintDark" : "aqua.bgBrightnessHintLight")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.decorAmbient")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.rowLabel,
								children: t("aqua.whale")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: whale ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
								"aria-pressed": whale,
								onClick: () => {
									setWhale(!whale);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_default.check,
									children: whale && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
								}), whale ? t("aqua.enable") : t("aqua.disable")]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.rowLabel,
								children: t("aqua.critters")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: critters ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
								"aria-pressed": critters,
								onClick: () => {
									setCritters(!critters);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_default.check,
									children: critters && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
								}), critters ? t("aqua.enable") : t("aqua.disable")]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.rowLabel,
								children: t("aqua.mesh")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: mesh ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
								"aria-pressed": mesh,
								onClick: () => {
									setMesh(!mesh);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: AquaAppearanceRow_module_default.check,
									children: mesh && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
								}), mesh ? t("aqua.enable") : t("aqua.disable")]
							})]
						})
					]
				})]
			}),
			mode === "mica" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.decorHover")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: AquaAppearanceRow_module_default.rowLabel,
							children: t("aqua.spotlight")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							className: spotlight ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
							"aria-pressed": spotlight,
							onClick: () => {
								setSpotlight(!spotlight);
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.check,
								children: spotlight && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
							}), spotlight ? t("aqua.enable") : t("aqua.disable")]
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AquaAppearanceRow_module_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: AquaAppearanceRow_module_default.rowLabel,
							children: t("aqua.press")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							className: press ? AquaAppearanceRow_module_default.toggleOn : AquaAppearanceRow_module_default.toggle,
							"aria-pressed": press,
							onClick: () => {
								setPress(!press);
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.check,
								children: press && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutline16, {})
							}), press ? t("aqua.enable") : t("aqua.disable")]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: AquaAppearanceRow_module_default.subGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: AquaAppearanceRow_module_default.subTitle,
					children: t("aqua.fontGroup")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AquaAppearanceRow_module_default.controls,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.rowLabel,
								children: t("aqua.fontLatin")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FontPicker, {
								label: t("aqua.fontLatin"),
								value: fontLatin,
								builtin: BUILTIN_LATIN_FONTS,
								defaultName: "Space Grotesk",
								t,
								onChange: setFontLatin
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: AquaAppearanceRow_module_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: AquaAppearanceRow_module_default.rowLabel,
								children: t("aqua.fontCjk")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FontPicker, {
								label: t("aqua.fontCjk"),
								value: fontCjk,
								builtin: BUILTIN_CJK_FONTS,
								defaultName: "微软雅黑",
								cjk: true,
								t,
								onChange: setFontCjk
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: AquaAppearanceRow_module_default.knobHint,
							children: t("aqua.fontHint")
						})
					]
				})]
			})
		]
	});
}

//#endregion
//#region src/client/settings-store.ts
/**
* Aqua row slot store: a mirror of the layer's state (enable flag plus the
* knobs and the backdrop source). The plugin's apply-world change listener is
* the only writer; the row component reads via props.useStore.
*/
/**
* Declares the Aqua row state and write surface.
* @returns the store handle.
*/
function createAquaRowStore() {
	return (0, _deepseek_ai_dsh_client_store.defineStore)({
		init: () => ({
			enabled: true,
			mode: "mica",
			blur: 20,
			frost: 7,
			codeFrost: 20,
			fluidHue: 320,
			fluidDepth: 25,
			bgBrightness: 50,
			dark: false,
			background: "fluid",
			wallpaper: "",
			whale: true,
			critters: true,
			mesh: true,
			spotlight: true,
			press: true,
			wallpaperBlur: 0,
			wallpaperFrost: 0,
			videoBlur: 6,
			videoBrightness: 45,
			fontLatin: "",
			fontCjk: "",
			revision: -1
		}),
		actions: { sync: (d, next, revision) => {
			if (revision <= d.revision) return;
			d.enabled = next.enabled;
			d.mode = next.mode;
			d.blur = next.blur;
			d.frost = next.frost;
			d.codeFrost = next.codeFrost;
			d.fluidHue = next.fluidHue;
			d.fluidDepth = next.fluidDepth;
			d.bgBrightness = next.bgBrightness;
			d.dark = next.dark;
			d.background = next.background;
			d.wallpaper = next.wallpaper;
			d.whale = next.whale;
			d.critters = next.critters;
			d.mesh = next.mesh;
			d.spotlight = next.spotlight;
			d.press = next.press;
			d.wallpaperBlur = next.wallpaperBlur;
			d.wallpaperFrost = next.wallpaperFrost;
			d.videoBlur = next.videoBlur;
			d.videoBrightness = next.videoBrightness;
			d.fontLatin = next.fontLatin;
			d.fontCjk = next.fontCjk;
			d.revision = revision;
		} }
	});
}

//#endregion
//#region src/client/locales.ts
/** `settings.aqua` namespace dictionaries (the settings-row copy). */
/** Dictionary namespace owned by this plugin. */
const NS = "settings.aqua";
/** Simplified Chinese dictionary (the key-set source of truth). */
const zh = {
	"aqua.title": "玻璃主题",
	"aqua.description": "全局玻璃质感，云母/兼容双模式，模糊度、磨砂度、背景与颜色都可自由调节",
	"aqua.enable": "开启",
	"aqua.disable": "关闭",
	"aqua.mode": "模式",
	"aqua.modeMica": "云母效果",
	"aqua.modeCompat": "兼容模式",
	"aqua.materialGroup": "玻璃材质",
	"aqua.decorAmbient": "环境装饰",
	"aqua.decorHover": "悬停效果",
	"aqua.whale": "粒子鲸鱼",
	"aqua.critters": "小鱼",
	"aqua.mesh": "网状交互",
	"aqua.spotlight": "鼠标辉光",
	"aqua.press": "悬停下压",
	"aqua.blur": "玻璃模糊度",
	"aqua.frost": "磨砂度",
	"aqua.codeFrost": "代码块磨砂度",
	"aqua.fluidHue": "色调",
	"aqua.fluidDepth": "颜色深浅",
	"aqua.bgBrightness": "背景亮度",
	"aqua.bgBrightnessHintDark": "深色模式：0 压暗至纯黑，50 原样",
	"aqua.bgBrightnessHintLight": "浅色模式：50 原样，100 提亮至纯白",
	"aqua.background": "背景",
	"aqua.backgroundFluid": "流体",
	"aqua.backgroundWallpaper": "壁纸",
	"aqua.wallpaper": "壁纸",
	"aqua.wallpaperHint": "浅色壁纸用浅色模式，深色壁纸用深色模式⚠️",
	"aqua.chooseImage": "选择图片",
	"aqua.chooseVideo": "选择视频",
	"aqua.deleteWallpaper": "删除",
	"aqua.wallpaperBlur": "壁纸模糊度",
	"aqua.wallpaperFrost": "壁纸磨砂度",
	"aqua.videoBlur": "视频模糊度",
	"aqua.videoBrightness": "视频亮度",
	"aqua.videoHint": "⚠️视频会自动压暗以保证文字清晰，可用模糊度和亮度调节；刷新后未自动播放时点一下“选择视频”即可恢复",
	"aqua.nav": "Seaglass 主题",
	"aqua.sectionDisabled": "主题未启用：打开上面的开关即可恢复玻璃质感界面",
	"aqua.fontGroup": "字体",
	"aqua.fontLatin": "英文字体",
	"aqua.fontCjk": "中文字体",
	"aqua.fontDefault": "默认",
	"aqua.fontBuiltin": "常用",
	"aqua.fontSystemCjk": "系统中文",
	"aqua.fontSystemLatin": "系统拉丁",
	"aqua.fontHint": "选择字体族；首次展开“系统”分组时浏览器会请求授权，拒绝后仍可用上方常用列表"
};
/** English dictionary. */
const en = {
	"aqua.title": "Glass theme",
	"aqua.description": "Global glassmorphism with mica/compatibility modes — blur, frost, backdrop, and color all adjustable",
	"aqua.enable": "On",
	"aqua.disable": "Off",
	"aqua.mode": "Mode",
	"aqua.modeMica": "Mica",
	"aqua.modeCompat": "Compatibility",
	"aqua.materialGroup": "Glass material",
	"aqua.decorAmbient": "Ambient",
	"aqua.decorHover": "Hover effects",
	"aqua.whale": "Particle whale",
	"aqua.critters": "Fish",
	"aqua.mesh": "Interactive mesh",
	"aqua.spotlight": "Cursor glow",
	"aqua.press": "Hover tilt",
	"aqua.blur": "Glass blur",
	"aqua.frost": "Frost",
	"aqua.codeFrost": "Code frost",
	"aqua.fluidHue": "Hue",
	"aqua.fluidDepth": "Color depth",
	"aqua.bgBrightness": "Background brightness",
	"aqua.bgBrightnessHintDark": "Dark mode: 0 fades to pure black, 50 is unchanged",
	"aqua.bgBrightnessHintLight": "Light mode: 50 is unchanged, 100 brightens to pure white",
	"aqua.background": "Backdrop",
	"aqua.backgroundFluid": "Fluid",
	"aqua.backgroundWallpaper": "Wallpaper",
	"aqua.wallpaper": "Wallpaper",
	"aqua.wallpaperHint": "Use light mode for light wallpapers, dark mode for dark wallpapers ⚠️",
	"aqua.chooseImage": "Choose image",
	"aqua.chooseVideo": "Choose video",
	"aqua.deleteWallpaper": "Delete",
	"aqua.wallpaperBlur": "Wallpaper blur",
	"aqua.wallpaperFrost": "Wallpaper frost",
	"aqua.videoBlur": "Video blur",
	"aqua.videoBrightness": "Video brightness",
	"aqua.videoHint": "⚠️ The video is dimmed automatically to keep text readable — adjust blur and brightness here; if it does not play after a reload, click \"Choose video\" once to restore access",
	"aqua.nav": "Seaglass",
	"aqua.sectionDisabled": "The theme is off — flip the switch above to restore the glass look",
	"aqua.fontGroup": "Fonts",
	"aqua.fontLatin": "English font",
	"aqua.fontCjk": "Chinese font",
	"aqua.fontDefault": "Default",
	"aqua.fontBuiltin": "Common",
	"aqua.fontSystemCjk": "System CJK",
	"aqua.fontSystemLatin": "System Latin",
	"aqua.fontHint": "Pick a font family; expanding a \"System\" group the first time asks the browser for access — the Common list above still works when denied"
};

//#endregion
//#region src/client/critters.ts
/**
* Ambient marine-life scene: the markup the layer injects behind the app
* frame — brand-fish silhouettes drifting, a shrimp or two crawling the
* bottom, rising bubbles, twinkling plankton. Positions, sizes, and
* per-critter timing ride inline styles; the motion itself lives in
* aqua.module.css (and silences under prefers-reduced-motion).
*/
/** The DeepSeek brand fish silhouette (exact figma extract, scaled down). */
const FISH_PATH = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 " + "22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973" + "C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 " + "16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 " + "0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 " + "5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 " + "16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 " + "3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 " + "12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 " + "8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575" + "C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 " + "7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 " + "15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 " + "16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 " + "6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 " + "23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 " + "12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396" + "C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 " + "12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332" + "C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 " + "10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 " + "15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338" + "C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 " + "8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988" + "ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 " + "9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 " + "13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 " + "11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834" + "C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 " + "9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";
/** A small shrimp: curved body, tail fan, two antenna strokes. (Retired — the
*  scene ships fish, bubbles, and plankton only.) */
/** One inline-svg critter. */
function svg(critter, viewBox, width, style, body) {
	return `<svg data-aqua-critter="${critter}" viewBox="${viewBox}" width="${width}" ` + `style="${style}" aria-hidden="true">${body}</svg>`;
}
function fish(style, width) {
	return svg("fish", "0 0 23.16 17.04", width, style, `<path d="${FISH_PATH}" fill="currentColor"/>`);
}
function fishLeft(style, width) {
	return svg("fish-left", "0 0 23.16 17.04", width, style, `<path d="${FISH_PATH}" fill="currentColor"/>`);
}
function bubble(style, size) {
	return svg("bubble", "0 0 8 8", size, style, "<circle cx=\"4\" cy=\"4\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/>");
}
function plankton(style) {
	return svg("plankton", "0 0 3 3", 3, style, "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\" fill=\"currentColor\"/>");
}
/**
* The complete ambient scene markup: one fixed, click-transparent container
* the layer prepends to <body> while enabled and removes on disable. The
* deepseek.com fluid shader canvas forms the board; marine life rides over it.
*/
const AMBIENT_SCENE = [
	"<canvas data-dsh-aqua-fluid-canvas></canvas>",
	fish("top:22%;left:58%;animation-duration:9s", 30),
	fishLeft("top:36%;left:10%;animation-duration:14s;animation-delay:-4s", 20),
	fish("top:64%;left:76%;animation-duration:19s;animation-delay:-9s;opacity:0.55", 14),
	bubble("bottom:8%;left:9%;animation-duration:8s", 7),
	bubble("bottom:5%;left:13%;animation-duration:10s;animation-delay:2.5s", 5),
	bubble("bottom:10%;left:17%;animation-duration:9s;animation-delay:5s", 6),
	bubble("bottom:9%;left:82%;animation-duration:11s;animation-delay:1.5s", 8),
	bubble("bottom:6%;left:87%;animation-duration:8s;animation-delay:4s", 5),
	plankton("top:14%;left:42%;animation-delay:-1s"),
	plankton("top:32%;left:70%;animation-delay:-3s"),
	plankton("top:72%;left:18%;animation-delay:-2s"),
	plankton("top:56%;left:86%;animation-delay:-4s")
].join("");
/** Build the ambient container element (or reuse an existing one). */
function ensureAmbientScene() {
	const existing = document.querySelector("[data-dsh-aqua-ambient]");
	if (existing !== null) return existing;
	const holder = document.createElement("div");
	holder.innerHTML = `<div data-dsh-aqua-ambient aria-hidden="true">${AMBIENT_SCENE}</div>`;
	const node = holder.firstElementChild;
	if (!(node instanceof HTMLElement)) throw new Error("ui-aqua: ambient scene markup failed to parse");
	document.body.prepend(node);
	if (document.querySelector("[data-dsh-aqua-wallpaper-layer]") === null) {
		const wallpaper = document.createElement("div");
		wallpaper.setAttribute("data-dsh-aqua-wallpaper", "");
		wallpaper.setAttribute("data-dsh-aqua-wallpaper-layer", "");
		wallpaper.setAttribute("aria-hidden", "true");
		wallpaper.innerHTML = "<img data-dsh-aqua-wallpaper-img alt=\"\">" + "<video data-dsh-aqua-wallpaper-video loop playsinline preload=\"auto\"></video>";
		document.body.prepend(wallpaper);
	}
	return node;
}
/** Remove the ambient container wherever it lives. */
function removeAmbientScene() {
	for (const node of document.querySelectorAll("[data-dsh-aqua-ambient]")) node.remove();
	for (const node of document.querySelectorAll("[data-dsh-aqua-wallpaper-layer]")) node.remove();
}
/** Add the page edge-fade bands (5px gradient blur over the chat content). */
function ensurePageFades() {
	if (document.querySelector("[data-dsh-aqua-fade]") !== null) return;
	const top = document.createElement("div");
	top.setAttribute("data-dsh-aqua-fade", "top");
	top.setAttribute("aria-hidden", "true");
	const bottom = document.createElement("div");
	bottom.setAttribute("data-dsh-aqua-fade", "bottom");
	bottom.setAttribute("aria-hidden", "true");
	document.body.appendChild(top);
	document.body.appendChild(bottom);
}
/** Remove the edge-fade bands. */
function removePageFades() {
	for (const el of document.querySelectorAll("[data-dsh-aqua-fade]")) el.remove();
}

//#endregion
//#region src/client/fluid-shader.ts
/** The exact default parameter set shipped by the site. */
const SITE_FLUID_PARAMS = {
	mouseRadius: .22,
	mouseStrength: 1.1,
	decay: .96,
	distortBoost: 1.35,
	noiseBoost: 0,
	swirlBoost: .45,
	speed: 14,
	distortion: 20,
	swirl: 12,
	swirlIterations: 8,
	scale: .5,
	rotation: -5,
	proportion: 50,
	softness: 100,
	shapeScale: 10,
	offsetX: 0,
	offsetY: 65,
	color1: "#8AA3D6",
	color2: "#FFFFFF",
	color3: "#FFFFFF"
};
const VERTEX_SHADER = `#version 300 es
in vec4 a_position;
out vec2 vUv;
void main() {
  vUv = a_position.xy * 0.5 + 0.5;
  gl_Position = a_position;
}
`;
const FLOW_SHADER = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform sampler2D u_prev;
uniform vec2 u_mouse;
uniform vec2 u_velocity;
uniform float u_brushRadius;
uniform float u_brushStrength;
uniform float u_decay;
out vec4 fragColor;

void main() {
  vec4 prev = texture(u_prev, vUv);

  prev.r *= u_decay;
  prev.gb = mix(vec2(0.5), prev.gb, u_decay);

  float dist = distance(vUv, u_mouse);

  float influence = exp(-dist * dist / (u_brushRadius * u_brushRadius * 0.5));
  influence = max(0.0, influence - 0.01);

  float speed = length(u_velocity);
  float presenceStrength = u_brushStrength * 0.3;
  float velBonus = min(speed * 3.0, 0.7) * u_brushStrength;
  float totalStrength = presenceStrength + velBonus;

  prev.r = max(prev.r, influence * totalStrength);
  float blendAmt = influence * min(totalStrength, 0.4) * 0.3;
  prev.g = mix(prev.g, clamp(u_velocity.x * 2.0 + 0.5, 0.0, 1.0), blendAmt);
  prev.b = mix(prev.b, clamp(u_velocity.y * 2.0 + 0.5, 0.0, 1.0), blendAmt);

  fragColor = prev;
}
`;
const DISPLAY_SHADER = `#version 300 es
precision mediump float;
in vec2 vUv;
uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;
uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1, u_color2, u_color3;
uniform float u_colorCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;
uniform vec2 u_offset;
uniform sampler2D u_flowmap;
uniform float u_distortBoost;
uniform float u_noiseBoost;
uniform float u_swirlBoost;
out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) { return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv; }
float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); }
float noise(vec2 st) {
  vec2 i = floor(st); vec2 f = fract(st);
  float a = random(i), b = random(i + vec2(1,0)), c = random(i + vec2(0,1)), d = random(i + vec2(1,1));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

vec3 blend_multi(float mixer, float softness) {
  float edge = 1.0 - softness;
  vec3 col = u_color1.rgb;
  if (u_colorCount > 1.5) { col = mix(col, u_color2.rgb, smoothstep(0.0 + 0.35*edge, 0.7 - 0.35*edge, mixer)); }
  if (u_colorCount > 2.5) { col = mix(col, u_color3.rgb, smoothstep(0.3 + 0.35*edge, 1.0 - 0.35*edge, mixer)); }
  return col;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = .5 * u_time;
  float ns = .0005 + .006 * u_scale;
  uv -= .5; uv *= (ns * u_resolution); uv = rotate(uv, u_rotation * .5 * PI);
  uv /= u_pixelRatio; uv += .5; uv += u_offset;

  vec2 fragUV = gl_FragCoord.xy / u_resolution.xy;
  vec4 flow = texture(u_flowmap, fragUV);
  float influence = flow.r;
  vec2 flowDir = (flow.gb - 0.5) * 2.0;

  float n1 = noise(uv + t), n2 = noise(uv*2. - t);
  float angle = n1 * TWO_PI;

  float totalDistortion = u_distortion + influence * u_distortBoost;
  uv.x += 4. * totalDistortion * n2 * cos(angle);
  uv.y += 4. * totalDistortion * n2 * sin(angle);

  uv += flowDir * influence * 0.15;

  if (influence > 0.001) {
    float localNoise = noise(uv * 2.0 + t * 1.5);
    uv += influence * u_noiseBoost * vec2(cos(localNoise * TWO_PI), sin(localNoise * TWO_PI));
  }

  float iters = ceil(clamp(u_swirlIterations, 1., 30.));
  float swirlAmt = clamp(u_swirl, 0., 2.) + influence * u_swirlBoost;
  for (float i = 1.; i <= 30.0; i++) {
    if (i > iters) break;
    uv.x += swirlAmt / i * cos(t + i*1.5*uv.y);
    uv.y += swirlAmt / i * cos(t + i*1.*uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);
  vec2 cuv = uv * (.5 + 3.5 * u_shapeScale);
  float shape = .5 + .5 * sin(cuv.x) * cos(cuv.y);
  float mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  vec3 col = blend_multi(mixer, clamp(u_softness, 0., 1.));
  fragColor = vec4(col, 1.0);
}
`;
function hexToRgb(value) {
	const hex = value.replace("#", "");
	return [
		parseInt(hex.slice(0, 2), 16) / 255,
		parseInt(hex.slice(2, 4), 16) / 255,
		parseInt(hex.slice(4, 6), 16) / 255
	];
}
/**
* Mount the fluid simulation on a canvas and run it until disposed.
* @param canvas - full-size canvas element (CSS-sized by the ambient layer).
* @param params - simulation parameters (site defaults are the natural input).
* @returns the live handle.
*/
function attachFluidShader(canvas, params) {
	const gl = canvas.getContext("webgl2", {
		alpha: true,
		premultipliedAlpha: false,
		powerPreference: "low-power"
	});
	if (gl === null) {
		return {
			setParams: () => {},
			stir: () => {},
			dispose: () => {}
		};
	}
	const compile = (type, source) => {
		const shader = gl.createShader(type);
		if (shader === null) return null;
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error("ui-aqua fluid shader:", gl.getShaderInfoLog(shader));
			return null;
		}
		return shader;
	};
	const link = (fragment) => {
		const vertex = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
		const frag = compile(gl.FRAGMENT_SHADER, fragment);
		if (vertex === null || frag === null) return null;
		const program = gl.createProgram();
		if (program === null) return null;
		gl.attachShader(program, vertex);
		gl.attachShader(program, frag);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error("ui-aqua fluid link:", gl.getProgramInfoLog(program));
			return null;
		}
		return program;
	};
	const flowProgram = link(FLOW_SHADER);
	const displayProgram = link(DISPLAY_SHADER);
	if (flowProgram === null || displayProgram === null) {
		return {
			setParams: () => {},
			stir: () => {},
			dispose: () => {}
		};
	}
	const flow = {
		prev: gl.getUniformLocation(flowProgram, "u_prev"),
		mouse: gl.getUniformLocation(flowProgram, "u_mouse"),
		velocity: gl.getUniformLocation(flowProgram, "u_velocity"),
		brushRadius: gl.getUniformLocation(flowProgram, "u_brushRadius"),
		brushStrength: gl.getUniformLocation(flowProgram, "u_brushStrength"),
		decay: gl.getUniformLocation(flowProgram, "u_decay")
	};
	const display = {
		time: gl.getUniformLocation(displayProgram, "u_time"),
		pixelRatio: gl.getUniformLocation(displayProgram, "u_pixelRatio"),
		resolution: gl.getUniformLocation(displayProgram, "u_resolution"),
		scale: gl.getUniformLocation(displayProgram, "u_scale"),
		rotation: gl.getUniformLocation(displayProgram, "u_rotation"),
		offset: gl.getUniformLocation(displayProgram, "u_offset"),
		color1: gl.getUniformLocation(displayProgram, "u_color1"),
		color2: gl.getUniformLocation(displayProgram, "u_color2"),
		color3: gl.getUniformLocation(displayProgram, "u_color3"),
		colorCount: gl.getUniformLocation(displayProgram, "u_colorCount"),
		proportion: gl.getUniformLocation(displayProgram, "u_proportion"),
		softness: gl.getUniformLocation(displayProgram, "u_softness"),
		shape: gl.getUniformLocation(displayProgram, "u_shape"),
		shapeScale: gl.getUniformLocation(displayProgram, "u_shapeScale"),
		distortion: gl.getUniformLocation(displayProgram, "u_distortion"),
		swirl: gl.getUniformLocation(displayProgram, "u_swirl"),
		swirlIterations: gl.getUniformLocation(displayProgram, "u_swirlIterations"),
		flowmap: gl.getUniformLocation(displayProgram, "u_flowmap"),
		distortBoost: gl.getUniformLocation(displayProgram, "u_distortBoost"),
		noiseBoost: gl.getUniformLocation(displayProgram, "u_noiseBoost"),
		swirlBoost: gl.getUniformLocation(displayProgram, "u_swirlBoost")
	};
	const quadBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		-1,
		-1,
		1,
		-1,
		-1,
		1,
		1,
		1
	]), gl.STATIC_DRAW);
	const bindQuad = (program) => {
		const position = gl.getAttribLocation(program, "a_position");
		gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
		gl.enableVertexAttribArray(position);
		gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
	};
	const makeTarget = (width, height, initial) => {
		const tex = gl.createTexture();
		if (tex === null) throw new Error("ui-aqua fluid: texture allocation failed");
		gl.bindTexture(gl.TEXTURE_2D, tex);
		if (initial !== undefined) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, initial);
		} else {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
		}
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		const fbo = gl.createFramebuffer();
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		return {
			fbo,
			tex
		};
	};
	let width = 0;
	let height = 0;
	let flowWidth = 0;
	let flowHeight = 0;
	let flip = false;
	let current = { ...params };
	const pointer = {
		x: .5,
		y: .5,
		smoothX: .5,
		smoothY: .5,
		vx: 0,
		vy: 0,
		svx: 0,
		svy: 0
	};
	const dprRatio = () => Math.min(window.devicePixelRatio || 1, 1.5);
	/** Viewport-space rect cache: the canvas is a fixed full-screen layer, so
	*  its client rect only changes with resize/resize-sync — pointer math
	*  must never touch layout on the per-event path. */
	let clientRect = canvas.getBoundingClientRect();
	const syncSize = () => {
		const ratio = dprRatio();
		const nextWidth = Math.round(canvas.clientWidth * ratio);
		const nextHeight = Math.round(canvas.clientHeight * ratio);
		if (nextWidth !== width || nextHeight !== height) {
			width = nextWidth;
			height = nextHeight;
			canvas.width = width;
			canvas.height = height;
		}
		clientRect = canvas.getBoundingClientRect();
	};
	syncSize();
	const sizeObserver = new ResizeObserver(syncSize);
	sizeObserver.observe(canvas);
	window.addEventListener("resize", syncSize, { passive: true });
	flowWidth = Math.max(1, Math.round(width / 4));
	flowHeight = Math.max(1, Math.round(height / 4));
	const initial = new Uint8Array(flowWidth * flowHeight * 4);
	for (let i = 0; i < flowWidth * flowHeight; i += 1) {
		initial[4 * i] = 0;
		initial[4 * i + 1] = 128;
		initial[4 * i + 2] = 128;
		initial[4 * i + 3] = 255;
	}
	let targetA = makeTarget(flowWidth, flowHeight, initial);
	let targetB = makeTarget(flowWidth, flowHeight, initial);
	const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
	const ua = navigator;
	const windows = ua.userAgentData ? ua.userAgentData.platform === "Windows" : navigator.userAgent.includes("Windows");
	const onMouseMove = (event) => {
		pointer.x = (event.clientX - clientRect.left) / clientRect.width;
		pointer.y = 1 - (event.clientY - clientRect.top) / clientRect.height;
	};
	if (!coarse && !windows) window.addEventListener("mousemove", onMouseMove);
	const start = performance.now();
	let raf = 0;
	let previous = 0;
	const step = 1e3 / 30;
	const frame = (now) => {
		raf = requestAnimationFrame(frame);
		if (now - previous < step) return;
		previous = now - (now - previous) % step;
		const p = current;
		const s = pointer;
		s.svx *= .94;
		s.svy *= .94;
		s.smoothX += (s.x - s.smoothX) * .12;
		s.smoothY += (s.y - s.smoothY) * .12;
		s.svx += ((s.x - s.smoothX) * .5 - s.svx) * .15;
		s.svy += ((s.y - s.smoothY) * .5 - s.svy) * .15;
		const read = flip ? targetA : targetB;
		const write = flip ? targetB : targetA;
		flip = !flip;
		gl.bindFramebuffer(gl.FRAMEBUFFER, write.fbo);
		gl.viewport(0, 0, flowWidth, flowHeight);
		gl.useProgram(flowProgram);
		bindQuad(flowProgram);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, read.tex);
		gl.uniform1i(flow.prev, 0);
		gl.uniform2f(flow.mouse, s.smoothX, s.smoothY);
		gl.uniform2f(flow.velocity, s.svx, s.svy);
		gl.uniform1f(flow.brushRadius, p.mouseRadius);
		gl.uniform1f(flow.brushStrength, p.mouseStrength);
		gl.uniform1f(flow.decay, p.decay);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.viewport(0, 0, width, height);
		gl.useProgram(displayProgram);
		bindQuad(displayProgram);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, write.tex);
		gl.uniform1i(display.flowmap, 0);
		const time = (performance.now() - start) * .001 * (p.speed / 100);
		gl.uniform1f(display.time, time);
		gl.uniform1f(display.pixelRatio, window.devicePixelRatio || 1);
		gl.uniform2f(display.resolution, width, height);
		gl.uniform1f(display.scale, p.scale);
		gl.uniform1f(display.rotation, p.rotation / 90);
		gl.uniform2f(display.offset, p.offsetX / 100, p.offsetY / 100);
		const c1 = hexToRgb(p.color1 || "#2E58A4");
		const c2 = hexToRgb(p.color2 || "#D2E2EE");
		const c3 = hexToRgb(p.color3 || "#FFFFFF");
		gl.uniform4f(display.color1, c1[0], c1[1], c1[2], 1);
		gl.uniform4f(display.color2, c2[0], c2[1], c2[2], 1);
		gl.uniform4f(display.color3, c3[0], c3[1], c3[2], 1);
		gl.uniform1f(display.colorCount, 3);
		gl.uniform1f(display.proportion, p.proportion / 100);
		gl.uniform1f(display.softness, p.softness / 100);
		gl.uniform1f(display.shape, 0);
		gl.uniform1f(display.shapeScale, p.shapeScale / 100);
		gl.uniform1f(display.distortion, p.distortion / 100);
		gl.uniform1f(display.swirl, p.swirl / 50);
		gl.uniform1f(display.swirlIterations, p.swirlIterations);
		gl.uniform1f(display.distortBoost, p.distortBoost);
		gl.uniform1f(display.noiseBoost, p.noiseBoost);
		gl.uniform1f(display.swirlBoost, p.swirlBoost);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	};
	const handle = {
		setParams: (next) => {
			current = { ...next };
		},
		stir: (x, y, vx, vy) => {
			pointer.x += (x - pointer.x) * .35;
			pointer.y += (y - pointer.y) * .35;
			pointer.svx += (vx - pointer.svx) * .3;
			pointer.svy += (vy - pointer.svy) * .3;
		},
		dispose: () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("resize", syncSize);
			sizeObserver.disconnect();
		}
	};
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		frame(performance.now());
		cancelAnimationFrame(raf);
		return handle;
	}
	raf = requestAnimationFrame(frame);
	return handle;
}

//#endregion
//#region src/client/fluid-tones.ts
/** hsl(h, s, l) → #rrggbb. */
function hsl(h, s, l) {
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(h / 60 % 2 - 1));
	const m = l - c / 2;
	let r = 0;
	let g = 0;
	let b = 0;
	if (h < 60) {
		r = c;
		g = x;
	} else if (h < 120) {
		r = x;
		g = c;
	} else if (h < 180) {
		g = c;
		b = x;
	} else if (h < 240) {
		g = x;
		b = c;
	} else if (h < 300) {
		r = x;
		b = c;
	} else {
		r = c;
		b = x;
	}
	const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
/** The slider's 0/360 lands on the blue base, sweeping clockwise around the
*  wheel — 320 lands on the cyan-blue the old hue-rotate system produced. */
const HUE_BASE = 217;
/**
* Palette for the given hue (0-360) and depth (0-100), per scheme.
* The depth ramp is piecewise: the lower half sweeps from the absolute
* extreme — pure black in dark mode, the deep saturated shade (e.g. #8B0000
* for red) in light mode — up to the shipped mid look; the upper half
* sweeps from mid to pale (#FFCCCB for red). Stepless HSL interpolation.
*/
function fluidToneColors(dark, hue, depth) {
	const h = ((hue + 217) % 360 + 360) % 360;
	const d = Math.min(1, Math.max(0, depth / 100));
	const ramp = (deep, mid, pale) => d < .5 ? deep + (mid - deep) * d / .5 : mid + (pale - mid) * (d - .5) / .5;
	if (dark) {
		return {
			color1: hsl(h, .85, ramp(0, .46, .62)),
			color2: hsl(h, .9, ramp(0, .305, .45)),
			color3: hsl(h, .5, ramp(0, .075, .1))
		};
	}
	return {
		color1: hsl(h, 1, ramp(.27, .45, .9)),
		color2: hsl(h, .55, .86),
		color3: hsl(h, .25, .955)
	};
}

//#endregion
//#region src/client/fluid-interactions.ts
/** Normalized shader-space coordinates for one canvas. */
function uv(canvas, clientX, clientY) {
	const rect = canvas.getBoundingClientRect();
	return {
		x: rect.width <= 0 ? .5 : (clientX - rect.left) / rect.width,
		y: rect.height <= 0 ? .5 : 1 - (clientY - rect.top) / rect.height
	};
}
/**
* Attach the button ripple listeners.
* @param targets - the fluid handle and its canvas.
* @returns disposer removing every listener.
*/
function attachFluidInteractions(targets) {
	const { main, mainCanvas } = targets;
	const lastStir = new WeakMap();
	const ripples = new Set();
	const stirButton = (button, strength) => {
		const now = performance.now();
		const previous = lastStir.get(button) ?? 0;
		if (now - previous < 160) return;
		lastStir.set(button, now);
		const rect = button.getBoundingClientRect();
		const point = uv(mainCanvas, rect.left + rect.width / 2, rect.top + rect.height / 2);
		main.stir(point.x, point.y, 0, -strength);
	};
	/** Slow radial ripple: a ring of gentle outward stirs expanding from the
	*  click point. Radius eases from zero so the influence creeps outward. */
	const ripple = (cx, cy) => {
		const rect = mainCanvas.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return;
		const ux = (cx - rect.left) / rect.width;
		const uy = 1 - (cy - rect.top) / rect.height;
		const start = performance.now();
		const duration = 1500;
		const maxRadius = 120;
		const count = 8;
		const step = () => {
			const t = performance.now() - start;
			if (t > duration) return;
			const k = t / duration;
			const radius = maxRadius * k * k;
			const strength = .05 * (1 - k);
			const spin = .4 * k;
			for (let i = 0; i < count; i += 1) {
				const angle = i / count * Math.PI * 2 + spin;
				const px = ux + radius * Math.cos(angle) / rect.width;
				const py = uy + radius * Math.sin(angle) / rect.height;
				main.stir(px, py, Math.cos(angle) * strength, -Math.sin(angle) * strength);
			}
			const id = requestAnimationFrame(step);
			ripples.add(id);
		};
		const id = requestAnimationFrame(step);
		ripples.add(id);
	};
	const onPointerOver = (event) => {
		const button = event.target?.closest?.("button");
		if (button !== undefined && button !== null) stirButton(button, .04);
	};
	const onClick = (event) => {
		const button = event.target?.closest?.("button");
		if (button === undefined || button === null) return;
		const now = performance.now();
		const previous = lastStir.get(button) ?? 0;
		if (now - previous < 500) return;
		lastStir.set(button, now);
		const rect = button.getBoundingClientRect();
		ripple(rect.left + rect.width / 2, rect.top + rect.height / 2);
	};
	document.addEventListener("pointerover", onPointerOver, { capture: true });
	document.addEventListener("click", onClick, { capture: true });
	return () => {
		for (const id of ripples) cancelAnimationFrame(id);
		ripples.clear();
		document.removeEventListener("pointerover", onPointerOver, { capture: true });
		document.removeEventListener("click", onClick, { capture: true });
	};
}

//#endregion
//#region src/client/spot-core.ts
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
const SPOT_ATTR = "data-dsh-aqua-spot";
/** Attribute on the injected glow overlay div. */
const GLOW_ATTR = "data-dsh-aqua-glow";
/** Marker set on a pane while the pointer is inside it. */
const ON_ATTR = "data-spot-on";
/** Selector matching every stamped pane. */
const SPOT_SELECTOR = `[${SPOT_ATTR}]`;
/** Nearest stamped pane from an event target (null when outside all panes). */
function closestSpot(target) {
	return target instanceof Element ? target.closest(SPOT_SELECTOR) : null;
}
/** Cached spot list. The seam stamper invalidates it whenever it (re)writes
*  a spot attribute, so consumers (the overlay keeper's per-change passes,
*  the spotlight disposer) share one document-wide query instead of several.
*  A disconnected spot still forces a re-query — the cache never serves
*  dead nodes. */
let spotCache = null;
/** Drop the shared spot cache (the seam stamper calls this after touching
*  any spot attribute; a full re-query happens on the next spotElements). */
function invalidateSpotCache$1() {
	spotCache = null;
}
/** Every stamped pane in document order. */
function spotElements() {
	if (spotCache === null || spotCache.some((el) => !el.isConnected)) {
		spotCache = Array.from(document.querySelectorAll(SPOT_SELECTOR));
	}
	return spotCache;
}
/**
* Visible ANCHORED popovers (command lists, menus) mounted inside a spot.
* While open they are part of the pane's glass — the app anchors them to the
* composer INSIDE the pane, so the hover geometry extends over them and the
* tilt stays live while the pointer is on the list (the popover rides the
* tilted pane coherently). Fixed ones are NOT part of the pane: they anchor
* to the viewport and glide the tilt home instead (spotlight.ts).
*/
function popoverGlassSurfaces(spot) {
	return Array.from(spot.querySelectorAll("[role='menu'], [role='listbox'], [role='dialog']")).filter((el) => {
		const cs = getComputedStyle(el);
		return cs.display !== "none" && cs.visibility !== "hidden" && cs.position !== "fixed";
	});
}
/**
* The visible glass region of a pane (viewport rect). The fused
* composer+stats spot is the wider invisible inputbar wrapper — its glass is
* the union of the composer card, the docked stats band, and any mounted
* anchored popover (the open command list above the card), so the wrapper's
* side gutters stay outside every effect.
*/
function visualRect(spot) {
	if (spot.querySelector("[data-composer-card]") !== null) {
		const card = spot.querySelector("[data-composer-card]");
		const r0 = card.getBoundingClientRect();
		let left = r0.left;
		let top = r0.top;
		let right = r0.right;
		let bottom = r0.bottom;
		const stats = spot.querySelector("[data-dsh-stats]");
		if (stats !== null) {
			const r1 = stats.getBoundingClientRect();
			left = Math.min(left, r1.left);
			top = Math.min(top, r1.top);
			right = Math.max(right, r1.right);
			bottom = Math.max(bottom, r1.bottom);
		}
		for (const pop of popoverGlassSurfaces(spot)) {
			const r2 = pop.getBoundingClientRect();
			left = Math.min(left, r2.left);
			top = Math.min(top, r2.top);
			right = Math.max(right, r2.right);
			bottom = Math.max(bottom, r2.bottom);
		}
		return new DOMRect(left, top, right - left, bottom - top);
	}
	return spot.getBoundingClientRect();
}
/** Is the pointer over the visible glass of the pane? */
function inside(visual, clientX, clientY) {
	return clientX >= visual.left && clientX <= visual.right && clientY >= visual.top && clientY <= visual.bottom;
}
/** Offset-chain position of `el` within `ancestor` (both boxes), in the
*  UNTRANSFORMED layout space — offsetLeft/offsetTop ignore transforms, so
*  this stays exact while the pane is tilted. */
function localTopLeft(el, ancestor) {
	let x = 0;
	let y = 0;
	let node = el;
	while (node !== null && node !== ancestor) {
		x += node.offsetLeft;
		y += node.offsetTop;
		node = node.offsetParent;
	}
	return {
		x,
		y
	};
}
/**
* The visible glass region of a pane in the pane's own local space
* (untransformed — safe to measure while tilted). For the fused
* composer+stats spot this is the union of the composer card, the docked
* stats band, and any mounted anchored popover; for the other panes it is
* the pane's own box.
*/
function glassLocalRect(spot) {
	const card = spot.querySelector("[data-composer-card]");
	if (card === null) {
		return {
			left: 0,
			top: 0,
			width: spot.offsetWidth,
			height: spot.offsetHeight
		};
	}
	const cardPos = localTopLeft(card, spot);
	let left = cardPos.x;
	let top = cardPos.y;
	let right = left + card.offsetWidth;
	let bottom = top + card.offsetHeight;
	const stats = spot.querySelector("[data-dsh-stats]");
	if (stats !== null) {
		const statsPos = localTopLeft(stats, spot);
		left = Math.min(left, statsPos.x);
		top = Math.min(top, statsPos.y);
		right = Math.max(right, statsPos.x + stats.offsetWidth);
		bottom = Math.max(bottom, statsPos.y + stats.offsetHeight);
	}
	for (const pop of popoverGlassSurfaces(spot)) {
		const popPos = localTopLeft(pop, spot);
		left = Math.min(left, popPos.x);
		top = Math.min(top, popPos.y);
		right = Math.max(right, popPos.x + pop.offsetWidth);
		bottom = Math.max(bottom, popPos.y + pop.offsetHeight);
	}
	return {
		left,
		top,
		width: right - left,
		height: bottom - top
	};
}
/** Ensure the pane carries exactly one glow overlay div. */
function ensureGlow(spot) {
	let glow = spot.querySelector(`:scope > [${GLOW_ATTR}]`);
	if (glow === null) {
		glow = document.createElement("div");
		glow.setAttribute(GLOW_ATTR, "");
		glow.setAttribute("aria-hidden", "true");
		spot.appendChild(glow);
	}
	return glow;
}
/**
* One shared observer + resize feed: keeps the glow divs glued to the panes
* through React re-renders and notifies the caller of DOM/layout changes
* (the caller coalesces the callbacks).
* @returns a disposer that removes every injected glow div.
*/
function startOverlayKeeper(onChange) {
	let scheduled = false;
	let disposed = false;
	const tick = () => {
		if (scheduled || disposed) return;
		scheduled = true;
		requestAnimationFrame(() => {
			scheduled = false;
			if (disposed) return;
			for (const spot of spotElements()) ensureGlow(spot);
			onChange();
		});
	};
	tick();
	const observer = new MutationObserver(tick);
	observer.observe(document.documentElement, {
		childList: true,
		subtree: true
	});
	window.addEventListener("resize", tick, { passive: true });
	return () => {
		disposed = true;
		observer.disconnect();
		window.removeEventListener("resize", tick);
		for (const glow of document.querySelectorAll(`[${GLOW_ATTR}]`)) glow.remove();
	};
}

//#endregion
//#region src/client/bubble-anchor.ts
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
/** Panels whose bubbles this controller owns: every tilt spot. The spot set
*  is the superset of the surfaces that host interactive controls (sidebar,
*  header, inputbar, trajectory, plugin-view cards), so new spots — e.g. a
*  plugin view's card panes — pin their bubbles automatically. */
const PANEL_SELECTOR = SPOT_SELECTOR;
/** The app's viewport clamp margin, px (Fd's H). */
const VIEWPORT_MARGIN = 12;
/** Gap between the trigger's right edge and a side="right" bubble, px. */
const RIGHT_GAP = 10;
/** Gap between the trigger and a top/bottom bubble, px (Fd's constant). */
const EDGE_GAP = 8;
/** Mounted hook the tilt controller invokes after transform writes. */
let notifyPin;
/** Synchronous re-pin of every panel bubble — the tilt controller calls
*  this right after writing a pane's transform (no-op while unmounted). */
function repinPanelBubbles() {
	notifyPin?.();
}
/**
* Start the pinning controller.
* @returns a disposer that stops every feed and drops the written pins.
*/
function startBubbleAnchor() {
	let raf = 0;
	/** Whether the pointer is currently inside a tilt panel. */
	let insidePanel = false;
	/** Fd mounts `[clonedChild, bubble]` consecutively: the trigger is the
	*  bubble's previous element sibling (skipping stray tooltip siblings).
	*  Falls back to the single-non-bubble-child scan for portals that place
	*  the bubble elsewhere. */
	const triggerOf = (bubble) => {
		let prev = bubble.previousElementSibling;
		while (prev !== null && prev.getAttribute("role") === "tooltip") {
			prev = prev.previousElementSibling;
		}
		if (prev !== null) return prev;
		const parent = bubble.parentElement;
		if (parent === null) return null;
		let anchor = null;
		for (const child of parent.children) {
			if (child === bubble || child.getAttribute("role") === "tooltip") continue;
			if (anchor !== null) return null;
			anchor = child;
		}
		return anchor;
	};
	/** Pin one bubble at its trigger's intended viewport spot (idempotent —
	*  each call re-measures and only cancels the residual error). The
	*  correction is written into the inline `left/top` — NOT the translate
	*  property: a translate moves the painted box but the layout box stays
	*  wherever the poisoned inline coords put it (hundreds of px below the
	*  pane), and a clipped scrollable overflow still counts it — the residual
	*  +51px scrollbar jump. Rewritten coords put the LAYOUT box itself inside
	*  (or above) the pane, so no scroll region is ever inflated. */
	const pinBubble = (bubble) => {
		if (bubble.style.transition !== "none") bubble.style.transition = "none";
		if (bubble.style.translate !== "") bubble.style.translate = "";
		const anchor = triggerOf(bubble);
		const ar = anchor?.getBoundingClientRect();
		if (ar === undefined || ar.width === 0 && ar.height === 0) {
			return;
		}
		const br = bubble.getBoundingClientRect();
		const side = bubble.getAttribute("data-side") ?? "top";
		let dx = 0;
		let dy = 0;
		if (side === "right") {
			dx = ar.right + RIGHT_GAP - br.left;
			dy = ar.top + ar.height / 2 - (br.top + br.height / 2);
		} else if (side === "bottom") {
			dx = ar.left + ar.width / 2 - (br.left + br.width / 2);
			dy = ar.bottom + EDGE_GAP - br.top;
		} else {
			dx = ar.left + ar.width / 2 - (br.left + br.width / 2);
			dy = ar.top - EDGE_GAP - br.bottom;
		}
		const vw = window.innerWidth;
		if (br.right + dx > vw - VIEWPORT_MARGIN) dx = vw - VIEWPORT_MARGIN - br.right;
		if (br.left + dx < VIEWPORT_MARGIN) dx = VIEWPORT_MARGIN - br.left;
		const curLeft = Number.parseFloat(bubble.style.left);
		const curTop = Number.parseFloat(bubble.style.top);
		if (!Number.isFinite(curLeft) || !Number.isFinite(curTop)) return;
		const nextLeft = `${curLeft + dx}px`;
		const nextTop = `${curTop + dy}px`;
		if (bubble.style.left !== nextLeft) bubble.style.left = nextLeft;
		if (bubble.style.top !== nextTop) bubble.style.top = nextTop;
	};
	const step = () => {
		raf = 0;
		const bubble = document.querySelector("[role=\"tooltip\"]");
		const panel = bubble !== null && bubble.isConnected ? bubble.closest(PANEL_SELECTOR) : null;
		if (bubble === null || panel === null) {
			if (insidePanel) raf = requestAnimationFrame(step);
			return;
		}
		pinBubble(bubble);
		raf = requestAnimationFrame(step);
	};
	/** Re-pin every panel bubble SYNCHRONOUSLY. The tilt controller calls
	*  this right after writing a pane's transform: a transform write re-
	*  anchors mounted bubbles into the pane's coordinate space mid-frame,
	*  and waiting for the next rAF would let exactly one poisoned frame
	*  reach layout+paint (the one-frame scrollbar jump). Same-task re-pinning
	*  keeps the layout this frame paints already correct. */
	const pinPanelBubbles = () => {
		for (const bubble of document.querySelectorAll("[role=\"tooltip\"]")) {
			if (bubble.closest(PANEL_SELECTOR) !== null) pinBubble(bubble);
		}
	};
	/** Mount-time pin: the observer callback runs as a microtask AFTER the
	*  app's commit but BEFORE the browser paints, so the bubble's first
	*  rendered frame is already pinned — no poisoned frame is ever painted
	*  and the phantom scrollable overflow never exists. */
	const mountObserver = new MutationObserver((records) => {
		for (const record of records) {
			for (const node of record.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;
				if (node.getAttribute("role") === "tooltip") {
					if (node.closest(PANEL_SELECTOR) !== null) pinBubble(node);
					continue;
				}
				for (const bubble of node.querySelectorAll("[role=\"tooltip\"]")) {
					if (bubble.closest(PANEL_SELECTOR) !== null) pinBubble(bubble);
				}
			}
		}
	});
	const insidePanelOf = (target) => {
		return target !== null && target.closest(PANEL_SELECTOR) !== null;
	};
	const onOver = (event) => {
		insidePanel = insidePanelOf(event.target instanceof Element ? event.target : null);
		if (insidePanel && raf === 0) step();
	};
	const onOut = (event) => {
		insidePanel = insidePanelOf(event.relatedTarget instanceof Element ? event.relatedTarget : null);
		if (insidePanel || raf === 0) return;
		const bubble = document.querySelector("[role=\"tooltip\"]");
		if (bubble === null || bubble.closest(PANEL_SELECTOR) === null) {
			cancelAnimationFrame(raf);
			raf = 0;
		}
	};
	document.addEventListener("pointerover", onOver, {
		capture: true,
		passive: true
	});
	document.addEventListener("pointerout", onOut, {
		capture: true,
		passive: true
	});
	mountObserver.observe(document.documentElement, {
		childList: true,
		subtree: true
	});
	notifyPin = pinPanelBubbles;
	return () => {
		mountObserver.disconnect();
		if (raf !== 0) cancelAnimationFrame(raf);
		raf = 0;
		document.removeEventListener("pointerover", onOver, { capture: true });
		document.removeEventListener("pointerout", onOut, { capture: true });
		for (const bubble of document.querySelectorAll("[role=\"tooltip\"]")) {
			if (bubble.closest(PANEL_SELECTOR) !== null) {
				bubble.style.removeProperty("translate");
				bubble.style.removeProperty("transition");
			}
		}
	};
}

//#endregion
//#region src/client/seam-stamper.ts
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
const SEAMS = [
	{
		attribute: "data-dsh-frame",
		selector: ":has(> [class*=\"sidebarCol\"])",
		probe: "[class*=\"sidebarCol\"]"
	},
	{
		attribute: "data-dsh-sidebar-root",
		selector: "[class*=\"sidebarCol\"] [class*=\"root\"]",
		first: true
	},
	{
		attribute: "data-dsh-surface",
		selector: "button[class*=\"newSession\"]"
	},
	{
		attribute: "data-dsh-trajectory",
		selector: "[data-conversation-composer-overlay]"
	},
	{
		attribute: "data-dsh-details",
		selector: "[class*=\"detailsCol\"] [class*=\"root\"]",
		first: true
	},
	{
		attribute: "data-dsh-inputbar",
		selector: ":has(> [data-composer-card])",
		probe: "[data-composer-card]"
	},
	{
		attribute: "data-dsh-add",
		selector: "[data-composer-card] [class*=\"add\"]"
	},
	{
		attribute: "data-dsh-stats",
		selector: "[data-slot=\"conversation.composer.dock\"] [class*=\"root\"]"
	},
	{
		attribute: "data-dsh-aqua-spot",
		selector: "header",
		first: true
	},
	{
		attribute: "data-dsh-aqua-spot",
		selector: "[class*=\"sidebarCol\"]",
		first: true
	},
	{
		attribute: "data-dsh-aqua-spot",
		selector: "[data-dsh-inputbar]"
	},
	{
		attribute: "data-dsh-aqua-spot",
		selector: "[data-dsh-trajectory]"
	},
	{
		attribute: "data-dsh-aqua-spot",
		selector: "[data-dsh-surface]"
	},
	{
		attribute: "data-dsh-wordmark",
		selector: "[class*=\"sidebarCol\"] [class*=\"brand\"]",
		first: true
	}
];
/** Cached matches per seam. The seam elements are app-shell nodes that stay
*  connected for the app's lifetime, so most stamp passes re-validate the
*  cache instead of re-running the queries. The full query set measured
*  ~7.7ms per DOM-change frame on a long session (3.2k nodes) — streamed
*  tokens pay it EVERY frame, and it scales with the message history: this
*  is exactly why a long conversation turns sluggish while a fresh one is
*  fluid. Re-queried only when a cached element disconnected or an inserted
*  subtree could have introduced a match (cheap per-insert probe), plus a
*  periodic full re-query as the catch-all. */
const seamCache = new Map();
function querySeam(seam) {
	if (seam.first) {
		const el = document.querySelector(seam.selector);
		return el === null ? [] : [el];
	}
	return Array.from(document.querySelectorAll(seam.selector));
}
/** Stamp one seam against its cache. @returns true when the stamped set may
*  have changed (re-query or an attribute write) — the spot cache feeds off
*  this. */
function stampSeam(seam, added) {
	let els = seamCache.get(seam);
	if (els === undefined || added === null) {
		els = querySeam(seam);
		seamCache.set(seam, els);
	} else {
		const probe = seam.probe ?? seam.selector;
		const stale = els.some((el) => !el.isConnected) || added.some((root) => root.matches(probe) || root.querySelector(probe) !== null);
		if (stale) {
			els = querySeam(seam);
			seamCache.set(seam, els);
		}
	}
	let touched = false;
	for (const el of els) {
		if (!el.hasAttribute(seam.attribute)) {
			el.setAttribute(seam.attribute, "");
			touched = true;
		}
	}
	return touched;
}
function stampAll(added = null) {
	let spotsTouched = false;
	for (const seam of SEAMS) {
		if (stampSeam(seam, added) && seam.attribute === "data-dsh-aqua-spot") spotsTouched = true;
	}
	if (stampPluginViews(added === null)) spotsTouched = true;
	if (spotsTouched) invalidateSpotCache();
	document.documentElement.toggleAttribute("data-dsh-dialog-open", document.querySelector("[role=\"dialog\"]") !== null);
	document.documentElement.toggleAttribute("data-dsh-sidebar-bubble", document.querySelector("[class*=\"sidebarCol\"] [role=\"tooltip\"]") !== null);
	let popoverLive = false;
	for (const el of document.querySelectorAll("[role=\"menu\"], [role=\"dialog\"], [role=\"listbox\"]")) {
		const cs = getComputedStyle(el);
		if (cs.display === "none" || cs.visibility === "hidden") continue;
		popoverLive = true;
		stampPopoverShell(el, cs);
	}
	document.documentElement.toggleAttribute("data-dsh-popover-live", popoverLive);
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
function stampPopoverShell(el, cs) {
	if (cs.position === "fixed") return;
	const shell = el.parentElement;
	if (shell === null || shell === document.body || shell.hasAttribute("data-dsh-popover-shell") || shell.hasAttribute("data-dsh-aqua-spot") || shell.matches("header, [data-dsh-inputbar], [data-dsh-trajectory], [class*=\"sidebarCol\"]")) return;
	const ps = getComputedStyle(shell);
	if (ps.display === "none") return;
	if (ps.backgroundColor === "rgba(0, 0, 0, 0)" || ps.backgroundColor === "transparent") return;
	shell.setAttribute("data-dsh-popover-shell", "");
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
/** View roots already identified as the chat. The chat marker set only
*  GROWS within one root element's lifetime (nodes mount progressively into
*  it), so a root that once detected as chat stays chat — re-running the
*  detection query every stamp pass is pure waste on a long session. Full
*  passes skip the memo: a root REUSED by React for a different view (same
*  div, swapped children) gets re-judged within one catch-all period. */
const chatViewRoots = new WeakSet();
function stampPluginViews(full) {
	let touched = false;
	for (const root of document.querySelectorAll("[data-slot=\"conversation.view\"] > *")) {
		const isChat = !full && chatViewRoots.has(root) || root.querySelector("[data-slot^='conversation.chat'], [data-slot^='tool.call'], [data-composer-card], [data-dsh-inputbar]") !== null;
		if (isChat) chatViewRoots.add(root);
		if (isChat) {
			if (root.hasAttribute("data-dsh-view")) {
				root.removeAttribute("data-dsh-view");
				touched = true;
			}
			if (root.hasAttribute("data-dsh-aqua-spot")) {
				root.removeAttribute(SPOT_ATTR);
				touched = true;
			}
			continue;
		}
		if (!root.hasAttribute("data-dsh-view")) {
			root.setAttribute("data-dsh-view", "");
			touched = true;
		}
		let spotted = false;
		for (const card of root.querySelectorAll("[class*='card'], [class*='Card']")) {
			if (card.matches("ul, [class*=\"cards\"]") || card.closest("[" + "data-dsh-aqua-spot" + "]") !== null) continue;
			if (card.hasAttribute("data-dsh-aqua-spot")) {
				spotted = true;
				continue;
			}
			card.setAttribute(SPOT_ATTR, "");
			spotted = true;
			touched = true;
		}
		if (!spotted && !root.hasAttribute("data-dsh-aqua-spot")) {
			root.setAttribute(SPOT_ATTR, "");
			touched = true;
		}
	}
	return touched;
}
/**
* Stamp the seams once, then keep them stamped as React remounts nodes.
* @returns a disposer that disconnects the observer.
*/
function startSeamStamper() {
	stampAll(null);
	let scheduled = 0;
	let disposed = false;
	let pendingAdded = null;
	const observer = new MutationObserver((records) => {
		if (disposed) return;
		for (const record of records) {
			for (const node of record.addedNodes) {
				if (node instanceof Element && node.isConnected) {
					(pendingAdded ??= []).push(node);
				}
			}
		}
		if (scheduled !== 0) return;
		scheduled = requestAnimationFrame(() => {
			scheduled = 0;
			if (disposed) return;
			const added = pendingAdded;
			pendingAdded = null;
			stampAll(added);
		});
	});
	observer.observe(document.documentElement, {
		childList: true,
		subtree: true
	});
	const catchAll = window.setInterval(() => {
		if (!disposed) stampAll(null);
	}, 800);
	return () => {
		disposed = true;
		if (scheduled !== 0) cancelAnimationFrame(scheduled);
		scheduled = 0;
		window.clearInterval(catchAll);
		observer.disconnect();
	};
}

//#endregion
//#region src/client/whale.ts
/**
* Particle whale: the deepseek.com/harness hero's centerpiece fish rendered
* as particles — a faithful 2D port of the site's `HeroDigitileR3F` (chunk
* 776) minus three.js. The 24×18 brand-fish SVG is sampled onto a 60×60
* luminance grid, the particles scatter, then assemble into the silhouette
* with the site's drift / tail-sway / light-shading / pointer-push math.
* Additive canvas blending + `mix-blend-mode: screen` (as on the site).
*/
const WHALE_SVG = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746V14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z" fill="#FFFFFF"/>
</svg>`;
/** Sampling grid side (the site uses 60). */
const GRID = 60;
/** World units per grid cell (the site: (n - 30) * 0.18). */
const UNIT = .18;
/** Fixed light position (the whale's lightParams: x/y/z with followX). */
const LIGHT_X = 4.5;
const LIGHT_Y = 5.5;
const LIGHT_RANGE = 14;
const SHADE_MIN = .2;
/** Site: shadeMax: 0.4 * P.shadeMax where P.shadeMax = 2.79. */
const SHADE_MAX = .4 * 2.79;
const FOLLOW_X = 1.05;
const LOOSE = 1;
/** Mouse params (DIGITILE_MOUSE_DEFAULTS). */
const MOUSE_RADIUS = 4.9;
const MOUSE_STRENGTH = .8;
const MOUSE_DECAY = .2;
const MOUSE_DISTORT = 5;
/** Render cadence, matching the site's FPS prop. */
const FPS$1 = 30;
/** Camera viewport height in world units (z 18, fov 50). */
const WORLD_H = 2 * 18 * Math.tan(50 * Math.PI / 360);
/** Cheap per-particle hash noise in [-0.5, 0.5] (site's fract(sin) jitter). */
function hash(n) {
	const s = Math.sin(n * 12.9898) * 43758.5453;
	return s - Math.floor(s) - .5;
}
/**
* Mount the particle whale into `host` (the ambient scene) and start the
* engine. The wrapper is centered on the MAIN column — the `[data-phase]`
* conversation area, i.e. everything right of the sidebar — not the whole
* viewport.
* @param host - the container the whale wrapper is appended to.
* @param dark - resolved scheme at mount (white particles on dark, gray on light).
* @returns the handle.
*/
function mountWhale(host, dark) {
	const holder = document.createElement("div");
	holder.setAttribute("data-dsh-aqua-whale", "");
	holder.setAttribute("data-scheme", dark ? "dark" : "light");
	const canvas = document.createElement("canvas");
	canvas.setAttribute("aria-hidden", "true");
	holder.appendChild(canvas);
	host.appendChild(holder);
	const ctx = canvas.getContext("2d");
	if (ctx === null) {
		holder.remove();
		return {
			setDark: () => {},
			dispose: () => {}
		};
	}
	const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
	const particles = [];
	let raf = 0;
	let disposed = false;
	let startedAt = performance.now();
	let darkMode = dark;
	let mouseWorld = {
		x: 0,
		y: 0
	};
	let dpr = 1;
	let scale = 1;
	let width = 0;
	let height = 0;
	/** Center the wrapper on the main column (viewports minus the sidebar). */
	const positionHost = () => {
		const phase = document.querySelector("[data-phase]");
		const rect = phase?.getBoundingClientRect();
		const r = rect !== undefined && rect.width > 0 ? rect : {
			left: 0,
			top: 0,
			width: window.innerWidth,
			height: window.innerHeight
		};
		const size = Math.round(Math.max(220, Math.min(660, window.innerHeight * .76, r.width * .8)));
		const left = Math.round(r.left + r.width / 2);
		const top = Math.round(r.top + r.height / 2);
		if (holder.style.width !== `${size}px`) holder.style.width = `${size}px`;
		if (holder.style.height !== `${size}px`) holder.style.height = `${size}px`;
		if (holder.style.left !== `${left}px`) holder.style.left = `${left}px`;
		if (holder.style.top !== `${top}px`) holder.style.top = `${top}px`;
	};
	/** Keep the canvas backing store in step with the holder box. */
	const resize = () => {
		positionHost();
		const rect = holder.getBoundingClientRect();
		holderRect = rect;
		width = Math.max(1, rect.width);
		height = Math.max(1, rect.height);
		dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		canvas.width = Math.max(1, Math.round(width * dpr));
		canvas.height = Math.max(1, Math.round(height * dpr));
		scale = height / WORLD_H;
	};
	/** Sample the fish SVG onto the 60×60 grid and build the particle set. */
	const sample = (img) => {
		const off = document.createElement("canvas");
		off.width = GRID;
		off.height = GRID;
		const octx = off.getContext("2d");
		if (octx === null) return;
		octx.fillStyle = "#000";
		octx.fillRect(0, 0, GRID, GRID);
		const fit = Math.min(GRID / img.width, GRID / img.height);
		const w = img.width * fit;
		const h = img.height * fit;
		octx.drawImage(img, (GRID - w) / 2, (GRID - h) / 2, w, h);
		const data = octx.getImageData(0, 0, GRID, GRID).data;
		const lum = new Float32Array(GRID * GRID);
		for (let i = 0; i < GRID * GRID; i++) {
			lum[i] = (.299 * data[4 * i] + .587 * data[4 * i + 1] + .114 * data[4 * i + 2]) / 255;
		}
		const hasBrightNeighbor = (x, y) => {
			for (let dy = -2; dy <= 2; dy++) {
				for (let dx = -2; dx <= 2; dx++) {
					if (dx === 0 && dy === 0) continue;
					const nx = x + dx;
					const ny = y + dy;
					if (nx < 0 || ny < 0 || nx >= GRID || ny >= GRID) continue;
					if (lum[ny * GRID + nx] > .2) return true;
				}
			}
			return false;
		};
		for (let e = 0; e < GRID; e++) {
			for (let n = 0; n < GRID; n++) {
				const a = lum[e * GRID + n];
				if (a <= .2 || !hasBrightNeighbor(n, e)) continue;
				const x = (n - GRID / 2) * UNIT;
				const y = (GRID / 2 - e) * UNIT;
				let edge = 0;
				for (let dy = -1; dy <= 1; dy++) {
					for (let dx = -1; dx <= 1; dx++) {
						if (dx === 0 && dy === 0) continue;
						const nx = n + dx;
						const ny = e + dy;
						if (nx < 0 || ny < 0 || nx >= GRID || ny >= GRID || lum[ny * GRID + nx] <= .2) edge++;
					}
				}
				const phi = Math.random() * Math.PI * 2;
				const theta = Math.acos(2 * Math.random() - 1);
				const rad = 3 * (.4 + .6 * Math.random());
				particles.push({
					x,
					y,
					opacity: a,
					edge: edge / 8,
					sx: Math.sin(theta) * Math.cos(phi) * rad,
					sy: Math.sin(theta) * Math.sin(phi) * rad,
					sz: Math.cos(theta) * rad * .5
				});
			}
		}
	};
	/** Draw one frame at the given assembly progress (0..1). */
	const draw = (assembly, time) => {
		if (width === 0 || height === 0) resize();
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, width, height);
		ctx.globalCompositeOperation = "lighter";
		const targetX = mouseWorld.x;
		const targetY = mouseWorld.y;
		const lightX = LIGHT_X + targetX * FOLLOW_X;
		const lightY = LIGHT_Y;
		const mouseRadius = MOUSE_RADIUS;
		const strength = MOUSE_STRENGTH;
		const size = Math.max(1.1, .06 * scale * dpr);
		const breathe = .15 * Math.sin(.4 * time);
		for (let i = 0; i < particles.length; i++) {
			const p = particles[i];
			const loose = LOOSE * (.25 + .75 * p.edge) * assembly;
			let px = p.x + hash(i) * .05 * loose;
			let py = p.y + hash(i * 1.37 + 7) * .05 * loose;
			px += Math.sin(time * .5 + i * .53) * .06 * loose;
			py += Math.cos(time * .42 + i * .71) * .06 * loose;
			const tail = smoothstep(.5, 4.5, p.x) * LOOSE * assembly;
			py += Math.sin(time * 1.1 - p.x * .7) * .1 * tail;
			px += Math.cos(time * .9 - p.x * .55) * .06 * tail;
			px = p.sx + (px - p.sx) * assembly;
			py = p.sy + (py - p.sy) * assembly;
			if (assembly > .8) {
				const mouseEffect = (assembly - .8) * 5;
				const mx = px - targetX;
				const my = py - targetY;
				const dist = Math.sqrt(mx * mx + my * my);
				if (dist < mouseRadius && dist > .001) {
					const t = 1 - dist / mouseRadius;
					const force = t * t * t * mouseEffect * strength;
					const angle = Math.sin(i * .37 + time * .5) * MOUSE_DISTORT;
					const ca = Math.cos(angle);
					const sa = Math.sin(angle);
					const ux = mx / dist;
					const uy = my / dist;
					const rx = ux * ca - uy * sa;
					const ry = ux * sa + uy * ca;
					px += rx * force * 2;
					py += ry * force * 2;
				}
			}
			const ldx = px - lightX;
			const ldy = py - lightY;
			const lit = Math.min(1, Math.max(0, 1 - Math.sqrt(ldx * ldx + ldy * ldy) / LIGHT_RANGE));
			const vLight = SHADE_MIN + SHADE_MAX * lit * lit;
			const dist = Math.sqrt(px * px + py * py);
			const glow = smoothstep(8, 0, dist) * .3 * assembly;
			const baseAlpha = .45 + .3 * assembly;
			const shimmer = Math.sin(time * 1.5 + px * 5 + py * 3) * .1 + .9;
			const alpha = p.opacity * (baseAlpha + glow) * shimmer * Math.min(vLight, 1);
			const br = darkMode ? .75 : .42;
			const bg = darkMode ? .8 : .44;
			const bb = darkMode ? .9 : .47;
			const r = Math.min(255, Math.round((br * assembly + glow * .2) * vLight * 255));
			const g = Math.min(255, Math.round((bg * assembly + glow * .3) * vLight * 255));
			const b = Math.min(255, Math.round((bb * assembly + glow * .5) * vLight * 255));
			if (alpha <= .004) continue;
			ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
			const sx = width / 2 + px * scale - size / 2;
			const sy = height / 2 - (py + breathe) * scale - size / 2;
			ctx.fillRect(sx, sy, size, size);
		}
		ctx.globalCompositeOperation = "source-over";
	};
	function smoothstep(a, b, t) {
		const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
		return x * x * (3 - 2 * x);
	}
	let mouseNdc = {
		x: 0,
		y: 0
	};
	/** Viewport rect cache (refreshed by resize/positionHost): the pointer
	*  handler must never read layout on the per-event path. */
	let holderRect = holder.getBoundingClientRect();
	const onMove = (event) => {
		const rect = holderRect;
		if (rect.width === 0 || rect.height === 0) return;
		mouseNdc = {
			x: (event.clientX - rect.left) / rect.width * 2 - 1,
			y: -((event.clientY - rect.top) / rect.height * 2 - 1)
		};
	};
	window.addEventListener("pointermove", onMove, { passive: true });
	const start = () => {
		if (disposed) return;
		let last = performance.now();
		const step = (now) => {
			if (disposed) return;
			if (now - last < 1e3 / FPS$1) {
				raf = requestAnimationFrame(step);
				return;
			}
			last = now - (now - last) % (1e3 / FPS$1);
			const elapsed = (now - startedAt) / 1e3;
			const raw = Math.min(1, Math.max(0, (elapsed - .3) / 2.5));
			const D = 1 - Math.pow(1 - raw, 3);
			const assembly = smoothstep(0, 1, D);
			const targetX = mouseNdc.x * WORLD_H / 2;
			const targetY = mouseNdc.y * WORLD_H / 2;
			mouseWorld.x += (targetX - mouseWorld.x) * MOUSE_DECAY;
			mouseWorld.y += (targetY - mouseWorld.y) * MOUSE_DECAY;
			draw(assembly, elapsed);
			raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
	};
	resize();
	window.addEventListener("resize", resize);
	let watchedPhase = null;
	let recenterTimer = 0;
	const recenter = () => {
		if (recenterTimer !== 0) return;
		recenterTimer = window.setTimeout(() => {
			recenterTimer = 0;
			if (disposed) return;
			resize();
		}, 250);
	};
	const phaseObserver = new ResizeObserver(recenter);
	const watchPhase = () => {
		const phase = document.querySelector("[data-phase]");
		if (phase !== null && phase !== watchedPhase) {
			if (watchedPhase !== null) phaseObserver.unobserve(watchedPhase);
			watchedPhase = phase;
			phaseObserver.observe(phase);
			resize();
		}
	};
	watchPhase();
	const phaseWatch = window.setInterval(watchPhase, 1e3);
	const img = new Image();
	img.onload = () => {
		if (disposed) return;
		sample(img);
		resize();
		if (reduced) {
			mouseWorld = {
				x: 0,
				y: 0
			};
			draw(1, 2);
			window.setTimeout(() => {
				if (disposed) return;
				resize();
				draw(1, 2);
			}, 600);
		} else {
			start();
		}
	};
	img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(WHALE_SVG)}`;
	return {
		setDark: (dark) => {
			if (darkMode === dark) return;
			darkMode = dark;
			holder.setAttribute("data-scheme", dark ? "dark" : "light");
			if (reduced && particles.length > 0) draw(1, 2);
		},
		dispose: () => {
			disposed = true;
			cancelAnimationFrame(raf);
			window.clearTimeout(recenterTimer);
			window.clearInterval(phaseWatch);
			phaseObserver.disconnect();
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("resize", resize);
			holder.remove();
		}
	};
}

//#endregion
//#region src/client/mesh.ts
/**
* Interactive mesh: the deepseek.com/harness hero's dot-grid decoration —
* a 90px grid of dots with spring physics that repel from the pointer
* (radius 140px), the grid lines stretching with them. Faithful port of the
* site's `h()` grid component (30fps, dpr ≤ 2, idle-pause). Rendered inside
* the ambient scene behind the app content; pointer-events pass through.
*/
const SPACING = 90;
const REPEL_RADIUS = 140;
const REPEL_FORCE = 30;
const SPRING = .05;
const DAMPING = .85;
const LINE_GAP = 10;
const MIN_LINE_DIST = 20;
const LINE_COLOR = "rgba(60, 100, 160, ";
const DOT_COLOR = "rgba(60, 100, 160, ";
const LINE_ALPHA = .1;
const DOT_ALPHA = .2;
const FPS = 30;
/**
* Mount the interactive mesh into `host` (the ambient scene).
* @param host - the container the mesh canvas is appended to.
* @returns the handle.
*/
function mountMesh(host) {
	const canvas = document.createElement("canvas");
	canvas.setAttribute("data-dsh-aqua-mesh", "");
	canvas.setAttribute("aria-hidden", "true");
	host.appendChild(canvas);
	const ctx = canvas.getContext("2d");
	if (ctx === null) {
		canvas.remove();
		return { dispose: () => {} };
	}
	const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
	const coarse = typeof matchMedia !== "undefined" && matchMedia("(hover: none), (pointer: coarse)").matches;
	const dpr = Math.min(window.devicePixelRatio || 1, 2);
	let dots = [];
	let cols = 0;
	let rows = 0;
	let w = 0;
	let h = 0;
	let raf = 0;
	let disposed = false;
	let idle = false;
	let visible = true;
	let resizeTimer = 0;
	const mouse = {
		x: NaN,
		y: NaN
	};
	const build = () => {
		cols = Math.ceil(w / SPACING) + 1;
		rows = Math.ceil(h / SPACING) + 1;
		const startX = (w - (cols - 1) * SPACING) / 2;
		const startY = (h - (rows - 1) * SPACING) / 2;
		dots = [];
		for (let ry = 0; ry < rows; ry++) {
			for (let rx = 0; rx < cols; rx++) {
				const x = startX + SPACING * rx;
				const y = startY + SPACING * ry;
				dots.push({
					restX: x,
					restY: y,
					x,
					y,
					vx: 0,
					vy: 0
				});
			}
		}
	};
	const resize = () => {
		const cw = canvas.clientWidth;
		const ch = canvas.clientHeight;
		if (cw === w && ch === h) return;
		w = cw;
		h = ch;
		canvas.width = Math.max(1, Math.round(w * dpr));
		canvas.height = Math.max(1, Math.round(h * dpr));
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(build, 150);
	};
	resize();
	build();
	const sizeObserver = new ResizeObserver(() => resize());
	sizeObserver.observe(canvas);
	const wake = () => {
		if (!idle) return;
		idle = false;
		if (raf === 0) raf = requestAnimationFrame(frame);
	};
	const onMove = (event) => {
		if (reduced || coarse) return;
		mouse.x = event.clientX;
		mouse.y = event.clientY;
		wake();
	};
	if (!reduced && !coarse) window.addEventListener("pointermove", onMove, { passive: true });
	let last = 0;
	const frame = (now) => {
		raf = 0;
		if (disposed) return;
		if (!visible || now - last < 1e3 / FPS) {
			raf = requestAnimationFrame(frame);
			return;
		}
		last = now - (now - last) % (1e3 / FPS);
		ctx.clearRect(0, 0, w, h);
		const mx = mouse.x;
		const my = mouse.y;
		let maxV = 0;
		for (const dot of dots) {
			if (!Number.isNaN(mx) && !Number.isNaN(my)) {
				const dx = dot.x - mx;
				const dy = dot.y - my;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < REPEL_RADIUS && dist > .1) {
					const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
					const nx = dx / dist;
					const ny = dy / dist;
					dot.vx += nx * force * .1;
					dot.vy += ny * force * .1;
				}
			}
			const sx = dot.restX - dot.x;
			const sy = dot.restY - dot.y;
			dot.vx += SPRING * sx;
			dot.vy += SPRING * sy;
			dot.vx *= DAMPING;
			dot.vy *= DAMPING;
			dot.x += dot.vx;
			dot.y += dot.vy;
			const v = Math.abs(dot.vx) + Math.abs(dot.vy);
			if (v > maxV) maxV = v;
		}
		ctx.strokeStyle = `${LINE_COLOR}${LINE_ALPHA})`;
		ctx.lineWidth = .5;
		for (let ry = 0; ry < rows; ry++) {
			for (let rx = 0; rx < cols - 1; rx++) {
				const a = dots[ry * cols + rx];
				const b = dots[ry * cols + rx + 1];
				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < MIN_LINE_DIST) continue;
				const ux = dx / dist;
				const uy = dy / dist;
				ctx.beginPath();
				ctx.moveTo(a.x + LINE_GAP * ux, a.y + LINE_GAP * uy);
				ctx.lineTo(b.x - LINE_GAP * ux, b.y - LINE_GAP * uy);
				ctx.stroke();
			}
		}
		for (let ry = 0; ry < rows - 1; ry++) {
			for (let rx = 0; rx < cols; rx++) {
				const a = dots[ry * cols + rx];
				const b = dots[(ry + 1) * cols + rx];
				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < MIN_LINE_DIST) continue;
				const ux = dx / dist;
				const uy = dy / dist;
				ctx.beginPath();
				ctx.moveTo(a.x + LINE_GAP * ux, a.y + LINE_GAP * uy);
				ctx.lineTo(b.x - LINE_GAP * ux, b.y - LINE_GAP * uy);
				ctx.stroke();
			}
		}
		ctx.fillStyle = `${DOT_COLOR}${DOT_ALPHA})`;
		for (const dot of dots) {
			let r = 1.8;
			let alpha = DOT_ALPHA;
			if (!Number.isNaN(mx) && !Number.isNaN(my)) {
				const dx = dot.x - mx;
				const dy = dot.y - my;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const near = Math.max(0, 1 - dist / REPEL_RADIUS);
				r = 1.8 + 2 * near;
				alpha = DOT_ALPHA + .4 * near;
			}
			ctx.globalAlpha = alpha;
			const size = 2 * r;
			ctx.fillRect(dot.x - r, dot.y - r, size, size);
		}
		ctx.globalAlpha = 1;
		if (maxV < .01) {
			idle = true;
		} else {
			raf = requestAnimationFrame(frame);
		}
	};
	if (reduced || coarse) {
		resize();
		ctx.clearRect(0, 0, w, h);
		ctx.strokeStyle = `${LINE_COLOR}${LINE_ALPHA})`;
		ctx.lineWidth = .5;
		for (let ry = 0; ry < rows; ry++) {
			for (let rx = 0; rx < cols - 1; rx++) {
				const a = dots[ry * cols + rx];
				const b = dots[ry * cols + rx + 1];
				ctx.beginPath();
				ctx.moveTo(a.x + LINE_GAP, a.y);
				ctx.lineTo(b.x - LINE_GAP, b.y);
				ctx.stroke();
			}
		}
		for (let ry = 0; ry < rows - 1; ry++) {
			for (let rx = 0; rx < cols; rx++) {
				const a = dots[ry * cols + rx];
				const b = dots[(ry + 1) * cols + rx];
				ctx.beginPath();
				ctx.moveTo(a.x, a.y + LINE_GAP);
				ctx.lineTo(b.x, b.y - LINE_GAP);
				ctx.stroke();
			}
		}
		ctx.fillStyle = `${DOT_COLOR}${DOT_ALPHA})`;
		for (const dot of dots) ctx.fillRect(dot.x - 1.8, dot.y - 1.8, 3.6, 3.6);
	} else {
		raf = requestAnimationFrame(frame);
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible) wake();
		}, { threshold: 0 });
		observer.observe(canvas);
		return { dispose: () => {
			disposed = true;
			cancelAnimationFrame(raf);
			window.clearTimeout(resizeTimer);
			observer.disconnect();
			sizeObserver.disconnect();
			window.removeEventListener("pointermove", onMove);
			canvas.remove();
		} };
	}
	return { dispose: () => {
		disposed = true;
		cancelAnimationFrame(raf);
		window.clearTimeout(resizeTimer);
		sizeObserver.disconnect();
		window.removeEventListener("pointermove", onMove);
		canvas.remove();
	} };
}

//#endregion
//#region src/client/spotlight.ts
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
/** html attribute the layer uses to switch the glow effect (its toggle). */
const SPOTLIGHT_ATTRIBUTE = "data-dsh-aqua-spotlight";
/** html attribute the layer uses to switch the tilt effect (its toggle). */
const PRESS_ATTRIBUTE = "data-dsh-aqua-press";
/** Glow radius, px — matches the official card. */
const GLOW_RADIUS = 180;
/** Fallback glow color (the CSS var is normally provided by the stylesheet). */
const GLOW_FALLBACK = "rgba(90, 215, 255, 0.17)";
/** Tilt magnitude at the pane edge, radians (≈1° — perceptible but gentle). */
const TILT_MAX = .0175;
/** Panes whose min dimension exceeds this (px) tilt at half magnitude —
*  large boards (the trajectory timeline, a full-page plugin view) would
*  otherwise read as violently pressed at the edges. */
const TILT_GENTLE_MIN = 480;
/** Tilt perspective distance, px (official value). */
const TILT_PERSPECTIVE = 800;
/** Ease-back settle time (ms) — must outlast the CSS transform transition. */
const SETTLE_MS = 240;
/** The glow is live only while its gate attribute is on <html>. */
function glowGated() {
	return document.documentElement.hasAttribute(SPOTLIGHT_ATTRIBUTE);
}
/** The tilt is live only while its gate attribute is on <html>. */
function tiltGated() {
	return document.documentElement.hasAttribute(PRESS_ATTRIBUTE);
}
/** Hover tracking runs when EITHER effect is enabled. */
function hoverGated() {
	return glowGated() || tiltGated();
}
/** Whether the tilt may run on this pane right now. */
function tiltable(spot) {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
	if (spot.matches("[class*=\"sidebarCol\"]") && document.querySelector("[role=\"dialog\"]") !== null) return false;
	if (spot.hasAttribute("data-dsh-inputbar") && inputbarPopover(spot) !== null) return false;
	return true;
}
/** The first VISIBLE VIEWPORT-ANCHORED (position:fixed) dialog-ish popover
*  mounted INSIDE the inputbar, if any. Only fixed ones pause the tilt: they
*  position themselves in viewport coordinates that a transform re-anchors
*  and cannot be re-pinned per frame. The app's current menus/dialogs are
*  position:absolute INSIDE the pane (anchored to their trigger) — they ride
*  the tilted glass coherently and must NOT pause the tilt (clicking a
*  button used to flatten the glass for the whole popover lifetime). Plain
*  tooltips ([role=tooltip]) are likewise pinned by the bubble-anchor loop. */
function inputbarPopover(spot) {
	const popover = Array.from(spot.querySelectorAll("[role=\"dialog\"], [role=\"menu\"], [role=\"listbox\"]")).find((candidate) => {
		if (getComputedStyle(candidate).visibility === "hidden") return false;
		return getComputedStyle(candidate).position === "fixed";
	});
	return popover ?? null;
}
/**
* Attach the delegated pointer feeds. Everything is document-level: no
* per-pane listeners, and the rAF merge collapses pointermove bursts to one
* style write per frame.
* @returns a disposer that drops listeners, overlays, and inline styles.
*/
function startSpotlight() {
	/** The hovered pane (cleared on leave). */
	let current = null;
	/** Geometry for the hovered pane. */
	let session = null;
	let raf = 0;
	let refreshRaf = 0;
	/** Panes currently carrying a JS-written transform (wipe only those). */
	const tilted = new WeakSet();
	/** Pending ease-back removal timers per pane (leave → neutral → cleanup). */
	const settle = new Map();
	/** Inputbar popovers already revealed after a glide-back (element-keyed:
	*  a React rerender must not restart their fade-in). */
	const revealed = new WeakSet();
	/** Ease a pressed pane back to neutral, then drop the inline transform. */
	const easeBack = (spot) => {
		if (!tilted.has(spot)) return;
		tilted.delete(spot);
		spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(0rad) rotateY(0rad) scale(1)`;
		repinPanelBubbles();
		const id = window.setTimeout(() => {
			settle.delete(spot);
			spot.style.removeProperty("transform");
			spot.style.removeProperty("transform-origin");
			repinPanelBubbles();
		}, SETTLE_MS);
		settle.set(spot, id);
	};
	/** Drop every effect this controller wrote onto a pane. */
	const clearSpot = (spot) => {
		spot.removeAttribute(ON_ATTR);
		if (current === spot) {
			current = null;
			session = null;
		}
		const glow = spot.querySelector(`:scope > [${GLOW_ATTR}]`);
		if (glow !== null) glow.style.removeProperty("background-image");
		if (spot.hasAttribute("data-dsh-inputbar")) {
			spot.removeAttribute("data-tilt-revealed");
		}
		easeBack(spot);
	};
	/** Capture (or refresh) the hover geometry; sets the glow overlay box. */
	const measure = (spot) => {
		const visual = visualRect(spot);
		const local = glassLocalRect(spot);
		const glow = glowGated() ? ensureGlow(spot) : null;
		if (glow !== null) {
			glow.style.left = `${local.left}px`;
			glow.style.top = `${local.top}px`;
			glow.style.width = `${local.width}px`;
			glow.style.height = `${local.height}px`;
		}
		return {
			spot,
			visual,
			local,
			glow
		};
	};
	/** Write the glow gradient and/or the tilt transform for the pointer position. */
	const paint = (s, clientX, clientY) => {
		if (raf !== 0) return;
		raf = requestAnimationFrame(() => {
			raf = 0;
			const { spot, visual, local } = s;
			if (!inside(visual, clientX, clientY)) {
				clearSpot(spot);
				return;
			}
			let glow = s.glow;
			if (glow === null && glowGated()) {
				s = session = measure(spot);
				glow = s.glow;
			}
			if (glow !== null) {
				if (glowGated()) {
					glow.style.backgroundImage = `radial-gradient(${GLOW_RADIUS}px at ${clientX - visual.left}px ${clientY - visual.top}px, var(--dsh-aqua-spot-color, ${GLOW_FALLBACK}), transparent 70%)`;
				} else {
					glow.style.removeProperty("background-image");
				}
			}
			if (tiltGated() && tiltable(spot)) {
				const dx = Math.min(.5, Math.max(-.5, (clientX - visual.left) / visual.width - .5));
				const dy = Math.min(.5, Math.max(-.5, (clientY - visual.top) / visual.height - .5));
				const tiltMax = Math.min(visual.width, visual.height) > TILT_GENTLE_MIN ? TILT_MAX * .5 : TILT_MAX;
				const pendingGlide = settle.get(spot);
				if (pendingGlide !== undefined) {
					clearTimeout(pendingGlide);
					settle.delete(spot);
					spot.style.removeProperty("transition");
				}
				spot.style.transformOrigin = `${local.left + local.width / 2}px ${local.top + local.height / 2}px`;
				spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(${tiltMax * -2 * dy}rad) rotateY(${tiltMax * 2 * dx}rad) scale(1.01)`;
				tilted.add(spot);
				repinPanelBubbles();
			} else if (tilted.has(spot)) {
				if (spot.hasAttribute("data-dsh-inputbar") && inputbarPopover(spot) !== null) {
					spot.style.setProperty("transition", "none");
					spot.style.removeProperty("transform");
					spot.style.removeProperty("transform-origin");
					void spot.offsetWidth;
					spot.style.removeProperty("transition");
					tilted.delete(spot);
					repinPanelBubbles();
				} else {
					easeBack(spot);
				}
			}
		});
	};
	const onMove = (event) => {
		if (!hoverGated()) return;
		const spot = closestSpot(event.target);
		if (spot === null || session?.spot !== spot) return;
		paint(session, event.clientX, event.clientY);
	};
	const onOver = (event) => {
		if (!hoverGated()) return;
		const spot = closestSpot(event.target);
		if (spot === null) return;
		if (spot.matches("[class*=\"sidebarCol\"]") && document.querySelector("[role=\"dialog\"]") !== null) return;
		const next = measure(spot);
		if (!inside(next.visual, event.clientX, event.clientY)) return;
		const id = settle.get(spot);
		if (id !== undefined) {
			clearTimeout(id);
			settle.delete(spot);
		}
		spot.setAttribute(ON_ATTR, "");
		current = spot;
		session = next;
		paint(next, event.clientX, event.clientY);
	};
	const onOut = (event) => {
		const spot = closestSpot(event.target);
		if (spot === null || spot !== current) return;
		if (session !== null && inside(session.visual, event.clientX, event.clientY)) return;
		clearSpot(spot);
	};
	const keeper = startOverlayKeeper(() => {
		for (const spot of spotElements()) {
			if (!spot.matches("[class*=\"sidebarCol\"]")) continue;
			if (spot.querySelector("[role=\"dialog\"]") === null) continue;
			spot.removeAttribute(ON_ATTR);
			const id = settle.get(spot);
			if (id !== undefined) {
				clearTimeout(id);
				settle.delete(spot);
			}
			tilted.delete(spot);
			spot.style.setProperty("transition", "none");
			spot.style.removeProperty("transform");
			spot.style.removeProperty("transform-origin");
			void spot.offsetWidth;
			spot.style.removeProperty("transition");
			repinPanelBubbles();
			if (current === spot) {
				current = null;
				session = null;
			}
		}
		for (const spot of spotElements()) {
			if (!spot.hasAttribute("data-dsh-inputbar")) continue;
			const popovers = Array.from(spot.querySelectorAll("[role=\"dialog\"], [role=\"menu\"], [role=\"listbox\"]")).filter((popover) => getComputedStyle(popover).position === "fixed");
			if (popovers.length === 0) continue;
			const unrevealed = popovers.filter((popover) => !revealed.has(popover));
			const reveal = () => {
				spot.setAttribute("data-tilt-revealed", "");
				for (const popover of unrevealed) {
					revealed.add(popover);
					popover.style.animation = "none";
					void popover.offsetWidth;
					popover.style.removeProperty("animation");
				}
			};
			if (spot.style.transform === "") {
				reveal();
				continue;
			}
			if (settle.has(spot)) continue;
			spot.style.setProperty("transition", "transform 0.12s ease-out");
			spot.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(0rad) rotateY(0rad) scale(1)`;
			tilted.delete(spot);
			repinPanelBubbles();
			const id = window.setTimeout(() => {
				settle.delete(spot);
				spot.style.removeProperty("transition");
				spot.style.removeProperty("transform");
				spot.style.removeProperty("transform-origin");
				repinPanelBubbles();
				reveal();
			}, 120);
			settle.set(spot, id);
		}
		if (session === null || refreshRaf !== 0) return;
		refreshRaf = requestAnimationFrame(() => {
			refreshRaf = 0;
			if (session !== null) session = measure(session.spot);
		});
	});
	document.addEventListener("pointermove", onMove, { passive: true });
	document.addEventListener("pointerover", onOver, { passive: true });
	document.addEventListener("pointerout", onOut, { passive: true });
	return () => {
		document.removeEventListener("pointermove", onMove);
		document.removeEventListener("pointerover", onOver);
		document.removeEventListener("pointerout", onOut);
		keeper();
		if (raf !== 0) cancelAnimationFrame(raf);
		if (refreshRaf !== 0) cancelAnimationFrame(refreshRaf);
		for (const id of settle.values()) clearTimeout(id);
		settle.clear();
		for (const spot of spotElements()) {
			spot.removeAttribute(ON_ATTR);
			if (tilted.has(spot)) {
				tilted.delete(spot);
				spot.style.removeProperty("transform");
				spot.style.removeProperty("transform-origin");
			}
		}
	};
}

//#endregion
//#region src/client/theme-layer.ts
/** html attribute selecting the Aqua layer: CSS hooks and ambient effects. */
const AQUA_ATTRIBUTE = "data-dsh-aqua";
/** localStorage key carrying the layer enable flag. */
const AQUA_ENABLED_KEY = "dsh.ui-aqua.enabled";
/** Default state when nothing is stored yet: on. */
const DEFAULT_ENABLED = true;
/** The layer's identity in the theme override stack (inspection-visible). */
const OVERRIDE_SOURCE = "@deepseek-ai/dsh-client-ui-seaglass";
/** System fallbacks after the user-tunable font variables. */
const FONT_FALLBACK = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif";
/** Default Latin (English/digits) family: the self-hosted display font. */
const LATIN_DEFAULT = "\"Space Grotesk Variable\"";
/** Default CJK (Chinese) families: the platform system stacks. */
const CJK_DEFAULT = "\"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\"";
/** Scheme-invariant override value (applied to both palettes). */
const both = (value) => ({
	light: value,
	dark: value
});
/**
* Alias-token override layer: the deep-sea palette. Every value is a
* `{ light, dark }` pair so the layer stays legible when the user switches
* the Appearance preference — dark is deep-sea navy, light is cool white-blue.
*/
const AQUA_TOKEN_OVERRIDES = {
	"--dsw-font-family": both(`var(--dsh-aqua-font-latin, ${LATIN_DEFAULT}), var(--dsh-aqua-font-cjk, ${CJK_DEFAULT}), ${FONT_FALLBACK}`),
	"--ds-font-family-code": both(`var(--dsh-aqua-font-mono, "SF Mono", "JetBrains Mono", "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, "PingFang SC", "Microsoft YaHei")`),
	"--dsw-alias-bg-base": {
		light: "#F4F8FD",
		dark: "#0C121B"
	},
	"--dsw-alias-bg-layer-1": {
		light: "#FFFFFF",
		dark: "#111A27"
	},
	"--dsw-alias-bg-layer-2": {
		light: "#ECF2FA",
		dark: "#162130"
	},
	"--dsw-alias-bg-layer-3": {
		light: "#E2EBF7",
		dark: "#1C2A3D"
	},
	"--dsw-alias-bg-overlay": {
		light: "#DCE7F4",
		dark: "#22334A"
	},
	"--dsw-alias-bg-module-platform": {
		light: "#FFFFFF",
		dark: "#111A27"
	},
	"--dsw-alias-bg-multi-select": {
		light: "#FFFFFF",
		dark: "#162130"
	},
	"--dsw-alias-bg-skeleton": {
		light: "rgba(19, 45, 83, 0.08)",
		dark: "rgba(148, 180, 220, 0.12)"
	},
	"--dsw-alias-bg-mask-1": {
		light: "rgba(19, 37, 62, 0.3)",
		dark: "rgba(4, 8, 14, 0.55)"
	},
	"--dsw-alias-bg-mask-2": {
		light: "rgba(19, 37, 62, 0.12)",
		dark: "rgba(4, 8, 14, 0.25)"
	},
	"--dsw-alias-bg-mask-3": {
		light: "rgba(19, 37, 62, 0.3)",
		dark: "rgba(4, 8, 14, 0.5)"
	},
	"--dsw-alias-bg-mask-drop": {
		light: "rgba(244, 248, 253, 0.72)",
		dark: "rgba(12, 18, 27, 0.7)"
	},
	"--dsw-alias-border-l1": {
		light: "rgba(19, 45, 83, 0.08)",
		dark: "rgba(148, 180, 220, 0.08)"
	},
	"--dsw-alias-border-l2": {
		light: "rgba(19, 45, 83, 0.14)",
		dark: "rgba(148, 180, 220, 0.15)"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		light: "rgba(19, 45, 83, 0.1)",
		dark: "rgba(148, 180, 220, 0.1)"
	},
	"--dsw-alias-border-l3": {
		light: "rgba(19, 45, 83, 0.22)",
		dark: "rgba(148, 180, 220, 0.24)"
	},
	"--dsw-alias-border-l4": {
		light: "rgba(19, 45, 83, 0.32)",
		dark: "rgba(148, 180, 220, 0.34)"
	},
	"--dsw-alias-border-inverted": {
		light: "rgba(19, 45, 83, 0.06)",
		dark: "rgba(148, 180, 220, 0.12)"
	},
	"--dsw-alias-border-inverted2": {
		light: "rgba(19, 45, 83, 0.08)",
		dark: "rgba(148, 180, 220, 0.08)"
	},
	"--dsw-alias-label-primary": {
		light: "#13243E",
		dark: "#EAF2FC"
	},
	"--dsw-alias-label-secondary": {
		light: "#40597A",
		dark: "#AFC3DC"
	},
	"--dsw-alias-label-tertiary": {
		light: "#5D7696",
		dark: "#8399B5"
	},
	"--dsw-alias-label-caption": {
		light: "#7E93AC",
		dark: "#6B829F"
	},
	"--dsw-alias-label-dimmed": {
		light: "#C9D4E2",
		dark: "#4E5F76"
	},
	"--dsw-alias-label-primary-bluish": {
		light: "#2E5EB8",
		dark: "#BFD6F6"
	},
	"--dsw-alias-label-primary-dimmed": {
		light: "#1E3556",
		dark: "#D7E3F4"
	},
	"--dsw-alias-label-primary-inverted": {
		light: "#FFFFFF",
		dark: "#162130"
	},
	"--dsw-alias-label-primary-foreground": {
		light: "#FFFFFF",
		dark: "#FFFFFF"
	},
	"--dsw-alias-brand-primary": {
		light: "#13243E",
		dark: "#EAF2FC"
	},
	"--dsw-alias-brand-text": {
		light: "#13243E",
		dark: "#EAF2FC"
	},
	"--dsw-alias-brand-primary-invert": {
		light: "#FFFFFF",
		dark: "#0C121B"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		light: "#3F76D8",
		dark: "#6E9BE8"
	},
	"--dsw-alias-state-business-primary": {
		light: "#3F76D8",
		dark: "#6E9BE8"
	},
	"--dsw-alias-state-business-tertiary": {
		light: "#DCE9FB",
		dark: "#1D2C44"
	},
	"--dsw-alias-state-success-tertiary": {
		light: "#DDF3E4",
		dark: "#12271C"
	},
	"--dsw-alias-state-warn-tertiary": {
		light: "#FCEED6",
		dark: "#2A2416"
	},
	"--dsw-alias-button-primary-fill": {
		light: "#3F76D8",
		dark: "#4A7FD9"
	},
	"--dsw-alias-button-primary-hover": {
		light: "#5C8DE0",
		dark: "#5E8FE6"
	},
	"--dsw-alias-button-primary-dimmed": {
		light: "#DCE9FB",
		dark: "#162130"
	},
	"--dsw-alias-button-info-fill": {
		light: "#3F76D8",
		dark: "#6E9BE8"
	},
	"--dsw-alias-button-info-hover": {
		light: "#5C8DE0",
		dark: "#7FA8EF"
	},
	"--dsw-alias-button-elevated-fill": {
		light: "#FFFFFF",
		dark: "#162130"
	},
	"--dsw-alias-button-floating-fill": {
		light: "#FFFFFF",
		dark: "#162130"
	},
	"--dsw-alias-button-floating-hover": {
		light: "#F0F5FB",
		dark: "#1C2A3D"
	},
	"--dsw-alias-button-contrast-fill": {
		light: "#26364D",
		dark: "#EAF2FC"
	},
	"--dsw-alias-button-ghost-active-fill": {
		light: "#DCE7F4",
		dark: "#1C2A3D"
	},
	"--dsw-alias-button-ghost-active-hover": {
		light: "#E9F0F8",
		dark: "#162130"
	},
	"--dsw-alias-button-ghost-active-border": {
		light: "#8FA3BC",
		dark: "#6B829F"
	},
	"--dsw-alias-interactive-bg-hover": {
		light: "rgba(63, 118, 216, 0.08)",
		dark: "rgba(126, 164, 223, 0.1)"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		light: "rgba(63, 118, 216, 0.14)",
		dark: "rgba(126, 164, 223, 0.2)"
	},
	"--dsw-alias-interactive-bg-active": {
		light: "rgba(63, 118, 216, 0.2)",
		dark: "rgba(126, 164, 223, 0.26)"
	},
	"--dsw-alias-interactive-bg-hover-danger": {
		light: "rgba(236, 19, 19, 0.05)",
		dark: "rgba(242, 90, 90, 0.14)"
	},
	"--dsw-alias-interactive-bg-hover-solid": {
		light: "#F0F5FB",
		dark: "#1C2A3D"
	},
	"--dsw-alias-markdown-code-block": {
		light: "color-mix(in srgb, rgb(240 245 251) calc(55% * var(--dsh-aqua-code-frost, 1)), transparent)",
		dark: "color-mix(in srgb, rgb(13 20 31) calc(50% * var(--dsh-aqua-code-frost, 1)), transparent)"
	},
	"--dsw-alias-markdown-code-block-banner": {
		light: "color-mix(in srgb, rgb(245 248 253) calc(50% * var(--dsh-aqua-code-frost, 1)), transparent)",
		dark: "color-mix(in srgb, rgb(18 27 41) calc(45% * var(--dsh-aqua-code-frost, 1)), transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		light: "color-mix(in srgb, rgb(228 237 248) calc(62% * var(--dsh-aqua-code-frost, 1)), transparent)",
		dark: "color-mix(in srgb, rgb(23 35 52) calc(60% * var(--dsh-aqua-code-frost, 1)), transparent)"
	},
	"--dsw-alias-markdown-citation": {
		light: "#EAF1F9",
		dark: "#1A2534"
	},
	"--dsw-alias-markdown-tag": {
		light: "#E4EDF8",
		dark: "#162130"
	},
	"--dsw-alias-markdown-placeholder": {
		light: "#EAF1F9",
		dark: "#131D2B"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		light: "#FFFFFF",
		dark: "#1C2A3D"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		light: "#F0F5FB",
		dark: "#0F1723"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		light: "rgba(63, 118, 216, 0.28)",
		dark: "rgba(126, 164, 223, 0.28)"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		light: "rgba(63, 118, 216, 0.4)",
		dark: "rgba(126, 164, 223, 0.36)"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		light: "rgba(63, 118, 216, 0.5)",
		dark: "rgba(126, 164, 223, 0.44)"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		light: "rgba(63, 118, 216, 0.6)",
		dark: "rgba(126, 164, 223, 0.52)"
	},
	"--dsw-specific-sidebar-fill": {
		light: "transparent",
		dark: "transparent"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		light: "#DEE9F8",
		dark: "#1B283A"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		light: "#E9F0F8",
		dark: "#15202F"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		light: "#3F76D8",
		dark: "#6E9BE8"
	},
	"--dsw-specific-input-major": {
		light: "#FFFFFF",
		dark: "#101927"
	},
	"--dsw-specific-login-input": {
		light: "#F0F5FB",
		dark: "#0D141F"
	},
	"--dsw-specific-menu": {
		light: "#EAF1F9",
		dark: "#162130"
	},
	"--dsw-specific-selector": {
		light: "#EAF1F9",
		dark: "#1C2A3D"
	},
	"--dsw-specific-bubble": {
		light: "#F0F5FC",
		dark: "#121C2A"
	},
	"--dsw-specific-bubble-highlight": {
		light: "#DCE9FB",
		dark: "#1A283A"
	},
	"--dsw-specific-tip": {
		light: "#EAF1F9",
		dark: "#131D2B"
	},
	"--dsw-alias-toast-bg": {
		light: "#1B3256",
		dark: "#1C2A3D"
	},
	"--dsw-alias-tooltip-bg": {
		light: "#13243E",
		dark: "#162130"
	},
	"--dsw-shadow-lv1": {
		light: "0 2px 4px rgba(19, 45, 83, 0.06)",
		dark: "0 2px 4px rgba(2, 6, 14, 0.5)"
	},
	"--dsw-shadow-lv1-blur": {
		light: "0 4px 12px rgba(19, 45, 83, 0.05)",
		dark: "0 4px 12px rgba(2, 6, 14, 0.4)"
	},
	"--dsw-shadow-lv2": {
		light: "0 4px 12px rgba(19, 45, 83, 0.05), 0 2px 8px rgba(19, 45, 83, 0.06)",
		dark: "0 4px 12px rgba(2, 6, 14, 0.4), 0 2px 8px rgba(2, 6, 14, 0.35)"
	},
	"--dsw-shadow-lv3": {
		light: "0 0 1px rgba(19, 45, 83, 0.08), 0 12px 32px rgba(19, 45, 83, 0.12)",
		dark: "0 0 1px rgba(2, 6, 14, 0.6), 0 12px 32px rgba(2, 6, 14, 0.55)"
	}
};
/**
* Compatibility-mode token set: the same palette as the floating mode, but
* every surface token turns translucent, so the fluid/wallpaper backdrop
* shows through the STOCK layout. This is what makes the material generic —
* any plugin that consumes the shared design tokens gets the glass for free.
*/
const COMPAT_SURFACE_OVERRIDES = {
	"--dsw-alias-bg-layer-1": {
		light: "rgba(255, 255, 255, 0.55)",
		dark: "rgba(17, 26, 39, 0.55)"
	},
	"--dsw-alias-bg-layer-2": {
		light: "rgba(236, 242, 250, 0.5)",
		dark: "rgba(22, 33, 48, 0.55)"
	},
	"--dsw-alias-bg-layer-3": {
		light: "rgba(226, 235, 247, 0.45)",
		dark: "rgba(28, 42, 61, 0.5)"
	},
	"--dsw-alias-bg-overlay": {
		light: "rgba(220, 231, 244, 0.6)",
		dark: "rgba(34, 51, 74, 0.6)"
	},
	"--dsw-alias-bg-module-platform": {
		light: "rgba(255, 255, 255, 0.55)",
		dark: "rgba(17, 26, 39, 0.55)"
	},
	"--dsw-alias-bg-multi-select": {
		light: "rgba(255, 255, 255, 0.55)",
		dark: "rgba(22, 33, 48, 0.55)"
	},
	"--dsw-specific-menu": {
		light: "rgba(234, 241, 249, 0.6)",
		dark: "rgba(22, 33, 48, 0.6)"
	},
	"--dsw-specific-selector": {
		light: "rgba(234, 241, 249, 0.55)",
		dark: "rgba(28, 42, 61, 0.55)"
	},
	"--dsw-specific-bubble": {
		light: "rgba(240, 245, 252, 0.55)",
		dark: "rgba(18, 28, 42, 0.55)"
	},
	"--dsw-specific-bubble-highlight": {
		light: "rgba(220, 233, 251, 0.55)",
		dark: "rgba(26, 40, 58, 0.55)"
	},
	"--dsw-specific-tip": {
		light: "rgba(234, 241, 249, 0.6)",
		dark: "rgba(19, 29, 43, 0.6)"
	},
	"--dsw-specific-input-major": {
		light: "rgba(255, 255, 255, 0.5)",
		dark: "rgba(16, 25, 39, 0.5)"
	},
	"--dsw-specific-login-input": {
		light: "rgba(240, 245, 251, 0.5)",
		dark: "rgba(13, 20, 31, 0.5)"
	},
	"--dsw-alias-markdown-code-block": {
		light: "rgba(240, 245, 251, 0.5)",
		dark: "rgba(13, 20, 31, 0.5)"
	},
	"--dsw-alias-markdown-code-block-banner": {
		light: "rgba(245, 248, 253, 0.55)",
		dark: "rgba(18, 27, 41, 0.55)"
	},
	"--dsw-alias-markdown-inline-code": {
		light: "rgba(228, 237, 248, 0.5)",
		dark: "rgba(23, 35, 52, 0.5)"
	},
	"--dsw-alias-markdown-citation": {
		light: "rgba(234, 241, 249, 0.55)",
		dark: "rgba(26, 37, 52, 0.55)"
	},
	"--dsw-alias-markdown-tag": {
		light: "rgba(228, 237, 248, 0.5)",
		dark: "rgba(22, 33, 48, 0.5)"
	},
	"--dsw-alias-markdown-placeholder": {
		light: "rgba(234, 241, 249, 0.55)",
		dark: "rgba(19, 29, 43, 0.55)"
	},
	"--dsw-alias-toast-bg": {
		light: "rgba(27, 50, 86, 0.85)",
		dark: "rgba(28, 42, 61, 0.85)"
	},
	"--dsw-alias-tooltip-bg": {
		light: "rgba(19, 36, 62, 0.88)",
		dark: "rgba(22, 33, 48, 0.88)"
	}
};
/** Compatibility token layer: the palette plus the translucent surfaces. */
const COMPAT_TOKEN_OVERRIDES = {
	...AQUA_TOKEN_OVERRIDES,
	...COMPAT_SURFACE_OVERRIDES
};
/** Read the persisted enable flag (absent storage means on). */
function readEnabled() {
	try {
		const raw = localStorage.getItem(AQUA_ENABLED_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the enable flag (storage failures keep the in-memory state). */
function writeEnabled$1(value) {
	try {
		localStorage.setItem(AQUA_ENABLED_KEY, String(value));
	} catch {}
}
/** Shipped defaults — what a first-time install sees (the tuned look). */
const SETTINGS_DEFAULTS = {
	mode: "mica",
	blur: 20,
	frost: 7,
	codeFrost: 20,
	bgBrightness: 50,
	background: "fluid",
	wallpaper: "",
	whale: true,
	critters: true,
	mesh: true,
	spotlight: true,
	press: true,
	fluidHue: 320,
	fluidDepth: 25,
	wallpaperBlur: 0,
	wallpaperFrost: 0,
	videoBlur: 6,
	videoBrightness: 45,
	fontLatin: "",
	fontCjk: ""
};
/** Numeric knob keys and their localStorage names. */
const NUMERIC_KEYS = {
	blur: "dsh.ui-aqua.blur",
	frost: "dsh.ui-aqua.frost",
	codeFrost: "dsh.ui-aqua.codeFrost",
	fluidHue: "dsh.ui-aqua.fluidHue",
	fluidDepth: "dsh.ui-aqua.fluidDepth",
	bgBrightness: "dsh.ui-aqua.bgBrightness",
	wallpaperBlur: "dsh.ui-aqua.wallpaperBlur",
	wallpaperFrost: "dsh.ui-aqua.wallpaperFrost",
	videoBlur: "dsh.ui-aqua.videoBlur",
	videoBrightness: "dsh.ui-aqua.videoBrightness"
};
const MODE_KEY = "dsh.ui-aqua.mode";
const BACKGROUND_KEY = "dsh.ui-aqua.background";
const WALLPAPER_KEY = "dsh.ui-aqua.wallpaper";
const WHALE_KEY = "dsh.ui-aqua.whale";
const CRITTERS_KEY = "dsh.ui-aqua.critters";
const MESH_KEY = "dsh.ui-aqua.mesh";
const SPOTLIGHT_KEY = "dsh.ui-aqua.spotlight";
const PRESS_KEY = "dsh.ui-aqua.press";
/** localStorage keys for the user-tunable font stacks (empty = default). */
const FONT_LATIN_KEY = "dsh.ui-aqua.fontLatin";
const FONT_CJK_KEY = "dsh.ui-aqua.fontCjk";
/** Sanitize one user font item into a quoted CSS family name (null = drop).
*  Quotes/backslashes/braces/semicolons are stripped so the value can never
*  break out of the font-family declaration. */
function fontItem(item) {
	const name = String(item).replace(/["'\\{};]/g, "").trim();
	return name === "" ? null : `"${name}"`;
}
/** Build a quoted font stack from user input; empty input falls back. */
function fontStack(value, fallback) {
	const items = String(value ?? "").split(",").map(fontItem).filter((v) => v !== null);
	return items.length > 0 ? items.join(", ") : fallback;
}
/** Read one font preference (absent/failed storage means the default). */
function readFont(key) {
	try {
		return localStorage.getItem(key) ?? "";
	} catch {
		return "";
	}
}
/** Persist one font preference ("" removes the key; failures keep memory). */
function writeFont(key, value) {
	try {
		if (value === "") localStorage.removeItem(key);
		else localStorage.setItem(key, value);
	} catch {}
}
/** Clamp a numeric knob into its sane range. */
function clampSetting(key, value) {
	const max = key === "blur" || key === "wallpaperBlur" || key === "videoBlur" ? 40 : key === "frost" || key === "codeFrost" || key === "wallpaperFrost" || key === "bgBrightness" || key === "videoBrightness" ? 100 : 360;
	return Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : SETTINGS_DEFAULTS[key];
}
/** Read one numeric knob from localStorage (absent/parse failure means the default). */
function readSetting(key) {
	try {
		const raw = localStorage.getItem(NUMERIC_KEYS[key]);
		return raw === null ? SETTINGS_DEFAULTS[key] : clampSetting(key, Number(raw));
	} catch {
		return SETTINGS_DEFAULTS[key];
	}
}
/** Persist one numeric knob (storage failures keep the in-memory state). */
function writeSetting(key, value) {
	try {
		localStorage.setItem(NUMERIC_KEYS[key], String(value));
	} catch {}
}
/** Read the backdrop source ('fluid' or 'wallpaper'). */
function readBackground() {
	try {
		return localStorage.getItem(BACKGROUND_KEY) === "wallpaper" ? "wallpaper" : "fluid";
	} catch {
		return "fluid";
	}
}
/** Persist the backdrop source. */
function writeBackground(value) {
	try {
		localStorage.setItem(BACKGROUND_KEY, value);
	} catch {}
}
/** Read the rendering mode ('mica' or 'compat'; legacy 'float'/'liquid'
*  values migrate to 'mica'). */
function readMode() {
	try {
		const stored = localStorage.getItem(MODE_KEY);
		if (stored === "compat") return "compat";
		return "mica";
	} catch {
		return "mica";
	}
}
/** Persist the rendering mode. */
function writeMode(value) {
	try {
		localStorage.setItem(MODE_KEY, value);
	} catch {}
}
/** Read the wallpaper data URL (absent/oversized means empty). */
function readWallpaper() {
	try {
		return localStorage.getItem(WALLPAPER_KEY) ?? "";
	} catch {
		return "";
	}
}
/** Persist the wallpaper data URL (quota failures keep it in memory only). */
function writeWallpaper(value) {
	try {
		localStorage.setItem(WALLPAPER_KEY, value);
	} catch {}
}
/** Read the particle-whale flag (absent means on). */
function readWhale() {
	try {
		const raw = localStorage.getItem(WHALE_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the particle-whale flag. */
function writeWhale(value) {
	try {
		localStorage.setItem(WHALE_KEY, String(value));
	} catch {}
}
/** Read the critters flag (absent means on). */
function readCritters() {
	try {
		const raw = localStorage.getItem(CRITTERS_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the critters flag. */
function writeCritters(value) {
	try {
		localStorage.setItem(CRITTERS_KEY, String(value));
	} catch {}
}
/** Read the interactive-mesh flag (absent means on). */
function readMesh() {
	try {
		const raw = localStorage.getItem(MESH_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the interactive-mesh flag. */
function writeMesh(value) {
	try {
		localStorage.setItem(MESH_KEY, String(value));
	} catch {}
}
/** Read the cursor-spotlight flag (absent means on). */
function readSpotlight() {
	try {
		const raw = localStorage.getItem(SPOTLIGHT_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the cursor-spotlight flag. */
function writeSpotlight(value) {
	try {
		localStorage.setItem(SPOTLIGHT_KEY, String(value));
	} catch {}
}
/** Read the hover-press flag (absent means on). */
function readPress() {
	try {
		localStorage.removeItem("dsh.ui-aqua.entrance");
		const raw = localStorage.getItem(PRESS_KEY);
		return raw === null ? true : raw === "true";
	} catch {
		return true;
	}
}
/** Persist the hover-press flag. */
function writePress(value) {
	try {
		localStorage.setItem(PRESS_KEY, String(value));
	} catch {}
}
/** Current scheme from the presenter-owned body attribute. */
function activeScheme() {
	return document.body.hasAttribute("data-ds-dark-theme") ? "dark" : "light";
}
/**
* Owns the Aqua layer lifecycle: reads the durable enable flag, and applies /
* retracts every layer on change. Cross-tab flips arrive through the storage
* event; every subscription and mounted effect are released when the plugin
* fiber is disposed.
*/
var AquaLayer = class {
	enabled = false;
	settings = { ...SETTINGS_DEFAULTS };
	/** Resolved palette scheme: dark = the brightness knob darkens, light = it brightens. */
	dark = false;
	tokenDisposer;
	mainFluid;
	interactionDisposer;
	themeListener;
	seamDisposer;
	spotlightDisposer;
	bubbleDisposer;
	whaleHandle;
	meshHandle;
	/** Object URL of the current large-video wallpaper (revoked on replace). */
	videoObjectUrl;
	/** IndexedDB id backing the current object URL (guards against reloads). */
	videoBlobId;
	ctx;
	/**
	* @param ctx - owning client context.
	*/
	constructor(ctx) {
		this.ctx = ctx;
		ctx.effect(() => {
			const onStorage = (event) => {
				if (event.key === "dsh.ui-aqua.enabled") {
					this.enabled = readEnabled();
					this.sync();
				}
				const key = event.key;
				if (key !== null && (key in NUMERIC_KEYS || key === BACKGROUND_KEY || key === WALLPAPER_KEY || key === MODE_KEY || key === WHALE_KEY || key === CRITTERS_KEY || key === MESH_KEY || key === SPOTLIGHT_KEY || key === PRESS_KEY || key === FONT_LATIN_KEY || key === FONT_CJK_KEY)) {
					this.reloadSettings();
					if (this.enabled) {
						this.applySettings();
						this.applyTokens();
						this.applyFluidPalettes();
						this.syncWhale();
					}
				}
			};
			window.addEventListener("storage", onStorage);
			this.themeListener = this.ctx.on("theme/change", () => {
				this.dark = this.resolveScheme();
				this.whaleHandle?.setDark(this.dark);
				if (this.enabled) {
					this.applySettings();
					this.applyFluidPalettes();
				}
			});
			return () => {
				window.removeEventListener("storage", onStorage);
				this.themeListener?.();
				this.themeListener = undefined;
				this.unmount();
			};
		}, "ui-aqua: layer lifecycle");
		this.enabled = readEnabled();
		this.reloadSettings();
		this.dark = this.resolveScheme();
		this.sync();
	}
	/** Current enable state (the settings row mirrors this). */
	getEnabled() {
		return this.enabled;
	}
	/** Current knob values (the settings row mirrors these). */
	getSettings() {
		return { ...this.settings };
	}
	/** Whether the resolved palette is dark (the brightness knob darkens). */
	getDark() {
		return this.dark;
	}
	/** Resolved scheme from the theme service (falls back to the body attribute). */
	resolveScheme() {
		try {
			return this.ctx.theme.getTheme().active.colorScheme === "dark";
		} catch {
			return activeScheme() === "dark";
		}
	}
	/** Re-read every knob from localStorage into memory. */
	reloadSettings() {
		try {
			localStorage.removeItem("dsh.ui-aqua.tilt");
			localStorage.removeItem("dsh.ui-aqua.lens");
			localStorage.removeItem("dsh.ui-aqua.fluidTone");
		} catch {}
		this.settings = {
			mode: readMode(),
			blur: readSetting("blur"),
			frost: readSetting("frost"),
			codeFrost: readSetting("codeFrost"),
			fluidHue: readSetting("fluidHue"),
			fluidDepth: readSetting("fluidDepth"),
			bgBrightness: readSetting("bgBrightness"),
			background: readBackground(),
			wallpaper: readWallpaper(),
			whale: readWhale(),
			critters: readCritters(),
			mesh: readMesh(),
			spotlight: readSpotlight(),
			press: readPress(),
			wallpaperBlur: readSetting("wallpaperBlur"),
			wallpaperFrost: readSetting("wallpaperFrost"),
			videoBlur: readSetting("videoBlur"),
			videoBrightness: readSetting("videoBrightness"),
			fontLatin: readFont(FONT_LATIN_KEY),
			fontCjk: readFont(FONT_CJK_KEY)
		};
	}
	/** Flip the layer: persist, then apply or retract every owned effect. */
	setEnabled(value) {
		if (value === this.enabled) return;
		this.enabled = value;
		writeEnabled$1(value);
		this.sync();
	}
	/** Set the rendering mode ('mica' or 'compat'). */
	setMode(value) {
		if (value === this.settings.mode) return;
		this.settings.mode = value;
		writeMode(value);
		if (this.enabled) {
			this.applySettings();
			this.applyTokens();
		}
	}
	/** Set the glass blur radius (px). */
	setBlur(value) {
		const next = clampSetting("blur", value);
		if (next === this.settings.blur) return;
		this.settings.blur = next;
		writeSetting("blur", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the glass frost amount (0-100). */
	setFrost(value) {
		const next = clampSetting("frost", value);
		if (next === this.settings.frost) return;
		this.settings.frost = next;
		writeSetting("frost", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the code-surface frost amount (0-100) — independent of the global frost. */
	setCodeFrost(value) {
		const next = clampSetting("codeFrost", value);
		if (next === this.settings.codeFrost) return;
		this.settings.codeFrost = next;
		writeSetting("codeFrost", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the fluid hue (degrees, continuous). */
	setFluidHue(value) {
		const next = clampSetting("fluidHue", value);
		if (next === this.settings.fluidHue) return;
		this.settings.fluidHue = next;
		writeSetting("fluidHue", next);
		if (this.enabled) {
			this.applySettings();
			this.applyFluidPalettes();
		}
	}
	/** Set the fluid depth (0-100, continuous: deep ↔ pale). */
	setFluidDepth(value) {
		const next = clampSetting("fluidDepth", value);
		if (next === this.settings.fluidDepth) return;
		this.settings.fluidDepth = next;
		writeSetting("fluidDepth", next);
		if (this.enabled) this.applyFluidPalettes();
	}
	/** Set the background brightness (0-100: 0 = pure black, 50 = transparent, 100 = pure white). */
	setBgBrightness(value) {
		const next = clampSetting("bgBrightness", value);
		if (next === this.settings.bgBrightness) return;
		this.settings.bgBrightness = next;
		writeSetting("bgBrightness", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the backdrop source (fluid board or custom wallpaper). */
	setBackground(value) {
		if (value === this.settings.background) return;
		this.settings.background = value;
		writeBackground(value);
		if (this.enabled) this.applySettings();
	}
	/** Set the wallpaper image (a data URL; empty clears it) or a large video
	*  (`idb:<id>` marker whose blob lives in IndexedDB). */
	setWallpaper(value) {
		const previous = this.settings.wallpaper;
		this.settings.wallpaper = value;
		writeWallpaper(value);
		if (previous.startsWith("idb:") && value !== previous) {
			void deleteVideoBlob(previous.slice(4));
		}
		if (!value.startsWith("idb:") && this.videoObjectUrl !== undefined) {
			URL.revokeObjectURL(this.videoObjectUrl);
			this.videoObjectUrl = undefined;
			this.videoBlobId = undefined;
		}
		if (this.enabled) this.applySettings();
	}
	/** Set the particle-whale flag (chat-area center decoration). */
	setWhale(value) {
		if (value === this.settings.whale) return;
		this.settings.whale = value;
		writeWhale(value);
		if (this.enabled) this.syncWhale();
	}
	/** Set the ambient marine-life flag (fish / bubbles / plankton). */
	setCritters(value) {
		if (value === this.settings.critters) return;
		this.settings.critters = value;
		writeCritters(value);
		if (this.enabled) this.applySettings();
	}
	/** Set the interactive-mesh flag (dot-grid decoration). */
	setMesh(value) {
		if (value === this.settings.mesh) return;
		this.settings.mesh = value;
		writeMesh(value);
		if (this.enabled) this.syncMesh();
	}
	/** Set the cursor-spotlight flag (pointer-tracking glass glow). */
	setSpotlight(value) {
		if (value === this.settings.spotlight) return;
		this.settings.spotlight = value;
		writeSpotlight(value);
		if (this.enabled) this.applySettings();
	}
	/** Set the hover-press flag (pane sinks a touch under the cursor). */
	setPress(value) {
		if (value === this.settings.press) return;
		this.settings.press = value;
		writePress(value);
		if (this.enabled) this.applySettings();
	}
	/** Set the wallpaper blur radius (px). */
	setWallpaperBlur(value) {
		const next = clampSetting("wallpaperBlur", value);
		if (next === this.settings.wallpaperBlur) return;
		this.settings.wallpaperBlur = next;
		writeSetting("wallpaperBlur", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the wallpaper frost veil (0-100). */
	setWallpaperFrost(value) {
		const next = clampSetting("wallpaperFrost", value);
		if (next === this.settings.wallpaperFrost) return;
		this.settings.wallpaperFrost = next;
		writeSetting("wallpaperFrost", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the video wallpaper blur radius (px). */
	setVideoBlur(value) {
		const next = clampSetting("videoBlur", value);
		if (next === this.settings.videoBlur) return;
		this.settings.videoBlur = next;
		writeSetting("videoBlur", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the video wallpaper brightness (0-100, 100 = fully lit). */
	setVideoBrightness(value) {
		const next = clampSetting("videoBrightness", value);
		if (next === this.settings.videoBrightness) return;
		this.settings.videoBrightness = next;
		writeSetting("videoBrightness", next);
		if (this.enabled) this.applySettings();
	}
	/** Set the Latin (English/digits) font stack ("" = the default). */
	setFontLatin(value) {
		const next = String(value ?? "");
		if (next === this.settings.fontLatin) return;
		this.settings.fontLatin = next;
		writeFont(FONT_LATIN_KEY, next);
		if (this.enabled) this.applySettings();
	}
	/** Set the CJK (Chinese) font stack ("" = the default). */
	setFontCjk(value) {
		const next = String(value ?? "");
		if (next === this.settings.fontCjk) return;
		this.settings.fontCjk = next;
		writeFont(FONT_CJK_KEY, next);
		if (this.enabled) this.applySettings();
	}
	/** After the user re-grants file access (选择视频 click on an fsa: video),
	*  drop the mount guard and re-apply so the file is re-read and played. */
	authorizeVideo() {
		if (this.videoObjectUrl !== undefined) {
			URL.revokeObjectURL(this.videoObjectUrl);
			this.videoObjectUrl = undefined;
		}
		this.videoBlobId = undefined;
		if (this.enabled) this.applySettings();
	}
	sync() {
		if (this.enabled) this.mount();
		else this.unmount();
	}
	/** Write the knob-driven CSS variables and mode attributes onto <html>. */
	applySettings() {
		const style = document.documentElement.style;
		style.setProperty("--dsh-aqua-blur", `${this.settings.blur}px`);
		style.setProperty("--dsh-aqua-frost", String(Math.min(this.settings.frost / 50, 1.4)));
		style.setProperty("--dsh-aqua-surface-frost", String(Math.min((this.settings.frost + 20) / 50, 1.4)));
		style.setProperty("--dsh-aqua-code-frost", String(Math.min(this.settings.codeFrost / 50, 1.6)));
		const glowHue = ((this.settings.fluidHue + 217) % 360 + 360) % 360;
		style.setProperty("--dsh-aqua-spot-color", this.dark ? `hsla(${glowHue}, 90%, 62%, 0.17)` : `hsla(${glowHue}, 90%, 45%, 0.16)`);
		style.setProperty("--dsh-aqua-wallpaper-blur", `${this.settings.wallpaperBlur}px`);
		style.setProperty("--dsh-aqua-wallpaper-frost", String(this.settings.wallpaperFrost / 100));
		style.setProperty("--dsh-aqua-video-blur", `${this.settings.videoBlur}px`);
		style.setProperty("--dsh-aqua-video-dim", String((100 - this.settings.videoBrightness) / 100 * .65));
		style.setProperty("--dsh-aqua-font-latin", fontStack(this.settings.fontLatin, LATIN_DEFAULT));
		style.setProperty("--dsh-aqua-font-cjk", fontStack(this.settings.fontCjk, CJK_DEFAULT));
		const monoItems = [];
		if (this.settings.fontLatin !== "") monoItems.push(fontStack(this.settings.fontLatin, ""));
		if (this.settings.fontCjk !== "") monoItems.push(fontStack(this.settings.fontCjk, ""));
		if (monoItems.length > 0) style.setProperty("--dsh-aqua-font-mono", `${monoItems.join(", ")}, monospace`);
		else style.removeProperty("--dsh-aqua-font-mono");
		const dark = this.dark;
		style.setProperty("--dsh-aqua-brightness-black", String(dark ? Math.max(0, (50 - this.settings.bgBrightness) / 50) : 0));
		style.setProperty("--dsh-aqua-brightness-white", String(dark ? 0 : Math.max(0, (this.settings.bgBrightness - 50) / 50)));
		const compat = this.settings.mode === "compat";
		document.documentElement.toggleAttribute("data-dsh-float", !compat);
		document.documentElement.toggleAttribute("data-dsh-compat", compat);
		document.documentElement.toggleAttribute(SPOTLIGHT_ATTRIBUTE, !compat && this.settings.spotlight);
		document.documentElement.toggleAttribute(PRESS_ATTRIBUTE, !compat && this.settings.press);
		const ambient = document.querySelector("[data-dsh-aqua-ambient]");
		if (ambient !== null) ambient.dataset.background = this.settings.background;
		if (ambient !== null) ambient.dataset.critters = this.settings.critters ? "on" : "off";
		const wallpaper = this.settings.wallpaper;
		const isVideo = wallpaper.startsWith("data:video/") || wallpaper.startsWith("idb:") || wallpaper.startsWith("fsa:");
		const wallpaperLayer = document.querySelector("[data-dsh-aqua-wallpaper-layer]");
		if (wallpaperLayer !== null) {
			wallpaperLayer.dataset.background = this.settings.background;
			wallpaperLayer.dataset.media = isVideo ? "video" : "image";
		}
		const wallpaperOn = this.settings.background === "wallpaper" && wallpaper !== "";
		document.documentElement.toggleAttribute("data-dsh-aqua-wallpaper", wallpaperOn);
		if (wallpaperOn) {
			document.documentElement.setAttribute("data-dsh-aqua-media", isVideo ? "video" : "image");
		} else {
			document.documentElement.removeAttribute("data-dsh-aqua-media");
		}
		const img = document.querySelector("[data-dsh-aqua-wallpaper-img]");
		if (img !== null) {
			if (this.settings.background === "wallpaper" && wallpaper !== "" && !isVideo) {
				img.src = wallpaper;
			} else {
				img.removeAttribute("src");
			}
		}
		const video = document.querySelector("[data-dsh-aqua-wallpaper-video]");
		if (video !== null) {
			if (this.settings.background === "wallpaper" && isVideo) {
				if (wallpaper.startsWith("idb:")) {
					const id = wallpaper.slice(4);
					if (this.videoBlobId === id && this.videoObjectUrl !== undefined) {} else {
						void loadVideoBlob(id).then((blob) => {
							if (blob === null) return;
							if (this.settings.wallpaper !== wallpaper) return;
							const url = URL.createObjectURL(blob);
							if (this.videoObjectUrl !== undefined) URL.revokeObjectURL(this.videoObjectUrl);
							this.videoObjectUrl = url;
							this.videoBlobId = id;
							video.setAttribute("src", url);
							this.configureWallpaperVideo(video);
						});
					}
				} else if (wallpaper.startsWith("fsa:")) {
					if (this.videoBlobId === wallpaper && this.videoObjectUrl !== undefined) {} else {
						void loadVideoHandle().then(async (handle) => {
							if (handle === null) return;
							if (this.settings.wallpaper !== wallpaper) return;
							try {
								const permission = await handle.queryPermission({ mode: "read" });
								if (permission !== "granted") return;
								const file = await handle.getFile();
								const url = URL.createObjectURL(file);
								if (this.videoObjectUrl !== undefined) URL.revokeObjectURL(this.videoObjectUrl);
								this.videoObjectUrl = url;
								this.videoBlobId = wallpaper;
								video.setAttribute("src", url);
								this.configureWallpaperVideo(video);
							} catch {}
						});
					}
				} else if (video.getAttribute("src") !== wallpaper) {
					video.setAttribute("src", wallpaper);
					this.configureWallpaperVideo(video);
				}
			} else {
				video.pause();
				video.removeAttribute("src");
				video.load();
			}
		}
	}
	/** The wallpaper plays as a plain <video> element (the browser's own
	*  decoder, no player chrome at all): looping on, cover fill via CSS, and
	*  autoplay with a muted fallback where policy requires it. A direct
	*  element (not an iframe) keeps backdrop-filter working over it, so the
	*  glass panels stay frosted above the video. */
	configureWallpaperVideo(video) {
		video.loop = true;
		if (!video.paused) return;
		void video.play().catch(() => {
			video.muted = true;
			void video.play().catch(() => {});
		});
	}
	/** Apply the mode's token layer (floating palette, or translucent compat). */
	applyTokens() {
		this.tokenDisposer?.();
		this.tokenDisposer = this.ctx.theme.overrideTokens(OVERRIDE_SOURCE, this.settings.mode === "compat" ? COMPAT_TOKEN_OVERRIDES : AQUA_TOKEN_OVERRIDES);
	}
	mount() {
		document.documentElement.setAttribute(AQUA_ATTRIBUTE, "");
		ensureAmbientScene();
		ensurePageFades();
		this.applySettings();
		this.applyTokens();
		this.mountFluid();
		this.startSeamStamper();
		this.startSpotlightFeed();
		this.startBubbleFeed();
		this.syncWhale();
		this.syncMesh();
	}
	/** Mount or drop the particle whale to match enabled + the whale flag. */
	syncWhale() {
		if (this.enabled && this.settings.whale) {
			if (this.whaleHandle !== undefined) return;
			const ambient = document.querySelector("[data-dsh-aqua-ambient]");
			if (ambient === null) return;
			this.whaleHandle = mountWhale(ambient, this.dark);
		} else {
			this.whaleHandle?.dispose();
			this.whaleHandle = undefined;
		}
	}
	/** Mount or drop the interactive mesh to match enabled + the mesh flag. */
	syncMesh() {
		if (this.enabled && this.settings.mesh) {
			if (this.meshHandle !== undefined) return;
			const ambient = document.querySelector("[data-dsh-aqua-ambient]");
			if (ambient === null) return;
			this.meshHandle = mountMesh(ambient);
		} else {
			this.meshHandle?.dispose();
			this.meshHandle = undefined;
		}
	}
	unmount() {
		document.documentElement.removeAttribute(AQUA_ATTRIBUTE);
		document.documentElement.removeAttribute("data-dsh-float");
		document.documentElement.removeAttribute("data-dsh-compat");
		document.documentElement.removeAttribute("data-dsh-aqua-wallpaper");
		document.documentElement.removeAttribute("data-dsh-aqua-media");
		document.documentElement.removeAttribute(SPOTLIGHT_ATTRIBUTE);
		document.documentElement.removeAttribute(PRESS_ATTRIBUTE);
		this.spotlightDisposer?.();
		this.spotlightDisposer = undefined;
		this.bubbleDisposer?.();
		this.bubbleDisposer = undefined;
		this.whaleHandle?.dispose();
		this.whaleHandle = undefined;
		this.meshHandle?.dispose();
		this.meshHandle = undefined;
		this.tokenDisposer?.();
		this.tokenDisposer = undefined;
		if (this.videoObjectUrl !== undefined) {
			URL.revokeObjectURL(this.videoObjectUrl);
			this.videoObjectUrl = undefined;
			this.videoBlobId = undefined;
		}
		this.teardownFluid();
		removeAmbientScene();
		removePageFades();
		this.seamDisposer?.();
		this.seamDisposer = undefined;
	}
	/** Attach the fluid shader and the interaction feeds. */
	mountFluid() {
		const mainCanvas = document.querySelector("[data-dsh-aqua-fluid-canvas]");
		try {
			if (mainCanvas !== null) this.mainFluid = attachFluidShader(mainCanvas, this.fluidParams());
			this.applyFluidPalettes();
			if (this.mainFluid !== undefined && mainCanvas !== null) {
				this.interactionDisposer = attachFluidInteractions({
					main: this.mainFluid,
					mainCanvas
				});
			}
		} catch {
			this.mainFluid = undefined;
		}
	}
	teardownFluid() {
		this.interactionDisposer?.();
		this.interactionDisposer = undefined;
		this.mainFluid?.dispose();
		this.mainFluid = undefined;
	}
	fluidParams() {
		return {
			...SITE_FLUID_PARAMS,
			...fluidToneColors(this.dark, this.settings.fluidHue, this.settings.fluidDepth)
		};
	}
	applyFluidPalettes() {
		this.mainFluid?.setParams(this.fluidParams());
	}
	/** Stamp the data-* seams the stylesheet keys off (self-contained mode). */
	startSeamStamper() {
		if (this.seamDisposer !== undefined) return;
		this.seamDisposer = startSeamStamper();
	}
	/** Attach the cursor-spotlight pointer feeds (idempotent per mount). */
	startSpotlightFeed() {
		if (this.spotlightDisposer !== undefined) return;
		this.spotlightDisposer = startSpotlight();
	}
	/** Attach the tooltip anchor pinning (idempotent per mount). */
	startBubbleFeed() {
		if (this.bubbleDisposer !== undefined) return;
		this.bubbleDisposer = startBubbleAnchor();
	}
};

//#endregion
//#region \0dsh-css:C:\Users\Administrator\Desktop\dsh_workspace\dsh-client-ui-seaglass\src\client\aqua.module.aqcss
const css$1 = "/* ============================================================================\r\n * Aqua theme layer —the deep-sea skin for the whole Web surface.\r\n * Every rule is gated on the `data-dsh-aqua` attribute the plugin puts on\r\n * <html> while enabled (removed on disable, and the stylesheet itself is\r\n * unloaded with the plugin bundle), so off == the stock UI, exactly.\r\n * Selectors deliberately use attribute/element hooks and stable data-* seams\r\n * (never hashed module classes) so the layer survives recompiles.\r\n * ========================================================================== */\r\n\r\n/* ---------- Canvas: body paints the base color; the frame goes transparent\r\n   so the ambient glow (::after) shows through the main column. The\r\n   conversation and details surfaces paint their own opaque base fill over\r\n   the frame —lift them too, or the glow never reaches the eye. ---------- */\r\n[data-dsh-aqua] body {\r\n  background: var(--dsw-alias-bg-base);\r\n}\r\n\r\n/* ---------- Knobs: the settings row writes --dsh-aqua-blur (px),\r\n   --dsh-aqua-frost (a 0-2 alpha multiplier) and --dsh-aqua-fluid-hue (deg)\r\n   onto <html>. The glass surfaces below consume them, so the sliders move\r\n   the whole skin live. Shared card recipes keep the four main panes in lock\r\n   step; the smaller surfaces (stats / bubble / menu / + button) keep their\r\n   own base alphas and only scale by the same frost multiplier. ---------- */\r\n[data-dsh-aqua] {\r\n  /* FLAT glass: one even tone per scheme (no vertical gradient — a darker\r\n     bottom stop read as a black fade inside the composer). */\r\n  --dsh-aqua-glass-card-light: color-mix(in srgb, rgb(255 255 255) calc(42% * var(--dsh-aqua-frost, 1)), transparent);\r\n  /* Dark glass is a NEUTRAL cool gray, not blue: raising frost to max would\r\n     otherwise reveal the blue base and read as a blue slab in dark mode. */\r\n  --dsh-aqua-glass-card-dark: color-mix(in srgb, rgb(34 38 47) calc(50% * var(--dsh-aqua-frost, 1)), transparent);\r\n  /* Per-script font stacks (the settings page writes the user's picks; the\r\n     fallbacks here cover the pre-apply frame). */\r\n  --dsh-aqua-font-latin: 'Space Grotesk Variable';\r\n  --dsh-aqua-font-cjk: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei';\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-frame] {\r\n  background: transparent;\r\n}\r\n\r\n[data-dsh-aqua] [data-phase],\r\n[data-dsh-aqua] [data-dsh-details] {\r\n  background: transparent;\r\n}\r\n\r\n/* The header card floats ABOVE the transcript: the scroll body slides up\r\n   behind the frosted glass (negative margin) and its padding starts content\r\n   below the card, so scrolling text passes under the header and stays\r\n   visible through the blur instead of hard-clipping at the card edge.\r\n   z-index 8 (not 6) keeps it above the markdown CodeBlock sticky banner,\r\n   which the stock UI stacks at z-index 6 —otherwise a code block's copy\r\n   button row slides OVER the header and drifts as it scrolls past. */\r\n[data-dsh-float] [data-phase='active'] header {\r\n  position: relative;\r\n  z-index: 8;\r\n}\r\n\r\n/* The floating header breaks the code block banner's sticky anchoring, so\r\n   disable stickiness —the banner stays on its code block and scrolls with\r\n   it instead of sliding over the header and drifting. */\r\n[data-dsh-float] [class*='banner'] {\r\n  position: static;\r\n}\r\n\r\n[data-dsh-float] [data-phase='active'] [data-conversation-scroll] {\r\n  margin-top: -95px;\r\n  padding-top: 107px;\r\n}\r\n\r\n/* ---------- Conversation scrollport hardening: the chat column must never\r\n   grow a horizontal scrollbar of its own by accident. overflow-x: clip\r\n   (NOT hidden — clip creates no scroll container, so a stray wide child can\r\n   never expose a horizontal scrollbar here; wide content keeps scrolling\r\n   inside its own block / diff / table panes).\r\n   scrollbar-gutter: auto OVERRIDES the Host's own stable reservation on the\r\n   scroll body: with the gutter permanently reserved, the Host's custom\r\n   webkit scrollbar styling painted that empty track as a PERMANENT phantom\r\n   bar along the chat's right edge whenever the content did not overflow —\r\n   the whole first-response wait read as \"an unexpected vertical scrollbar\".\r\n   auto restores the on-demand scrollbar: absent while waiting, real once\r\n   the conversation actually outgrows the viewport (the one-time 8px column\r\n   shift when it first appears is stock-standard and far less wrong than a\r\n   scrollbar that never goes away). ---------- */\r\n[data-dsh-aqua] [data-conversation-scroll] {\r\n  overflow-x: clip;\r\n  scrollbar-gutter: auto;\r\n}\r\n\r\n/* No scrim: the transcript and details sit directly on the (now slightly\r\n   darker) fluid —the fluid itself provides the ground, so no dark veil\r\n   covers either phase. */\r\n\r\n/* NOTE: the scrollport must NOT carry a mask-image. A mask turns the scroll\r\n   container into a backdrop root for its sticky composer child, which breaks\r\n   the composer card's `backdrop-filter` (the \"send bar won't blur what's\r\n   behind it\" bug) —content scrolls behind it sharp instead of frosted. */\r\n\r\n/* Active phase: drop the composer seat's opaque bottom slab and its 36px\r\n   fade band entirely —the base rule (`.root[data-phase='active']\r\n   .composerSeat`) is (0,3,0), so the doubled attribute selector below must\r\n   out-rank it or the fluid stays hidden behind a solid navy slab. */\r\n[data-dsh-aqua] [data-phase] [class*='composerSeat'][class*='composerSeat'] {\r\n  background: none;\r\n}\r\n\r\n/* ---------- Ambient scene: the living deep-sea layer (injected by the\r\n   plugin). A deepseek.com-style fluid board —top light wash plus three\r\n   slowly drifting blurred fluid masses —with marine life riding over it. ---------- */\r\n[data-dsh-aqua] [data-dsh-aqua-ambient] {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: -1;\r\n  pointer-events: none;\r\n  overflow: hidden;\r\n  background:\r\n    radial-gradient(760px 420px at 50% -8%, rgba(160, 200, 255, 0.26), transparent 70%),\r\n    linear-gradient(180deg, rgba(156, 193, 231, 0.22) 0%, rgba(156, 193, 231, 0) 38%),\r\n    radial-gradient(900px 420px at 50% 108%, rgba(156, 193, 231, 0.14), transparent 70%);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-ambient] {\r\n  background:\r\n    radial-gradient(760px 420px at 50% -8%, rgba(110, 165, 255, 0.13), transparent 70%),\r\n    linear-gradient(180deg, rgba(94, 143, 224, 0.13) 0%, rgba(94, 143, 224, 0) 46%),\r\n    radial-gradient(900px 420px at 50% 108%, rgba(94, 143, 224, 0.09), transparent 70%);\r\n}\r\n\r\n/* Background brightness knob: dark mode darkens (0 = pure black, 50 = off),\r\n   light mode brightens (50 = off, 100 = pure white) — the layer writes only\r\n   the overlay of the resolved scheme, so at most one layer is ever opaque.\r\n   Both layers live in ::after (painted ABOVE the fluid canvas / wallpaper\r\n   children); ::before would sit behind them and be invisible. */\r\n[data-dsh-aqua] [data-dsh-aqua-ambient]::after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  background-image:\r\n    linear-gradient(rgba(255, 255, 255, var(--dsh-aqua-brightness-white, 0)), rgba(255, 255, 255, var(--dsh-aqua-brightness-white, 0))),\r\n    linear-gradient(rgba(0, 0, 0, var(--dsh-aqua-brightness-black, 0)), rgba(0, 0, 0, var(--dsh-aqua-brightness-black, 0)));\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  [data-dsh-aqua] [data-dsh-aqua-ambient] {\r\n    animation: dsh-aqua-breathe 9s var(--ds-ease-in-out) infinite alternate;\r\n  }\r\n}\r\n\r\n@keyframes dsh-aqua-breathe {\r\n  from { opacity: 0.86; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n/* Fluid board canvas: the ported deepseek.com shader fills the whole\r\n   backdrop —one unified water under every column. The tone picker supplies\r\n   the palette (depth baked into the colors), so no global filter here. */\r\n[data-dsh-aqua] [data-dsh-aqua-fluid-canvas] {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Custom wallpaper: the backdrop-source knob swaps the fluid board for an\r\n   image or video. `object-fit: cover` fills the page while preserving\r\n   aspect ratio; the blur and frost knobs ride --dsh-aqua-wallpaper-blur /\r\n   -frost. The layer is a STANDALONE fixed element (not inside the ambient):\r\n   videos fail to composite under the ambient's animated opacity group. */\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper] {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: -1;\r\n  overflow: hidden;\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper-img] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n/* Video wallpaper: a plain <video> element (the browser's own decoder, no\r\n   player chrome) filling the layer with cover crop at any window size. A\r\n   direct element — not an iframe — keeps backdrop-filter sampling it, so\r\n   the glass panels stay frosted above the video. */\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper-video] {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border: 0;\r\n  pointer-events: none;\r\n  /* The 视频模糊度 knob drives the film's own blur. */\r\n  filter: blur(var(--dsh-aqua-video-blur, 0px));\r\n}\r\n\r\n/* Wallpaper blur applies to images only — videos play sharp. */\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper-img] {\r\n  filter: blur(var(--dsh-aqua-wallpaper-blur, 0px));\r\n}\r\n\r\n/* Frost veil over the wallpaper (white in light, near-black in dark). */\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper]::after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgb(255 255 255 / var(--dsh-aqua-wallpaper-frost, 0));\r\n  pointer-events: none;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-wallpaper]::after {\r\n  background: rgb(12 18 27 / var(--dsh-aqua-wallpaper-frost, 0));\r\n}\r\n\r\n/* Video wallpaper: a dim acrylic scrim keeps the chat text readable — the\r\n   video stays alive behind it but calm. The 视频亮度 knob drives the veil's\r\n   alpha (--dsh-aqua-video-dim); the 视频模糊度 knob blurs the film itself. */\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper][data-media='video']::after {\r\n  display: block;\r\n  background: rgb(255 255 255 / calc(var(--dsh-aqua-video-dim, 0.36) * 1.3));\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-wallpaper][data-media='video']::after {\r\n  background: rgb(8 12 20 / var(--dsh-aqua-video-dim, 0.36));\r\n}\r\n\r\n/* Particle whale: centered on the main column (position/size arrive inline\r\n   from the engine — the [data-phase] area right of the sidebar), screen\r\n   blended over the dark backdrop, multiply blended (gray particles) over\r\n   the light one. */\r\n[data-dsh-aqua] [data-dsh-aqua-whale] {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  pointer-events: none;\r\n  mix-blend-mode: screen;\r\n  opacity: 0.92;\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-whale][data-scheme='light'] {\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-whale] canvas {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Backdrop source: hide whichever board is not the active one. */\r\n[data-dsh-aqua] [data-dsh-aqua-ambient][data-background='wallpaper'] [data-dsh-aqua-fluid-canvas] {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-wallpaper][data-background='fluid'] {\r\n  display: none;\r\n}\r\n\r\n/* Interactive mesh: the site's dot-grid decoration, full-viewport inside the\r\n   ambient scene; the pointer interacts through the window listener. */\r\n[data-dsh-aqua] [data-dsh-aqua-mesh] {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Ambient marine life: brand-fish silhouettes, shrimp, bubbles, plankton.\r\n   Positions, sizes, and per-critter timing arrive inline from the plugin\r\n   markup. The critters toggle hides the whole group. */\r\n[data-dsh-aqua] [data-dsh-aqua-ambient][data-critters='off'] [data-aqua-critter] {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-aqua] [data-aqua-critter] {\r\n  position: absolute;\r\n  color: #7ea4df;\r\n  opacity: 0.22;\r\n}\r\n\r\n[data-dsh-aqua] [data-aqua-critter='fish'] {\r\n  animation: dsh-aqua-fish-swim 12s var(--ds-ease-in-out) infinite;\r\n}\r\n\r\n[data-dsh-aqua] [data-aqua-critter='fish-left'] {\r\n  animation: dsh-aqua-fish-swim-left 16s var(--ds-ease-in-out) infinite;\r\n}\r\n\r\n[data-dsh-aqua] [data-aqua-critter='bubble'] {\r\n  color: #a9c6ef;\r\n  opacity: 0;\r\n  animation: dsh-aqua-bubble-rise 9s ease-in infinite;\r\n}\r\n\r\n[data-dsh-aqua] [data-aqua-critter='plankton'] {\r\n  color: #7ea4df;\r\n  animation: dsh-aqua-plankton 5s ease-in-out infinite;\r\n}\r\n\r\n/* Uneven timing percentages make the swim read as living tempo: a quick\r\n   dart, a long glide, then a short settle. Per-fish durations arrive\r\n   inline (9s / 14s / 19s), so every whale swims at its own pace. */\r\n@keyframes dsh-aqua-fish-swim {\r\n  0% { transform: translate3d(0, 0, 0) rotate(-5deg); }\r\n  30% { transform: translate3d(40px, -15px, 0) rotate(4deg); }\r\n  70% { transform: translate3d(52px, -18px, 0) rotate(3deg); }\r\n  100% { transform: translate3d(0, 0, 0) rotate(-5deg); }\r\n}\r\n\r\n@keyframes dsh-aqua-fish-swim-left {\r\n  0% { transform: translate3d(0, 0, 0) scaleX(-1) rotate(-5deg); }\r\n  30% { transform: translate3d(-34px, -12px, 0) scaleX(-1) rotate(4deg); }\r\n  70% { transform: translate3d(-44px, -15px, 0) scaleX(-1) rotate(3deg); }\r\n  100% { transform: translate3d(0, 0, 0) scaleX(-1) rotate(-5deg); }\r\n}\r\n\r\n@keyframes dsh-aqua-bubble-rise {\r\n  0% { transform: translate3d(0, 0, 0); opacity: 0; }\r\n  10% { opacity: 0.5; }\r\n  100% { transform: translate3d(8px, -150px, 0); opacity: 0; }\r\n}\r\n\r\n@keyframes dsh-aqua-plankton {\r\n  0%, 100% { opacity: 0.1; }\r\n  50% { opacity: 0.38; }\r\n}\r\n\r\n/* ---------- Corner language: 14px surfaces, 10px controls, 8px atoms.\r\n   Roles and stable data-* seams only (never hashed module classes). ---------- */\r\n\r\n/* Raised surfaces: menus, dialogs, toasts, hover cards, and hooked owners. */\r\n[data-dsh-float] [role='menu'],\r\n[data-dsh-float] [role='dialog'],\r\n[data-dsh-float] [role='alert'],\r\n[data-dsh-float] [data-dsh-surface] {\r\n  border-radius: 14px;\r\n}\r\n\r\n/* The new-session button is glass too: translucent fill + backdrop blur,\r\n   like the composer attach \"+\" bead. Its frost rides --dsh-aqua-surface-frost\r\n   (the frost knob + 20 points, written by the layer), so it always reads\r\n   noticeably frosted relative to the cards around it. */\r\n[data-dsh-float] [data-dsh-surface] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(62% * var(--dsh-aqua-surface-frost, 1)), transparent);\r\n  border: 1px solid rgba(19, 45, 83, 0.16);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-float] [data-dsh-surface]:hover:not(:disabled) {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(74% * var(--dsh-aqua-surface-frost, 1)), transparent);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-surface] {\r\n  background: color-mix(in srgb, rgb(42 46 56) calc(62% * var(--dsh-aqua-surface-frost, 1)), transparent);\r\n  border-color: rgba(148, 180, 220, 0.2);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-surface]:hover:not(:disabled) {\r\n  background: color-mix(in srgb, rgb(54 58 70) calc(70% * var(--dsh-aqua-surface-frost, 1)), transparent);\r\n}\r\n\r\n/* Small atoms: menu cells, tooltips, pills. */\r\n[data-dsh-float] [role='menuitem'],\r\n[data-dsh-float] [role='tooltip'],\r\n[data-dsh-float] [class*='pill'] {\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Buttons (component roots carry the `button`-named class; icon circles\r\n   carry `iconButton`; the sidebar search circle is its own family). */\r\n[data-dsh-float] button[class*='button'] {\r\n  border-radius: 10px;\r\n}\r\n\r\n[data-dsh-float] [class*='iconButton'],\r\n[data-dsh-float] [class*='searchButton'] {\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Composer attach \"+\": frosted circle over the card's own glass, so the\r\n   control reads as a brighter bead on the glass rather than a solid token. */\r\n[data-dsh-float] [data-dsh-add] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(40% * var(--dsh-aqua-frost, 1)), transparent);\r\n  border: 1px solid rgba(19, 45, 83, 0.18);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n/* Composer attach \"+\" hover: the bead answers with an aqua-glass highlight\r\n   (blue-tinted fill + ring + soft halo) instead of a plain brighter white. */\r\n[data-dsh-float] [data-dsh-add]:hover:not(:disabled) {\r\n  background: color-mix(in srgb, #6e9be8 18%, transparent);\r\n  border-color: rgba(110, 155, 232, 0.4);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 0 10px rgba(110, 155, 232, 0.28);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-add] {\r\n  background: color-mix(in srgb, rgb(42 46 56) calc(40% * var(--dsh-aqua-frost, 1)), transparent);\r\n  border-color: rgba(148, 180, 220, 0.25);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-add]:hover:not(:disabled) {\r\n  background: rgba(148, 180, 220, 0.2);\r\n  border-color: rgba(148, 180, 220, 0.5);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.08),\r\n    0 0 10px rgba(110, 155, 232, 0.28);\r\n}\r\n\r\n/* Chat bubbles become glass: dark mode = black glass, light = frosted\r\n   white, both with a backdrop blur so the fluid shimmers behind the text. */\r\n[data-dsh-float] [class*='bubble'] {\r\n  border-radius: 14px;\r\n  border: 1px solid rgba(19, 45, 83, 0.14);\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(42% * var(--dsh-aqua-frost, 1)), transparent);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [class*='bubble'] {\r\n  border-color: rgba(148, 180, 220, 0.14);\r\n  background: color-mix(in srgb, rgb(0 0 0) calc(40% * var(--dsh-aqua-frost, 1)), transparent);\r\n}\r\n\r\n/* Video wallpaper: bubbles carry a REAL plate (frost-independent) so the\r\n   text never fights the film; the backdrop blur still frosts the video. */\r\nhtml[data-dsh-float][data-dsh-aqua-wallpaper][data-dsh-aqua-media='video'] [class*='bubble'] {\r\n  background: color-mix(in srgb, rgb(255 255 255) 70%, transparent);\r\n  border-color: rgba(19, 45, 83, 0.2);\r\n}\r\n\r\nhtml[data-dsh-float][data-dsh-aqua-wallpaper][data-dsh-aqua-media='video'] body[data-ds-dark-theme] [class*='bubble'] {\r\n  background: color-mix(in srgb, rgb(0 0 0) 50%, transparent);\r\n  border-color: rgba(148, 180, 220, 0.22);\r\n}\r\n\r\n/* Card family (hover cards, panels, plugin cards, tool cards, the composer). */\r\n[data-dsh-float] [class*='card'] {\r\n  border-radius: 14px;\r\n}\r\n\r\n/* Composer card: the site's start-chat glass recipe —24px corners,\r\n   frosted translucent fill, backdrop blur, and a soft drop shadow.\r\n   (Standard `backdrop-filter` only: the prefixed alias is ignored by this\r\n   Chromium and lightningcss drops the standard property when both appear.\r\n   Declared after the card-family rule so the 24px corner wins the tie.) */\r\n[data-dsh-float] [data-composer-card],\r\n[data-dsh-float] [data-composer-card]::after {\r\n  border-radius: 24px;\r\n}\r\n\r\n[data-dsh-float] [data-composer-card] {\r\n  position: relative;\r\n  z-index: 8;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 36px rgba(19, 45, 83, 0.16);\r\n}\r\n\r\n/* The blur rides a ::before so the card itself never becomes a containing\r\n   block for fixed descendants (send/stop tooltip, plugin modals). */\r\n[data-dsh-float] [data-composer-card]::before {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  border-radius: inherit;\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  z-index: -1;\r\n  pointer-events: none;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-composer-card] {\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  border: 1px solid rgba(148, 180, 220, 0.32);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 10px 36px rgba(2, 6, 14, 0.5);\r\n}\r\n\r\n/* Fused state: once the stats line is docked underneath, the WHOLE inputbar\r\n   becomes ONE glass slab — a single background, blur, border and shadow on\r\n   the wrapper. The card and stats turn transparent inside it (their blur\r\n   and tone can never drift apart again); only the hairline divider at the\r\n   seam stays. The slab shrinks to its content width (max-content) so the\r\n   glass hugs the composer exactly. */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) {\r\n  width: calc(var(--dsh-chat-content-width) + 32px);\r\n  max-width: none;\r\n  margin: 0 auto 12px;\r\n  padding: 0;\r\n  position: relative;\r\n  isolation: isolate;\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-radius: 24px;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 36px rgba(19, 45, 83, 0.16);\r\n}\r\n\r\n/* Same treatment as the composer card: blur on ::before, not the slab itself. */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats])::before {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  border-radius: inherit;\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  z-index: -1;\r\n  pointer-events: none;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-inputbar]:has([data-dsh-stats]) {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 10px 36px rgba(2, 6, 14, 0.5);\r\n}\r\n\r\n[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-composer-card] {\r\n  border: none;\r\n  border-radius: 0;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  backdrop-filter: none;\r\n}\r\n\r\n/* In the fused slab the inputbar's ::before owns the blur; the card's own\r\n   ::before would double-blur, so drop it there. */\r\n[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-composer-card]::before {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-composer-card]::after {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-float] [data-dsh-inputbar]:has([data-dsh-stats]) [data-dsh-stats] {\r\n  width: 100%;\r\n  max-width: none;\r\n  /* Dock at the very bottom of the slab: the band's MIN height equals the\r\n     24px corner radius, so the divider lands exactly where the left/right\r\n     bottom corners start to curve. Block layout (not flex) keeps the stock\r\n     single-line ellipsis, so long stats never spill past the right edge. */\r\n  margin: auto 0 0;\r\n  min-height: 24px;\r\n  box-sizing: border-box;\r\n  display: block;\r\n  padding: 2px 16px;\r\n  border: none;\r\n  border-top: 1px solid rgba(19, 45, 83, 0.18);\r\n  border-radius: 0;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  backdrop-filter: none;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-inputbar]:has([data-dsh-stats]) [data-dsh-stats] {\r\n  border-top-color: rgba(148, 180, 220, 0.24);\r\n}\r\n\r\n[data-dsh-float] [data-composer-card]::after {\r\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='black' stroke-width='2' stroke-dasharray='4 4'/%3E%3C/svg%3E\");\r\n  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='black' stroke-width='2' stroke-dasharray='4 4'/%3E%3C/svg%3E\");\r\n}\r\n\r\n/* Block family (code / terminal / diff / read / web / search): the corner\r\n   variables ride the same elements, so banners and footers follow. */\r\n[data-dsh-float] [class*='block'] {\r\n  border-radius: 14px;\r\n  --dsl-code-block-border-radius: 14px;\r\n  --dsl-diff-radius: 14px;\r\n  --dsl-read-radius: 14px;\r\n  --dsl-terminal-radius: 14px;\r\n  --dsl-web-radius: 14px;\r\n  --dsl-search-radius: 14px;\r\n  /* The block shell is the ONE glass layer: translucent code-block tokens\r\n     + a backdrop blur turn the dark slabs into frosted panes. */\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n/* The DSL paints its own translucent layers UNDER the shell (the pre and\r\n   the banner wrap reuse the code-block token / bg-base) — stacking them\r\n   over the shell's glass squares the alpha and kills the blur. Flatten\r\n   them so the shell is the only glass surface. */\r\n[data-dsh-aqua] [class*='block'] pre,\r\n[data-dsh-aqua] [class*='block'] [class*='bannerWrap'] {\r\n  background: transparent;\r\n}\r\n\r\n/* ---------- Session header: a detached glass card, same recipe as the\r\n   composer. The bottom edge opens into the chat —no bottom border and a\r\n   shallow shadow, so the original header/chat divider line is gone. ---------- */\r\n[data-dsh-float] header {\r\n  margin: 12px 16px 0;\r\n  padding: 10px 16px 8px;\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-bottom-color: transparent;\r\n  border-radius: 20px;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 34px rgba(19, 45, 83, 0.16);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-float] header::after {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] header {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  border-bottom-color: transparent;\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 8px 30px rgba(2, 6, 14, 0.32);\r\n}\r\n\r\n/* Collapsed: the floating rail reaches 12px into the chat gutter, so the\r\n   header card steps right (28px inset = 16px clear of the rail's edge) —\r\n   the sidebar keeps its geometry, the top bar does the adjusting. */\r\n[data-dsh-float] [data-dsh-frame][data-sidebar-collapsed] header {\r\n  margin-left: 28px;\r\n}\r\n\r\n/* ---------- Sidebar: header-style glass card. Light = neutral cool white\r\n   (no green cast) with a luminous right edge; dark keeps its green-teal\r\n   tint. The blur rides a ::before so the sidebar itself never becomes a\r\n   containing block — the settings/plugin dialog mounts INSIDE the column and\r\n   must stay viewport-anchored; keeping the blur on the pane itself would\r\n   re-anchor it (and force the dialog-open backdrop-filter kill that made the\r\n   glass abruptly lose its frost). ---------- */\r\n[data-dsh-float] [class*='sidebarCol']::before {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  border-radius: inherit;\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  z-index: -1;\r\n  pointer-events: none;\r\n}\r\n\r\n[data-dsh-float] [class*='sidebarCol'] {\r\n  position: relative;\r\n  /* Above the header card (8): the settings panel is a fixed overlay\r\n     trapped in this stacking context, so the sidebar itself must outrank\r\n     the header or the panel's top edge sits under the top bar. */\r\n  z-index: 9;\r\n  margin: 12px;\r\n  padding: 10px 12px 14px;\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-right: 1px solid rgba(150, 190, 245, 0.65);\r\n  border-radius: 20px;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 34px rgba(19, 45, 83, 0.16);\r\n  overflow: hidden;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [class*='sidebarCol'] {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  border-right: 1px solid rgba(148, 180, 220, 0.2);\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 8px 30px rgba(2, 6, 14, 0.32);\r\n}\r\n\r\n/* Collapsed rail: floats too (mica mode). The rail keeps the app's own\r\n   geometry: the frame's grid track slides 256→56 (300ms) while the app\r\n   fades the frozen wide content out (150ms) — pinning a width here would\r\n   clip the outgoing content instantly and hide that fade. The floating gap\r\n   comes from a 12px left margin plus a matching negative right margin\r\n   (outer size unchanged — the main column does not move; the rail just\r\n   reaches 12px into the chat gutter). Top/bottom margins are 12px too,\r\n   aligning the rail with the header card's top and the composer's bottom.\r\n   Padding must be zeroed explicitly: the expanded rule's 12px horizontal\r\n   padding would otherwise shove the rail buttons out of the narrow column.\r\n   Compat mode has no data-dsh-float, so it keeps the stock rail untouched. */\r\n[data-dsh-float] [data-dsh-frame][data-sidebar-collapsed] [class*='sidebarCol'] {\r\n  margin: 12px -12px 12px 12px;\r\n  padding: 0;\r\n  border-radius: 16px;\r\n  /* The right margin rides the same clock as the fade, so the rail eases\r\n     into its floating spot as the wide content dissolves. The transform\r\n     entry keeps the hover press smooth while collapsed (the collapsed rule\r\n     out-ranks the press transition, so it must carry transform too). */\r\n  transition: margin 150ms var(--ds-ease-in-out), border-radius 150ms var(--ds-ease-in-out), transform 0.1s ease-out;\r\n}\r\n\r\n/* The sidebar root freezes at the expanded column width via an inline\r\n   style (the collapse crossfade needs it) —release it so the content\r\n   follows the glass panel's width instead of overflowing its right edge.\r\n   Scoped to the dedicated seam: a broad `[class*='root']` selector would\r\n   also hit the settings panel (which renders inside the sidebar column)\r\n   and collapse its rows into vertical text. */\r\n[data-dsh-float] [data-dsh-frame]:not([data-sidebar-collapsed]) [data-dsh-sidebar-root] {\r\n  width: 100% !important;\r\n}\r\n\r\n/* ---------- Trajectory view: a glass panel aligned with the header card's\r\n   left/right edges (16px insets), frosted like the other surfaces. ---------- */\r\n[data-dsh-float] [data-dsh-trajectory] {\r\n  margin: 8px 16px 12px;\r\n  width: calc(100% - 32px);\r\n  height: calc(100% - 20px);\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-radius: 20px;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 34px rgba(19, 45, 83, 0.16);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  overflow: hidden;\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-trajectory] {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 8px 30px rgba(2, 6, 14, 0.32);\r\n}\r\n\r\n/* The toolbar and timeline surfaces go transparent so the glass shows through. */\r\n[data-dsh-float] [data-dsh-trajectory] [role='toolbar'],\r\n[data-dsh-float] [data-dsh-trajectory] section[aria-label='Trajectory timeline'] {\r\n  background: transparent;\r\n}\r\n\r\n/* ---------- Stats line: the composer card's docked footer (original\r\n   styling). It shares the card's glass blur/width/border; the distinction\r\n   is a hairline divider at the seam plus a slightly more transparent\r\n   (recessed) fill. The seam itself is glued by the spotlight layer's fuse\r\n   strip (see below), so the two still read as one piece on screen. ---------- */\r\n[data-dsh-float] [data-dsh-inputbar]:not([class*='hero']) {\r\n  padding-bottom: 12px;\r\n}\r\n\r\n[data-dsh-float] [data-dsh-stats] {\r\n  position: relative;\r\n  z-index: 8;\r\n  width: calc(var(--dsh-chat-content-width) + 32px);\r\n  max-width: none;\r\n  margin: 0 auto;\r\n  padding: 2px 16px;\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  /* The ONLY seam cue: one hairline between the two pieces of the same\r\n     glass slab (the composer card drops its bottom border when fused). */\r\n  border-top: 1px solid rgba(19, 45, 83, 0.18);\r\n  border-radius: 0 0 24px 24px;\r\n  /* Continues the card's FLAT tone exactly, so the two read as one piece\r\n     of glass with no tonal step at the seam. */\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  box-shadow: 0 10px 36px rgba(19, 45, 83, 0.16);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n  /* Stats text: neutral slate (dark on light glass, near-white on dark\r\n     glass) — kills the stock blue-gray cast. */\r\n  color: rgb(38 46 62 / 0.9);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-dsh-stats] {\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  border-top-color: rgba(148, 180, 220, 0.24);\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  box-shadow: 0 10px 36px rgba(2, 6, 14, 0.5);\r\n  color: rgb(228 236 248 / 0.92);\r\n}\r\n\r\n/* Composer placeholder: neutral, scheme-adaptive — no blue hint. */\r\n[data-dsh-float] [data-composer-card] textarea::placeholder {\r\n  color: rgb(55 64 84 / 0.5);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [data-composer-card] textarea::placeholder {\r\n  color: rgb(205 216 234 / 0.52);\r\n}\r\n\r\n/* ---------- Cursor spotlight glow: the official feature-card glow on the\r\n   glass panes. The overlay div (data-dsh-aqua-glow) is appended inside every\r\n   data-dsh-aqua-spot pane by the controller, which writes the cursor\r\n   position into the inline background per pointermove and lights the pane\r\n   with the data-spot-on marker. The glow sits BEHIND the glass (z-index -1)\r\n   so the light diffuses through the translucent surface and never covers\r\n   the content or the outline. ---------- */\r\n[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-spot] {\r\n  position: relative;\r\n  /* A stacking context per pane: the glow sits at z-index -1 INSIDE it. */\r\n  isolation: isolate;\r\n}\r\n\r\n/* The injected glow div must never affect layout: inert by default (compat\r\n   mode / toggle off), absolute-positioned only while the glow is on. */\r\n[data-dsh-aqua] [data-dsh-aqua-glow] {\r\n  display: none;\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-glow] {\r\n  display: block;\r\n  position: absolute;\r\n  inset: 0;\r\n  border-radius: inherit;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n  z-index: -1;\r\n  /* The glow color follows the fluid tone: the layer writes\r\n     --dsh-aqua-spot-color on <html> from the 色调 slider. */\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-aqua-spot][data-spot-on] [data-dsh-aqua-glow] {\r\n  opacity: 1;\r\n}\r\n\r\n/* The fused composer + stats spot is an invisible wrapper (no radius of its\r\n   own) — give its glow the fused card's 24px corners. */\r\n[data-dsh-aqua][data-dsh-aqua-spotlight] [data-dsh-inputbar][data-dsh-aqua-spot] [data-dsh-aqua-glow] {\r\n  border-radius: 24px;\r\n}\r\n\r\n/* The settings/plugin dialog mounts INSIDE the sidebar column as a fixed\r\n   overlay. Its viewport anchoring was previously preserved by killing the\r\n   sidebar's own backdrop-filter while open — which made the glass abruptly\r\n   lose its frost (a dark → bright jump). The blur now lives on the\r\n   sidebar's ::before (see above), so the pane itself is never a containing\r\n   block and no dialog-open kill is needed: the glass keeps its look and the\r\n   dialog still escapes. The compat rule below still releases the frame's\r\n   clipping/transform for the dialog's fixed overlay. */\r\n[data-dsh-aqua] [class*='sidebarCol']:has([role='dialog']),\r\n[data-dsh-aqua] [data-dsh-frame]:has([role='dialog']) {\r\n  overflow: visible !important;\r\n  transform: none !important;\r\n}\r\n\r\n/* ---------- Hover tilt: the geometric press is JS-driven (spotlight.ts\r\n   writes `perspective(800px) rotateX/rotateY` inline, tracking the cursor —\r\n   cursor right ⇒ right edge sinks, left edge lifts). A short transform\r\n   transition smooths both the press-in and the eased return, so the pane\r\n   glides into the press instead of flashing. */\r\n[data-dsh-float][data-dsh-aqua-press] [data-dsh-aqua-spot] {\r\n  transition: transform 0.1s ease-out;\r\n}\r\n\r\n/* ---------- Phantom-overflow kill switch: while a pane carries ANY\r\n   transform (tilt, glide-hold), its position:fixed descendants re-anchor\r\n   into the pane's coordinate space — a box written in viewport coordinates\r\n   (the app's popovers/tooltips) lands hundreds of px below the viewport and\r\n   inflates every ancestor scroll region: the scrollbar thumb jumps up and\r\n   stays while the pane is hovered. overflow:clip caps the pane's scrollable\r\n   overflow at 64px outside its own box — pinned bubbles (≤36px outside)\r\n   stay visible, poisoned boxes (hundreds of px outside) stop contributing.\r\n   Flat panes are unaffected: their fixed descendants keep the viewport as\r\n   containing block and escape the clip entirely. Menus/dialogs/listboxes\r\n   are exempted via data-dsh-popover-live (stamped by the seam stamper only\r\n   while one is VISIBLE — the keeper glides the tilt home for them anyway).\r\n   ---------- */\r\n[data-dsh-aqua][data-dsh-float]:not([data-dsh-popover-live]) [data-dsh-aqua-spot] {\r\n  overflow: clip;\r\n  overflow-clip-margin: 64px;\r\n}\r\n\r\n/* ---------- Inputbar popovers vs the tilt: tooltips no longer hide during a tilt session: the bubble-anchor loop\r\n   (bubble-anchor.ts) re-pins every panel bubble to its trigger every frame,\r\n   so the hover text shows immediately at the right spot and the glass keeps\r\n   its tilt. Only dialogs/menus/listboxes (which clamp by measuring their\r\n   rendered box and cannot be re-pinned) still glide the tilt home — their\r\n   reveal flow lives in spotlight.ts. */\r\n\r\n[data-dsh-aqua] [data-dsh-inputbar]:has([role='tooltip'], [role='menu'], [role='dialog'], [role='listbox']) {\r\n  z-index: 10;\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-frame]:has([role='dialog']) [data-dsh-inputbar]:has([role='tooltip'], [role='menu'], [role='dialog'], [role='listbox']) {\r\n  z-index: auto;\r\n}\r\n\r\n/* ---------- Settings panel glass: material-only — a scheme-differentiated\r\n   translucent fill, applied in BOTH modes (the gate is data-dsh-aqua, not\r\n   the float attribute). The panel keeps its stock layout, tokens and radius;\r\n   only the surface turns glass. isolation:isolate keeps fixed descendants\r\n   (tooltips/menus inside the panel) anchored to the viewport, and the\r\n   backdrop blur moved to a ::before layer (see the dialog glass block\r\n   below) so it can never re-anchor them. The `body` hop out-ranks the\r\n   compat generic glass (blur 12px on `panel` classes). ---------- */\r\n[data-dsh-aqua] body [role='dialog'] {\r\n  isolation: isolate;\r\n  background: rgba(255, 255, 255, 0.45);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] {\r\n  background: rgba(17, 26, 39, 0.55);\r\n}\r\n\r\n/* ---------- Sidebar: the selected session gets an accent bar and a soft halo. ---------- */\r\n[data-dsh-float] [role='treeitem'][aria-selected='true'] {\r\n  box-shadow:\r\n    inset 2px 0 0 var(--dsw-specific-sidebar-nav-item-active-accent),\r\n    0 0 16px rgba(110, 155, 232, 0.14);\r\n}\r\n\r\n/* ---------- Hover light: buttons and menu cells answer with a soft blue ring. ---------- */\r\n[data-dsh-float] button[class*='button']:hover:not(:disabled),\r\n[data-dsh-float] [role='menuitem']:hover:not(:disabled) {\r\n  box-shadow:\r\n    0 0 12px rgba(110, 155, 232, 0.16),\r\n    inset 0 0 0 1px rgba(148, 180, 220, 0.22);\r\n}\r\n\r\n/* Glass surfaces: menus and dialogs follow the site's frosted recipe\r\n   (standard `backdrop-filter` only —see the composer card note). */\r\n[data-dsh-float] [role='menu'] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(62% * var(--dsh-aqua-frost, 1)), transparent);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n/* Dialogs keep their native token surface (bg-layer-2) and radius; no\r\n   translucent override and no backdrop blur —the override made the panel\r\n   muddy and the blur scrambled its fixed-position layout. */\r\n[data-dsh-float] body[data-ds-dark-theme] [role='menu'] {\r\n  background: color-mix(in srgb, rgb(28 32 42) calc(68% * var(--dsh-aqua-frost, 1)), transparent);\r\n}\r\n\r\n/* ---------- Page edge fades: 5px gradient blur bands pinned to the top and\r\n   bottom of the viewport. They sit BELOW the floating glass (the header\r\n   card, composer card, and sidebar card hold z-index 8) but ABOVE the\r\n   scrolling chat content (z 7 > the code banner's 6) — content melting\r\n   into an edge passes under the blur, the glass itself stays sharp. A\r\n   faint scheme veil rides along: a touch of white on light, a touch of\r\n   black on dark. Click-transparent, so nothing is blocked. ---------- */\r\n[data-dsh-aqua] [data-dsh-aqua-fade] {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  height: 13px;\r\n  z-index: 7;\r\n  pointer-events: none;\r\n  backdrop-filter: blur(5px);\r\n  /* Whisper-thin veil: at the clear-frost defaults the fade shows through\r\n     the glass panes, so it must stay barely there (a 0.45 black read as a\r\n     film under the trajectory/stats glass). */\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-dsh-aqua-fade] {\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-fade='top'] {\r\n  top: 0;\r\n  -webkit-mask-image: linear-gradient(180deg, black 0%, transparent 100%);\r\n  mask-image: linear-gradient(180deg, black 0%, transparent 100%);\r\n}\r\n\r\n[data-dsh-aqua] [data-dsh-aqua-fade='bottom'] {\r\n  bottom: 0;\r\n  -webkit-mask-image: linear-gradient(0deg, black 0%, transparent 100%);\r\n  mask-image: linear-gradient(0deg, black 0%, transparent 100%);\r\n}\r\n\r\n/* ---------- Keyboard focus and text selection (both schemes). ---------- */\r\n[data-dsh-aqua] :focus-visible {\r\n  outline: 2px solid rgba(110, 155, 232, 0.85);\r\n  outline-offset: 1px;\r\n}\r\n\r\n/* 侧边栏会话搜索框：焦点由展开胶囊的边框与光标表达，豁免全局焦点环，\r\n   否则聚焦时输入框上会多出一个意外的蓝色矩形。 */\r\n[data-dsh-aqua] [data-dsh-sidebar-root] input:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n[data-dsh-aqua] ::selection {\r\n  background: rgba(110, 155, 232, 0.35);\r\n}\r\n\r\n/* ---------- Display typography: the serif face marks headings and the\r\n   session tree, so the page reads in two voices —serif headings over the\r\n   sans body. Space Grotesk keeps Latin/digits in the same stack. ---------- */\r\n\r\n/* Chat text: a 1px halo blurs the backdrop right at the glyph edges (the\r\n   closest CSS can get to \"frost the background near the text\"), plus a\r\n   whisper of drop shadow in light mode. */\r\n[data-dsh-aqua] [data-conversation-scroll] {\r\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n[data-dsh-aqua] body:not([data-ds-dark-theme]) [data-conversation-scroll] {\r\n  text-shadow: 0 0 1px rgba(255, 255, 255, 0.55), 0 1px 2px rgba(19, 45, 83, 0.08);\r\n}\r\n\r\n[data-dsh-float] [role='dialog'] h2 {\r\n  font-family: 'Space Grotesk Variable', 'Noto Serif SC', 'Songti SC', 'STSong', 'SimSun', serif;\r\n  font-weight: 600;\r\n  letter-spacing: 0.02em;\r\n}\r\n\r\n[data-dsh-float] [role='treeitem'] {\r\n  font-family: 'Space Grotesk Variable', 'Noto Serif SC', 'Songti SC', 'STSong', 'SimSun', serif;\r\n  font-weight: 500;\r\n}\r\n\r\n/* ---------- Page-level transitions: phase flips, view tabs, entrances.\r\n   Container-level animations are opacity-only —a running transform would\r\n   re-anchor position:fixed descendants (menus/modals) mid-flight. ---------- */\r\n[data-dsh-float] [data-phase='hero'] {\r\n  animation: dsh-aqua-hero-in 0.32s var(--ds-ease-in-out);\r\n}\r\n\r\n[data-dsh-float] [data-phase='active'] {\r\n  animation: dsh-aqua-active-in 0.3s var(--ds-ease-in-out);\r\n}\r\n\r\n[data-dsh-float] [data-testid^='view-'] {\r\n  animation: dsh-aqua-view-in 0.26s var(--ds-ease-in-out);\r\n}\r\n\r\n/* The user message fades in WITHOUT the translateY rise: a transform makes\r\n   the mounting row contribute to the scroll container's scrollable overflow\r\n   for as long as the animation runs — on a tall first message (its bottom\r\n   edge close to the composer seat) that exposed a vertical scrollbar flash\r\n   exactly in the \"sent, waiting for the first token\" state, when the token\r\n   stats line below the composer does not exist yet. Tool rows keep the\r\n   rise: they mount while the response is already streaming, when a\r\n   scrollbar is expected and never reads as accidental. */\r\n[data-dsh-float] [class*='userRow'] {\r\n  animation: dsh-aqua-fade 0.28s var(--ds-ease-in-out) both;\r\n}\r\n\r\n[data-dsh-float] [data-tool] {\r\n  animation: dsh-aqua-rise 0.3s var(--ds-ease-in-out) both;\r\n}\r\n\r\n/* No entrance animation on dialogs: an opacity fade makes the panel a\r\n   temporary backdrop root (opacity < 1) while it runs, so a frosted ::before\r\n   would pop in the moment the fade ends — a visible flash. Panels appear\r\n   instantly, matching the Host's own modals. */\r\n\r\n@keyframes dsh-aqua-hero-in {\r\n  from { opacity: 0; }\r\n}\r\n\r\n@keyframes dsh-aqua-active-in {\r\n  from { opacity: 0; }\r\n}\r\n\r\n@keyframes dsh-aqua-view-in {\r\n  from { opacity: 0; }\r\n}\r\n\r\n@keyframes dsh-aqua-rise {\r\n  from { opacity: 0; transform: translateY(6px); }\r\n}\r\n\r\n@keyframes dsh-aqua-fade {\r\n  from { opacity: 0; }\r\n}\r\n\r\n/* No entrance animation on dialogs at all (keyframes removed): an opacity\r\n   fade makes the panel a temporary backdrop root (opacity < 1) while it runs,\r\n   so a frosted ::before pops in the moment the fade ends — a visible flash.\r\n   Panels appear instantly, matching the Host's own modals. */\r\n\r\n/* ---------- Compatibility mode: stock layout, generic glass material.\r\n   The layout rules above are gated on data-dsh-float, so in compat mode the\r\n   stock layout stays byte-for-byte. The translucent surface fill comes from\r\n   the compat token layer (every surface consuming the shared design tokens\r\n   turns glass automatically); these rules add the frosted blur on the\r\n   conservative surface families — menus, cards, bubbles, dropdowns,\r\n   tooltips, panels — so OTHER plugins' UI gets the same glass with zero\r\n   coordination. Dialogs keep their stock surface (no blur: a backdrop-filter\r\n   on [role='dialog'] scrambles its fixed-position layout). ---------- */\r\n[data-dsh-compat] [role='menu'],\r\n[data-dsh-compat] [role='tooltip'],\r\n[data-dsh-compat] [class*='card'],\r\n[data-dsh-compat] [class*='bubble'],\r\n[data-dsh-compat] [class*='panel'],\r\n[data-dsh-compat] [class*='popover'],\r\n[data-dsh-compat] [class*='dropdown'] {\r\n  backdrop-filter: blur(12px);\r\n}\r\n\r\n/* ---------- Reduced motion: keep the static look, drop every effect. ---------- */\r\n@media (prefers-reduced-motion: reduce) {\r\n  [data-dsh-float] [data-phase='hero'],\r\n  [data-dsh-float] [data-phase='active'],\r\n  [data-dsh-float] [data-testid^='view-'],\r\n  [data-dsh-float] [class*='userRow'],\r\n  [data-dsh-float] [data-tool],\r\n  [data-dsh-float] [role='dialog'],\r\n  [data-dsh-aqua] [data-dsh-aqua-ambient],\r\n  [data-dsh-aqua] [data-aqua-critter] {\r\n    animation: none;\r\n  }\r\n\r\n  /* The tilt is skipped in JS under reduced motion (spotlight.ts checks the\r\n     media query); the glow stays as a plain hover wash. */\r\n\r\n  [data-dsh-aqua] [data-aqua-critter='bubble'] {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* ============ Aqua compatibility patch (tokenledger + future plugins) ============\r\n   Fixes integration with third-party plugins (e.g. dsh-tokenledger). */\r\n\r\n/* 1) Menus / pickers / tooltips: translucent glass (the listbox/tooltip\r\n      carry their own backdrop blur now) so foreground text stays readable\r\n      without going near-opaque. */\r\n[data-dsh-aqua] [role='menu'],\r\n[data-dsh-aqua] [role='listbox'],\r\n[data-dsh-aqua] [role='tooltip'] {\r\n  background: #f6f8fcb3;\r\n}\r\n\r\n[data-dsh-aqua] [role='listbox'],\r\n[data-dsh-aqua] [role='tooltip'] {\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='menu'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='listbox'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='tooltip'] {\r\n  background: #151a24a6;\r\n}\r\n\r\n/* 2) Floating panels must escape the sidebar/frame instead of being clipped. */\r\n[data-dsh-aqua] [class*='sidebarCol']:has([role='dialog']),\r\n[data-dsh-aqua] [data-dsh-frame]:has([role='dialog']) {\r\n  overflow: visible !important;\r\n  transform: none !important;\r\n}\r\n\r\n/* 3) Dialog glass: translucent fill + inner highlight only — NO backdrop blur.\r\n      The dialog mounts inside the sidebar with `isolation: isolate`, which\r\n      makes the dialog its own backdrop root: a ::before blur can only sample\r\n      the dialog's own translucent fill, never the page behind it. That bogus\r\n      layer captured an inconsistent backdrop on its first frame after mount —\r\n      the panel-area brightness jump when settings / usage-ledger open. The\r\n      frosted look behind dialogs comes from the Host's own modal mask (e.g.\r\n      VOzbGW_mask: 55% fill + blur(2px)), so the theme only tints. Fills sit\r\n      slightly denser than the original 60/65% to compensate for the removed\r\n      double-paint layer. isolation:isolate stays: it keeps the dialog's\r\n      paint order self-contained. */\r\n[data-dsh-aqua] body [role='dialog'] {\r\n  isolation: isolate;\r\n  background: rgba(246, 248, 252, 0.75);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] {\r\n  background: rgba(17, 26, 39, 0.72);\r\n}\r\n\r\n/* 4) Tokenledger badge: transparent by default, soft slate hover/active. */\r\n[data-dsh-aqua] .tkl_badge {\r\n  background: transparent;\r\n}\r\n\r\n[data-dsh-aqua] .tkl_badge:hover,\r\n[data-dsh-aqua] .tkl_badge[data-active] {\r\n  background: rgba(126, 164, 223, 0.1);\r\n}\r\n\r\n/* 5) Controls inside ANY dialog (settings page + third-party plugin windows)\r\n      turn glass: raised translucent chips, NO backdrop blur. Inside the\r\n      isolated dialog a blur can only sample the dialog's own fill anyway,\r\n      and it re-captures on every plugin data refresh — the ledger's\r\n      账户/今日/本月/累计 boxes flashed on each reload. Fills are fixed\r\n      rgba (not the frost variables): the frost slider bottoms out near 7%\r\n      alpha, which made these small controls nearly invisible. */\r\n[data-dsh-aqua] [role='dialog'] button[class*='stat'],\r\n[data-dsh-aqua] [role='dialog'] button[class*='selector'],\r\n[data-dsh-aqua] [role='dialog'] button[class*='select'],\r\n[data-dsh-aqua] [role='dialog'] button[class*='Select'],\r\n[data-dsh-aqua] [role='dialog'] select,\r\n[data-dsh-aqua] [role='dialog'] [class*='badge'],\r\n[data-dsh-aqua] [role='dialog'] [class*='chip'],\r\n[data-dsh-aqua] [role='dialog'] [class*='pill'],\r\n[data-dsh-aqua] [role='dialog'] [class*='tag'] {\r\n  background: rgba(255, 255, 255, 0.62);\r\n  border: 1px solid rgba(19, 45, 83, 0.22);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='stat'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='selector'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='select'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='Select'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] select,\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='badge'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='chip'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='pill'],\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='tag'] {\r\n  background: rgba(30, 44, 64, 0.62);\r\n  border-color: rgba(148, 180, 220, 0.28);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);\r\n}\r\n\r\n/* State-kept variants: the settings nav's active cell and the selected\r\n   appearance cube keep their accent as a glass wash instead of the stock\r\n   opaque near-black slabs. */\r\n[data-dsh-aqua] [role='dialog'] button[class*='navCell'][class*='active'] {\r\n  background: rgba(110, 155, 232, 0.16);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='navCell'][class*='active'] {\r\n  background: rgba(110, 155, 232, 0.2);\r\n}\r\n\r\n[data-dsh-aqua] [role='dialog'] button[class*='themeCube'][class*='selected'] {\r\n  background: rgba(110, 155, 232, 0.14);\r\n  border-color: rgba(110, 155, 232, 0.55);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] button[class*='themeCube'][class*='selected'] {\r\n  background: rgba(110, 155, 232, 0.16);\r\n}\r\n\r\n/* 5b) Frosted panel glass for plugin dialogs. The Host renders its dialogs\r\n      (VOzbGW_ prefix) over its own full-viewport mask (55% fill + blur 2px),\r\n      so their panels read blurred+dark. Plugin windows (tokenledger 等) ship\r\n      without any mask, so the SAME 72% fill sat on the raw page — visibly\r\n      lighter and sharp. Reproduce the exact settings-panel backdrop ON the\r\n      panel only: `isolation: auto` (isolate would cage the ::before into\r\n      self-sampling — the dialog must NOT be a backdrop root) and a ::before\r\n      carrying blur(2px) plus the two host layers flattened into one fill.\r\n      Flattened alpha: 1-(1-.55)(1-.72)=.874 dark / 1-(1-.55)(1-.75)=.888 light;\r\n      color = mask over fill premultiplied. Everything OUTSIDE the panel stays\r\n      untouched — no whole-page blur. position:fixed panels already form a\r\n      stacking context, so the z-index:-1 layer stays put without isolation. */\r\n[data-dsh-aqua] body [role='dialog']:not([class*='VOzbGW_']) {\r\n  isolation: auto;\r\n  background: transparent;\r\n}\r\n\r\n[data-dsh-aqua] body [role='dialog']:not([class*='VOzbGW_'])::before {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  border-radius: inherit;\r\n  background: rgba(185, 187, 191, 0.888);\r\n  backdrop-filter: blur(2px);\r\n  z-index: -1;\r\n  pointer-events: none;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog']:not([class*='VOzbGW_'])::before {\r\n  background: rgba(13, 20, 30, 0.874);\r\n}\r\n\r\n/* 5c) Cards inside any dialog: plugin cards, marketplace cards — glass slabs\r\n      instead of opaque #1C2A3D. Both 'card' and 'Card' spellings are matched\r\n      (attribute selectors are case-sensitive), so newly installed plugins get\r\n      the same treatment for free. Fill ONLY — no border: the blanket match\r\n      also reaches card internals and dropdown option cards, and painted\r\n      borders there read as stray lines (stock surfaces are borderless).\r\n      List CONTAINERS (*cards* ULs) are excluded: tinting them filled the\r\n      gaps between cards with the glass color instead of leaving them\r\n      transparent. */\r\n[data-dsh-aqua] [role='dialog'] [class*='card']:not(ul):not([class*='cards']),\r\n[data-dsh-aqua] [role='dialog'] [class*='Card']:not(ul):not([class*='cards']) {\r\n  background: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='card']:not(ul):not([class*='cards']),\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='Card']:not(ul):not([class*='cards']) {\r\n  background: rgba(30, 44, 64, 0.45);\r\n}\r\n\r\n/* 5d) Aqua-section form controls: the on-toggle keeps its state as an accent\r\n      glass wash; range tracks turn translucent instead of stock gray. */\r\n[data-dsh-aqua] [role='dialog'] [class*='toggleOn'] {\r\n  background: rgba(110, 155, 232, 0.35);\r\n}\r\n\r\n[data-dsh-aqua] [role='dialog'] input[class*='slider'] {\r\n  background: rgba(19, 45, 83, 0.18);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='toggleOn'] {\r\n  background: rgba(110, 155, 232, 0.4);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] input[class*='slider'] {\r\n  background: rgba(148, 180, 220, 0.18);\r\n}\r\n\r\n/* 5e) Remaining state/field surfaces: active segments of segmented toggles,\r\n      numeric inputs, and any element a plugin styles INLINE with the host's\r\n      opaque bg-layer tokens (inline styles beat any stylesheet rule, so the\r\n      override needs !important — e.g. the ModLens provider info box). */\r\n[data-dsh-aqua] [role='dialog'] [class*='segActive'] {\r\n  background: rgba(110, 155, 232, 0.28);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [class*='segActive'] {\r\n  background: rgba(110, 155, 232, 0.32);\r\n}\r\n\r\n[data-dsh-aqua] [role='dialog'] input[class*='number'] {\r\n  background: rgba(255, 255, 255, 0.62);\r\n  border: 1px solid rgba(19, 45, 83, 0.22);\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] input[class*='number'] {\r\n  background: rgba(30, 44, 64, 0.62);\r\n  border-color: rgba(148, 180, 220, 0.28);\r\n}\r\n\r\n[data-dsh-aqua] [role='dialog'] [style*='--dsw-alias-bg-layer-'] {\r\n  background: rgba(255, 255, 255, 0.5) !important;\r\n  border-color: rgba(19, 45, 83, 0.14) !important;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='dialog'] [style*='--dsw-alias-bg-layer-'] {\r\n  background: rgba(30, 44, 64, 0.45) !important;\r\n  border-color: rgba(148, 180, 220, 0.16) !important;\r\n}\r\n\r\n/* 5f) Sidebar button bubbles: while a [role=tooltip] bubble is up inside the\r\n      sidebar, EVERY wrapper between it and the sidebar col must release\r\n      overflow clipping — the bubble is viewport-anchored and pokes out of\r\n      those boxes. Generic `:has` forms so future buttons and wrappers are\r\n      covered automatically.\r\n      BOTH html-attribute gates are load-bearing and both are stamped by the\r\n      seam stamper (data-dsh-dialog-open / data-dsh-sidebar-bubble):\r\n      - `not([data-dsh-dialog-open])`: while a settings / plugin dialog is\r\n        mounted inside the column, these same wrappers are the dialog's own\r\n        scroll containers (the marketplace list clips at its panel).\r\n        Releasing their overflow on every tooltip mount — the plugin cards'\r\n        download/star counts carry exact-number tooltips — turned the list\r\n        into unclipped spill: the panel toggled visible↔hidden as tooltips\r\n        came and went, the scroll position jumped, and hovering the counts\r\n        fed a mount/unmount loop (the \"marketplace jitter\", worse while\r\n        scrolling). Inside a dialog no release is needed anyway: the pane is\r\n        transform-free while a dialog exists, so the host's viewport-anchored\r\n        tooltips escape clipping on their own — exactly the stock behavior.\r\n      - `[data-dsh-sidebar-bubble]`: the release may only run while a\r\n        sidebar tooltip actually exists. Evaluating the `:has` forms costs\r\n        real time on every sidebar mutation (the session tree alone is\r\n        hundreds of nodes; settings dialogs mount thousands), which showed\r\n        up as jank when collapsing the sidebar or opening settings. With the\r\n        gate the selector fails at the cheap html-attribute check and the\r\n        `:has` machinery is only paid on the rare frames a bubble is up. */\r\n[data-dsh-aqua][data-dsh-sidebar-bubble]:not([data-dsh-dialog-open]) [class*='sidebarCol']:has([role='tooltip']),\r\n[data-dsh-aqua][data-dsh-sidebar-bubble]:not([data-dsh-dialog-open]) [class*='sidebarCol'] :has([role='tooltip']) {\r\n  overflow: visible !important;\r\n}\r\n\r\n[data-dsh-aqua] [role='tooltip'] {\r\n  color: #1a2438;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [role='tooltip'] {\r\n  color: #eaf2fc;\r\n}\r\n\r\n/* 5g) Session hover card (full title + status, fixed, mounted at root):\r\n      stock is an opaque gray slab — glass it, text per mode. The class is a\r\n      CSS-module hash of the current Host build. */\r\n[data-dsh-aqua] [class*='_card_1b2ny'] {\r\n  background: rgba(246, 248, 252, 0.82);\r\n  border: 1px solid rgba(19, 45, 83, 0.16);\r\n  backdrop-filter: blur(14px);\r\n  color: #1a2438;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [class*='_card_1b2ny'] {\r\n  background: rgba(21, 26, 36, 0.78);\r\n  border-color: rgba(148, 180, 220, 0.2);\r\n  color: #eaf2fc;\r\n}\r\n\r\n/* 6) Native <select> fallback for third-party plugin dialogs: theme the\r\n      control itself and give the OS popup list scheme-locked, opaque\r\n      theme colors (the native popup ignores glass but must not flash\r\n      bright white in dark mode). */\r\n[data-dsh-aqua] select {\r\n  color-scheme: light;\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  border: 1px solid rgba(19, 45, 83, 0.26);\r\n  border-radius: 8px;\r\n  font-size: 12px;\r\n  color: var(--dsw-alias-label-primary);\r\n  cursor: pointer;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] select {\r\n  color-scheme: dark;\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n}\r\n\r\n[data-dsh-aqua] select option,\r\n[data-dsh-aqua] select optgroup {\r\n  background: #f6f8fc;\r\n  color: #13243e;\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] select option,\r\n[data-dsh-aqua] body[data-ds-dark-theme] select optgroup {\r\n  background: #151a24;\r\n  color: #eaf2fc;\r\n}\r\n\r\n/* ============ Agent todo-list glass adaptation ============\r\n   The agent's task-list tool (\"todo_write\" write capsule) and the todo\r\n   panel (\"todo-panel\") pick up the theme's glass recipe: translucent\r\n   scheme fill + adjustable backdrop blur + inner highlight, dark mode\r\n   through the paired --dsh-aqua-glass-card-* variables. */\r\n\r\n/* The tool capsule: a small frosted pill that reads as part of the glass\r\n   scene instead of a solid token. */\r\n[data-dsh-aqua] [data-tool='todo_write'] {\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  border: 1px solid rgba(19, 45, 83, 0.2);\r\n  border-radius: 10px;\r\n  padding: 3px 8px;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-tool='todo_write'] {\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  border-color: rgba(148, 180, 220, 0.2);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);\r\n}\r\n\r\n/* The task-list panel: full glass card (fill + blur + inner highlight +\r\n   soft drop shadow), same recipe as the other floating panes. */\r\n[data-dsh-aqua] [data-testid='todo-panel'] {\r\n  background: var(--dsh-aqua-glass-card-light);\r\n  border-color: rgba(19, 45, 83, 0.26);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.5),\r\n    0 10px 36px rgba(19, 45, 83, 0.16);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-aqua] body[data-ds-dark-theme] [data-testid='todo-panel'] {\r\n  background: var(--dsh-aqua-glass-card-dark);\r\n  border-color: rgba(148, 180, 220, 0.32);\r\n  box-shadow:\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.07),\r\n    0 10px 36px rgba(2, 6, 14, 0.5);\r\n}\r\n\r\n/* ============ View pages & anchored popover shells (v1.4.7) ============ */\r\n\r\n/* Plugin view pages: the conversation.view slot hosts whichever tab view is\r\n   active — dsh-context's 上下文 today, any future plugin's page tomorrow\r\n   (the stamper marks those roots data-dsh-view and skips the 对话 chat).\r\n   The shared layer tokens turn translucent inside a view, so EVERY surface\r\n   the plugin paints with the design tokens becomes glass with zero\r\n   coordination. The trajectory overlay rides the same override: its\r\n   timeline split / table / plot / search paint the same tokens and used to\r\n   read as opaque dark slabs inside the glass board. Frost rides the frost\r\n   knob like every other glass surface. */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-view],\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-trajectory] {\r\n  --dsw-alias-bg-layer-1: color-mix(in srgb, rgb(255 255 255) calc(42% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-layer-2: color-mix(in srgb, rgb(236 242 250) calc(30% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-layer-3: color-mix(in srgb, rgb(226 235 247) calc(24% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-overlay: color-mix(in srgb, rgb(255 255 255) calc(48% * var(--dsh-aqua-frost, 1)), transparent);\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-float] body[data-ds-dark-theme] [data-dsh-view],\r\n[data-dsh-aqua][data-dsh-float] body[data-ds-dark-theme] [data-dsh-trajectory] {\r\n  --dsw-alias-bg-layer-1: color-mix(in srgb, rgb(34 38 47) calc(50% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-layer-2: color-mix(in srgb, rgb(30 36 46) calc(40% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-layer-3: color-mix(in srgb, rgb(28 42 61) calc(32% * var(--dsh-aqua-frost, 1)), transparent);\r\n  --dsw-alias-bg-overlay: color-mix(in srgb, rgb(34 51 74) calc(45% * var(--dsh-aqua-frost, 1)), transparent);\r\n}\r\n\r\n/* Card-family surfaces inside a view get the frosted blur (the fill comes\r\n   from the token override above; the stock hairline and radius stay).\r\n   The stamper turns these same surfaces into tilt spots, so the\r\n   rectangular panes of a view press and glow like the rest of the glass. */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-view] [class*='card']:not(ul):not([class*='cards']),\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-view] [class*='Card']:not(ul):not([class*='cards']) {\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n/* Inline token paints inside a view flatten to the glass fill too — inline\r\n   styles beat any class rule, so the override needs !important (same\r\n   pattern as the dialog rule 5e; plugins that style surfaces inline with\r\n   the layer tokens would otherwise stay opaque islands). */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-view] [style*='--dsw-alias-bg-layer-'] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(42% * var(--dsh-aqua-frost, 1)), transparent) !important;\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-float] body[data-ds-dark-theme] [data-dsh-view] [style*='--dsw-alias-bg-layer-'] {\r\n  background: color-mix(in srgb, rgb(34 38 47) calc(50% * var(--dsh-aqua-frost, 1)), transparent) !important;\r\n}\r\n\r\n/* Anchored popover shells: the positioned wrapper the app paints an opaque\r\n   layer token on (the composer command list's menu shell around its\r\n   role=listbox viewport). The shell turns glass and the role'd surface\r\n   inside stops double-painting its own translucent fill against what used\r\n   to be an opaque parent — the command list reads as one frosted pane over\r\n   the page instead of a solid slab. The seam is stamped by the stamper only\r\n   around ANCHORED (static/absolute) popovers whose shell actually paints:\r\n   fixed dialogs keep the Host's own mask, transparent positioner wrappers\r\n   are skipped, and a shell inside a tilt pane never gets stamped (it rides\r\n   the pane's tilt instead). Radius, border and shadow stay stock. */\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-popover-shell] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(62% * var(--dsh-aqua-frost, 1)), transparent);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-float] body[data-ds-dark-theme] [data-dsh-popover-shell] {\r\n  background: color-mix(in srgb, rgb(28 32 42) calc(68% * var(--dsh-aqua-frost, 1)), transparent);\r\n}\r\n\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-popover-shell] > [role='listbox'],\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-popover-shell] > [role='menu'],\r\n[data-dsh-aqua][data-dsh-float] [data-dsh-popover-shell] > [role='dialog'] {\r\n  background: transparent;\r\n  backdrop-filter: none;\r\n}\r\n\r\n/* ---------- Code-surface expand strip (the 查看 / 展开 button under\r\n   truncated read / search / terminal blocks) ---------- */\r\n/* The strip is part of the code block's material, so it rides the DEDICATED\r\n   code frost knob (--dsh-aqua-code-frost, the 代码块磨砂度 slider) — not the\r\n   global frost: it sits on the block's own glass and reads as a recessed\r\n   footer separated by the stock hairline. */\r\n[data-dsh-float] [class*='block'] button[class*='expand'] {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(30% * var(--dsh-aqua-code-frost, 1)), transparent);\r\n  border-top: 1px solid rgba(19, 45, 83, 0.14);\r\n  backdrop-filter: blur(var(--dsh-aqua-blur, 14px));\r\n}\r\n\r\n[data-dsh-float] [class*='block'] button[class*='expand']:hover {\r\n  background: color-mix(in srgb, rgb(255 255 255) calc(50% * var(--dsh-aqua-code-frost, 1)), transparent);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [class*='block'] button[class*='expand'] {\r\n  background: color-mix(in srgb, rgb(23 35 52) calc(40% * var(--dsh-aqua-code-frost, 1)), transparent);\r\n  border-top-color: rgba(148, 180, 220, 0.14);\r\n}\r\n\r\n[data-dsh-float] body[data-ds-dark-theme] [class*='block'] button[class*='expand']:hover {\r\n  background: color-mix(in srgb, rgb(30 44 64) calc(55% * var(--dsh-aqua-code-frost, 1)), transparent);\r\n}\r\n\r\n\r\n\r\n";
const tagId$1 = "@deepseek-ai/dsh-client-ui-seaglass/aqua.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
	const tag = document.createElement("style");
	tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-seaglass";
	tag.dataset.pluginCss = tagId$1;
	tag.textContent = css$1;
	document.head.appendChild(tag);
}
var aqua_module_default = {};

//#endregion
//#region \0dsh-css:C:\Users\Administrator\Desktop\dsh_workspace\dsh-client-ui-seaglass\src\client\fonts.module.aqcss
const css = "/* Space Grotesk Variable, self-hosted (base64 data URLs) so the Aqua layer\r\n   keeps its Latin web face with no shell/fontsource dependency. CJK display\r\n   text intentionally rides the system serif fallback (Songti/STSong/SimSun) —\r\n   Noto Serif SC is a multi-MB unicode-range face that cannot ship in a plugin. */\r\n@font-face {\r\n  font-family: 'Space Grotesk Variable';\r\n  font-style: normal;\r\n  font-display: swap;\r\n  font-weight: 300 700;\r\n  src: url(data:font/woff2;base64,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) format('woff2-variations');\r\n  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Space Grotesk Variable';\r\n  font-style: normal;\r\n  font-display: swap;\r\n  font-weight: 300 700;\r\n  src: url(data:font/woff2;base64,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) format('woff2-variations');\r\n  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Space Grotesk Variable';\r\n  font-style: normal;\r\n  font-display: swap;\r\n  font-weight: 300 700;\r\n  src: url(data:font/woff2;base64,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) format('woff2-variations');\r\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\r\n}";
const tagId = "@deepseek-ai/dsh-client-ui-seaglass/fonts.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
	const tag = document.createElement("style");
	tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-seaglass";
	tag.dataset.pluginCss = tagId;
	tag.textContent = css;
	document.head.appendChild(tag);
}
var fonts_module_default = {};

//#endregion
//#region src/client/index.ts
/** Required services: theme override stack plus the settings-card surfaces. */
const inject = [
	"theme",
	"slots",
	"locale",
	"settingsScope"
];
/**
* Read the pre-settings-namespace enable flag without confusing an absent
* key with an explicitly stored `false` value.
*/
function readLegacyEnabled() {
	try {
		const raw = localStorage.getItem(AQUA_ENABLED_KEY);
		return raw === null ? undefined : raw === "true";
	} catch {
		return undefined;
	}
}
/**
* Client plugin body.
* @param ctx - client cordis context.
*/
function apply(ctx) {
	ctx.effect(() => ctx.locale.register(NS, {
		zh,
		en
	}), "ui-aqua: settings dictionaries");
	const layer = new AquaLayer(ctx);
	const settings = ctx.settingsScope.bind({ namespace: AQUA_SETTINGS_NAMESPACE });
	let legacyMigrationAttempted = false;
	const syncHostEnabled = () => {
		const remembered = readLegacyEnabled();
		if (remembered !== undefined) {
			legacyMigrationAttempted = true;
			layer.setEnabled(remembered);
			return;
		}
		const snapshot = settings.getSnapshot();
		if (snapshot.status !== "ready" || typeof snapshot.value?.enabled !== "boolean") return;
		const user = snapshot.user;
		const hasHostEnabled = typeof user === "object" && user !== null && !Array.isArray(user) && Object.prototype.hasOwnProperty.call(user, "enabled");
		if (hasHostEnabled) {
			legacyMigrationAttempted = true;
			layer.setEnabled(snapshot.value.enabled);
			writeEnabled(snapshot.value.enabled);
			return;
		}
		layer.setEnabled(snapshot.value.enabled);
		writeEnabled(snapshot.value.enabled);
	};
	ctx.effect(() => {
		const dispose = settings.subscribe(syncHostEnabled);
		syncHostEnabled();
		return dispose;
	}, "ui-aqua: settings mirror");
	const appearanceStore = createAquaRowStore();
	let appearanceBound;
	let revision = 0;
	const payload = () => {
		const s = layer.getSettings();
		return {
			enabled: layer.getEnabled(),
			mode: s.mode,
			blur: s.blur,
			frost: s.frost,
			codeFrost: s.codeFrost,
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
			fontCjk: s.fontCjk
		};
	};
	const sync = () => {
		const next = payload();
		appearanceBound?.sync(next, revision);
		revision += 1;
	};
	ctx.effect(() => ctx.on("theme/change", () => {
		sync();
	}), "ui-aqua: appearance scheme sync");
	const appearanceInjected = (actions) => {
		appearanceBound = actions;
		sync();
		return {
			setMode: (mode) => {
				layer.setMode(mode);
				sync();
			},
			setBlur: (blur) => {
				layer.setBlur(blur);
				sync();
			},
			setFrost: (frost) => {
				layer.setFrost(frost);
				sync();
			},
			setCodeFrost: (codeFrost) => {
				layer.setCodeFrost(codeFrost);
				sync();
			},
			setFluidHue: (fluidHue) => {
				layer.setFluidHue(fluidHue);
				sync();
			},
			setFluidDepth: (fluidDepth) => {
				layer.setFluidDepth(fluidDepth);
				sync();
			},
			setBgBrightness: (bgBrightness) => {
				layer.setBgBrightness(bgBrightness);
				sync();
			},
			setBackground: (background) => {
				layer.setBackground(background);
				sync();
			},
			setWallpaper: (wallpaper) => {
				layer.setWallpaper(wallpaper);
				sync();
			},
			setWhale: (whale) => {
				layer.setWhale(whale);
				sync();
			},
			setCritters: (critters) => {
				layer.setCritters(critters);
				sync();
			},
			setMesh: (mesh) => {
				layer.setMesh(mesh);
				sync();
			},
			setSpotlight: (spotlight) => {
				layer.setSpotlight(spotlight);
				sync();
			},
			setPress: (press) => {
				layer.setPress(press);
				sync();
			},
			setWallpaperBlur: (wallpaperBlur) => {
				layer.setWallpaperBlur(wallpaperBlur);
				sync();
			},
			setWallpaperFrost: (wallpaperFrost) => {
				layer.setWallpaperFrost(wallpaperFrost);
				sync();
			},
			setVideoBlur: (videoBlur) => {
				layer.setVideoBlur(videoBlur);
				sync();
			},
			setVideoBrightness: (videoBrightness) => {
				layer.setVideoBrightness(videoBrightness);
				sync();
			},
			setFontLatin: (fontLatin) => {
				layer.setFontLatin(fontLatin);
				sync();
			},
			setFontCjk: (fontCjk) => {
				layer.setFontCjk(fontCjk);
				sync();
			},
			setEnabled: (enabled) => {
				layer.setEnabled(enabled);
				void settings.set("enabled", enabled);
				sync();
			},
			authorizeVideo: () => {
				layer.authorizeVideo();
			}
		};
	};
	const t = ctx.locale.bind(NS);
	ctx.slots.inject("settings.section", () => ctx.slots.register({
		name: "settings.section",
		id: "aqua",
		order: 5,
		label: () => t("aqua.nav"),
		locale: NS,
		store: appearanceStore,
		inject: appearanceInjected
	}, AquaAppearanceRow));
}

//#endregion
exports.apply = apply;
exports.inject = inject;

		return module.exports;
	}
});
//# sourceMappingURL=client.js.map