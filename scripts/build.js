const { build } = require("esbuild");
const path = require('path');

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["./src/index.ts", "./src/option.tsx"],
  bundle: true,
  outdir: "./public/js",
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
