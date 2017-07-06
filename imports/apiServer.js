const fs = require("fs");
const path = require("path");
const marky = require("marky-markdown");

module.exports = {
  getPost: (postQuery) => {
  // Get the plain markdown post.
    const markdown = fs.readFileSync(path.join(__dirname, "..", "posts", `${postQuery}.md`), {
      encoding: "utf8",
    });
    // Parse the markdown to HTML.
    const html = marky(markdown);
    // Finally, return the HTML to be sent to the client.
    return html;
  },
  getListOfPosts: () => {
    const arrayOfFiles = fs.readdirSync(path.join(__dirname, "..", "posts"));
    const arrayOfPosts = arrayOfFiles.map((file) => {
      if (file.endsWith(".md")) {
        return file.slice(0, -3);
      }
    });
    return arrayOfPosts;
  },
};
