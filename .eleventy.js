module.exports = function(eleventyConfig) {
  // date formatter filter
  eleventyConfig.addFilter("formatDate", function(date, format = "yyyy-MM-dd") {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return format.replace("yyyy", year).replace("MM", month).replace("dd", day);
  });

  // sort by title filter
  eleventyConfig.addFilter("sortByTitle", function(collection) {
    return collection.slice().sort((a, b) => {
      const titleA = (a.data.title || "").toLowerCase();
      const titleB = (b.data.title || "").toLowerCase();
      return titleA.localeCompare(titleB);
    });
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};

