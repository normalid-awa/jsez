import { defineConfig, type UserConfig } from "vite";

export default defineConfig(
	({ command, mode, isSsrBuild, isPreview }): UserConfig => {
		return {
			appType: "custom",
			build: {
				lib: {
					entry: `${process.cwd()}/src/index.ts`,
					formats: ["es", "cjs", "system", "umd"],
					name: "jsez",
				},
				minify: command == "build" ? "esbuild" : false,
				emptyOutDir: true,
				outDir: `${process.cwd()}/dist`,
			}
		}
	}
);
