import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json" assert { type: "json" };
import sourcemaps from "rollup-plugin-sourcemaps";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: [
      "react",
      "react-dom",
      "prop-types",
      "@emotion/react",
      "@emotion/styled",
      "@mui/lab",
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "@mui/styles",
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      sourcemaps(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [peerDepsExternal(), dts()],
    external: [
      "react",
      "react-dom",
      "prop-types",
      "@emotion/react",
      "@emotion/styled",
      "@mui/lab",
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "@mui/styles",
    ],
  },
];
