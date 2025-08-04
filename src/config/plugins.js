import metagenPlugin from 'eleventy-plugin-metagen';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default {
  metagen: async function (eleventyConfig) {
    eleventyConfig.addPlugin(metagenPlugin);
  },
  image: async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      outputDir: "./public/assets/images",
      urlPath: "/irc-whois-gallery/assets/images/",
      extensions: "html",
      formats: ["auto"],
      defaultAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    });
  }
}