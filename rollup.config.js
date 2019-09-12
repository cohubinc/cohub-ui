import typescriptPlugin from "rollup-plugin-typescript2";
import sass from "node-sass";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import presetEnv from "postcss-preset-env";
import flexbugFixes from "postcss-flexbugs-fixes";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
// import docGenPlugin from "babel-plugin-react-docgen-typescript";
import ttypescript from "ttypescript";
import execute from "rollup-plugin-execute";

import pkg from "./package.json";

const NODE_ENV = process.env.NODE_ENV || "development";
const __DEV__ = NODE_ENV === "development";
const dependencies = Object.keys(pkg.dependencies || {});
const isStoryBuild = NODE_ENV === "storybook";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  external: dependencies,
  plugins: [
    replace({
      __DEV__,
      exclude: "node_modules/**"
    }),
    typescriptPlugin({
      typescript: ttypescript,
      tsconfig: "./tsconfig.build.json"
    }),
    babel({
      babelrc: false,
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
      // plugins: [
      //   isStoryBuild && [
      //     docGenPlugin,
      //     {
      //       docgenCollectionName: "STORYBOOK_REACT_CLASSES",
      //       // TODO: Look into this -> May be able to speed up the build if we limit the included files
      //       include: "components.*\\.tsx$",
      //       exclude: "stories\\.tsx$"
      //     }
      //   ]
      // ].filter(Boolean)
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
    commonjs(),
    execute("cp ./dist/index.d.ts ./dist/index.esm.d.ts")
  ]
};
