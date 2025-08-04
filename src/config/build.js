import esbuild from "esbuild";

export default async function(config) {
  config.on("afterBuild", () => {
    return esbuild.build({
      entryPoints: {
        "styles": "src/assets/styles/styles.css",
        "main": "src/assets/scripts/main.js"
      },
      outdir: "public/assets",
      bundle: true,
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
      loader: {
        '.woff2': 'file'
      },
    });
  });
};