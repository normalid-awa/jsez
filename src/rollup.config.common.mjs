import typescript from "@rollup/plugin-typescript";
import path from "path";
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';

const OUTPUT_FOLDER = path.join(process.cwd(), "dist");
const LIB_NAME = "jsez";

export default createCommonConfig("core");

/** @type {import('rollup').RollupOptions} */
export function createCommonConfig(moduleName) {
	return [
		{
			input: `src/index.ts`,
			output: [
				{
					file: path.join(OUTPUT_FOLDER, `${moduleName}.cjs`),
					format: "cjs",
				},
				{
					file: path.join(OUTPUT_FOLDER, `${moduleName}.mjs`),
					format: "esm",
				},
				{
					file: path.join(OUTPUT_FOLDER, `${moduleName}.umd.mjs`),
					format: "umd",
					name: `${LIB_NAME}/${moduleName}`,
				},
			],
			plugins: [typescript(), nodeResolve()],
		},
		{
			input: `src/index.ts`,
			output: [{ file: path.join(OUTPUT_FOLDER, `${moduleName}.d.ts`), format: "es" }],
			plugins: [dts(), nodeResolve()],
		},
	];
}
