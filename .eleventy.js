module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
		"./src/public/": "/",
  });

  return {
    dir : {
      input : "src",
      includes: "_includes",
      output : "wwwroot",
    },
    pathPrefix: "/",
  };
};
