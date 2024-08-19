import typescript from "@rollup/plugin-typescript";
import path from "path";

const OUTPUT_FOLDER = path.join(process.cwd(), "dist");
const LIB_NAME = "jsez"

/** @type {import('rollup').RollupOptions} */
export default {
	
	input: "src/index.ts",
	output: [
		{
			file: path.join(OUTPUT_FOLDER, "index.cjs"),
			format: "cjs",
		},
		{
			file: path.join(OUTPUT_FOLDER, "index.mjs"),
			format: "esm",
		},
		{
			file: path.join(OUTPUT_FOLDER, "index.umd.mjs"),
			format: "umd",
			name: LIB_NAME
		},
	],
	plugins: [typescript()],
};
