export default {
  images: async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  },
  fonts: async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });
  }
}