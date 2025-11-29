const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true
  }

  const markdownLib = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItFootnote)
  eleventyConfig.setLibrary('md', markdownLib)

  // Remove default hr
  function render_footnote_block_open(tokens, idx, options) {
    return '<section class="footnotes">\n' +
      '<ol class="footnotes-list">\n'
  }

  markdownLib.renderer.rules.footnote_block_open = render_footnote_block_open;

  // date formatter filter
  eleventyConfig.addFilter("formatDate", function (date, format = "yyyy-MM-dd") {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return format.replace("yyyy", year).replace("MM", month).replace("dd", day);
  });

  // sort by title filter
  eleventyConfig.addFilter("sortByTitle", function (collection) {
    return collection.slice().sort((a, b) => {
      const titleA = (a.data.title || "").toLowerCase();
      const titleB = (b.data.title || "").toLowerCase();
      return titleA.localeCompare(titleB);
    });
  });

  eleventyConfig.addFilter("sortByDate", function (collection) {
    return (collection || []).slice().sort(function (a, b) {
      // prefer frontmatter date; fallback to 0
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return da - db;
    });
  });


  eleventyConfig.addPassthroughCopy("src/static");


  eleventyConfig.addShortcode("infobox", function (image, caption) {
    return `<div class="infobox">
    <img src="${image}" alt="${caption}">
    <small>${caption}</small>
  </div>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};

