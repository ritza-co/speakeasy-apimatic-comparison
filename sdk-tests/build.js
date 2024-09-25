import * as esbuild from "esbuild";
import * as fs from "fs";

const speakeasyBuild = await esbuild.build({
  entryPoints: ["speakeasy.ts"],
  outfile: "dist/speakeasy.cjs",
  bundle: true,
  minify: true,
  treeShaking: true,
  metafile: true,
  target: "node18",
  platform: "node",
});

fs.writeFileSync(
  "dist/speakeasy.json",
  JSON.stringify(speakeasyBuild.metafile, null, 2)
);

const apimaticBuild = await esbuild.build({
  entryPoints: ["apimatic.ts"],
  outfile: "dist/apimatic.cjs",
  bundle: true,
  minify: true,
  treeShaking: true,
  metafile: true,
  target: "node18",
  platform: "node",
});

fs.writeFileSync(
  "dist/apimatic.json",
  JSON.stringify(apimaticBuild.metafile, null, 2)
);