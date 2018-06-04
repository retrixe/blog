const fs = require('fs')
const path = require('path')
const remark = require('remark')
const remarkhtml = require('remark-html')

module.exports = {
  getPost: (postQuery) => {
  // Get the plain markdown post.
    const markdown = fs.readFileSync(path.join(__dirname, 'posts', `${postQuery}.md`), {
      encoding: 'utf8'
    })
    // Parse the markdown to HTML.
    let html
    remark().use(remarkhtml).process(markdown, (err, file) => {
      if (err) console.error(err)
      html = String(file)
    })
    // Finally, return the HTML to be sent to the client.
    return html
  },
  getPostsMetadata: () => {
    // Get the metadata.json which tells us about all the posts.
    const metadata = fs.readFileSync(path.join(__dirname, 'posts', 'metadata.json'), {
      encoding: 'utf8'
    })
    // Return the metadata JSONic file to be sent to the client.
    return metadata
  }
}
