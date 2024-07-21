const { build } = require("esbuild");
const path = require('path');

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["./src/index.ts", "./src/option.tsx"],
  bundle: true,
  outdir: "./public/js",
  define: {
    "process.env.IDP_ID": `"${process.env.IDP_ID}"`,
    "process.env.APP_ID": `"${process.env.APP_ID}"`,
    "process.env.SETTING_ENDPOINT": `"${process.env.SETTING_ENDPOINT}"`,
  }
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
