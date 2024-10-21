import { Options, defineConfig } from "tsup";

const outDir = "dist";
const sourceMap = false;

/**
 * Need to experiment how customisable tsup is with build options
 * Replace tsup with rollup if need arises
 */

export default defineConfig((options: Options) => {
  return [
    {
      entry: ["src/components/**/*.ts?(x)"],
      outDir: `${outDir}/components`,
      format: ["esm"],
      target: "es2015",
      splitting: true,
      sourcemap: sourceMap,
      dts: true,
      treeshake: true,
      minify: true,
      ignoreWatch: ["**/*.stories.*"],
      clean: true,
      external: ["*.stories.tsx", "react", "react-dom"]
    },
    {
      entry: ["src/tokens/**/*.ts?(x)"],
      outDir: `${outDir}/tokens`,
      format: ["esm"],
      target: "es2015",
      splitting: true,
      sourcemap: sourceMap,
      dts: true,
      treeshake: true,
      minify: true,
      ignoreWatch: ["**/*.stories.*"],
      clean: true,
      external: ["*.stories.tsx", "react", "react-dom"]
    }
  ];
});
