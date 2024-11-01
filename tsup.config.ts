import { Options, defineConfig } from "tsup";

const ENV = process.env.NODE_ENV;
const outDir = "dist";
const sourceMap = ENV === "development";

/**
 * Need to experiment how customisable tsup is with build options
 * Replace tsup with rollup if need arises
 */

export default defineConfig((options: Options) => {
  return [
    {
      entry: ["src/components/**/*.ts?(x)", "!./**/*.stories.*"],
      outDir: `${outDir}/components`,
      format: ["esm"],
      target: "es2015",
      splitting: true,
      sourcemap: sourceMap,
      dts: true,
      treeshake: true,
      minify: true,
      clean: true,
      ignoreWatch: ["**/*.stories.*"]
    },
    {
      entry: ["src/tokens/**/*.ts?(x)", "!./**/*.stories.*"],
      outDir: `${outDir}/tokens`,
      format: ["esm"],
      target: "es2015",
      splitting: true,
      sourcemap: sourceMap,
      dts: true,
      treeshake: true,
      minify: true,
      clean: true,
      ignoreWatch: ["**/*.stories.*"]
    }
  ];
});
