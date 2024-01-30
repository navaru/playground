import { defineConfig } from "@pandacss/dev"
import { createPreset } from "@park-ui/panda-preset"

export default defineConfig({
	include: ["./(source|stories)/**/*.{ts,tsx}"],
	exclude: ["./source/**/*.test.{ts,tsx}"],

	outdir: "@nore/panda",
	emitPackage: true,
	clean: true,

	jsxFramework: "solid",
	preflight: true, // css defaults

	presets: [
		"@pandacss/preset-base",
		createPreset({
			grayColor: "sand",
			accentColor: "ruby",
			borderRadius: "sm",
		}),
	],

	staticCss: {
		recipes: "*",
	},

	studio: {
		outdir: ".local/studio",
	},
})
