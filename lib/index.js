import z from "@deepseek-ai/schemastery";

//#region src/aqua-settings-constants.ts
/** Settings namespace shared by the Host registration and browser card. */
const AQUA_SETTINGS_NAMESPACE = "ui-aqua";
/** Field carrying the durable layer enable flag. */
const AQUA_ENABLED_FIELD = "enabled";

//#endregion
//#region src/aqua-settings.ts
/** Aqua theme-layer preference stored in the Host user-settings document. */
/** Default state when the user-settings document has no override: on. */
const DEFAULT_ENABLED = true;
/** Durable schema shared by the Host registration and browser settings scope. */
const AquaSettingsSchema = z.object({ [AQUA_ENABLED_FIELD]: z.boolean().default(true) });

//#endregion
//#region src/index.ts
/** Register the Aqua settings namespace when the Host settings service exists. */
function apply(ctx) {
	ctx.inject(["settings"], (settingsCtx) => {
		settingsCtx.settings.register(AQUA_SETTINGS_NAMESPACE, AquaSettingsSchema);
	});
}

//#endregion
export { AQUA_ENABLED_FIELD, AQUA_SETTINGS_NAMESPACE, AquaSettingsSchema, DEFAULT_ENABLED, apply };