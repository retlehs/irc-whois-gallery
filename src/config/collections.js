export default {
  pages: async function (eleventyConfig) {
    eleventyConfig.addCollection("pages", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/pages/**/*.md");
    });
  }
}