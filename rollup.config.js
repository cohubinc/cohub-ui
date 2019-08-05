import typescriptPlugin from "rollup-plugin-typescript2";
import typescript from "typescript";
import sass from "node-sass";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import presetEnv from "postcss-preset-env";
import flexbugFixes from "postcss-flexbugs-fixes";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

const NODE_ENV = process.env.NODE_ENV || "development";
const __DEV__ = NODE_ENV !== "production";
const peerDependencies = Object.keys(pkg.peerDependencies || {});
const dependencies = Object.keys(pkg.dependencies || {});

export default {
  input: "src/index.ts",
  output: {
    file: __DEV__ ? "./dist/index.development.js" : pkg.main,
    format: "es",
    sourcemap: true,
    globals: { lodash: "lodash" }
  },
  external: [...peerDependencies],
  plugins: [
    replace({
      __DEV__,
      "process.env.NODE_ENV": NODE_ENV,
      exclude: "node_modules/**"
    }),
    typescriptPlugin({
      typescript
    }),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      plugins: [
        [
          "styled-jsx/babel",
          {
            // optimizeForSpeed: !__DEV__,
            plugins: ["styled-jsx-plugin-sass"],
            sourceMaps: true,
            vendorPrefixes: boolean
          }
        ]
      ],
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
    }),
    postcss({
      preprocessor: (content, id) => {
        return new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id });
          resolve({ code: result.css.toString() });
        });
      },
      plugins: [
        autoprefixer,
        flexbugFixes,
        presetEnv({
          autoprefixer: {
            flexbox: "no-2009"
          },
          stage: 3
        })
      ],
      sourceMap: true,
      // Automatically inject styles into document head at runtime. (Does not output a css bundle)
      extract: false,
      autoModules: true
    }),
    nodeResolve({
      // Only resolve modules that are listed as dependencies
      only: dependencies.length ? dependencies : [""]
    }),
    commonjs()
  ]
};
