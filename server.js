// Next.js server initialization.
// Require next.js, express and necessary tools.
const express = require("express");
const next = require("next");
const fs = require("fs");
const path = require("path");
const marky = require("marky-markdown");

// Initialize our server application.
const app = express();

// Find if app is running in development/production.
const dev = process.env.NODE_ENV !== "production";

// Initialize next.js build pipeline and ultimately, app.
const webApp = next({ dev });
const handle = webApp.getRequestHandler();

// Once our app is ready, let's get ready to Express.js!
webApp.prepare().then(() => {
  // Setup the API server! This is the application's core.. It's just 3 lines! (A WIP, but 90% done)
  app.get("/api", (req, res) => {
    // Get the plain markdown post.
    const markdown = fs.readFileSync(path.join(__dirname, "posts", `${req.query.post}.md`));
    // Parse the markdown to HTML.
    const html = marky(markdown);
    // Finally, send the HTML to the client.
    res.send(html);
  });

  // Handle all incoming requests (intercepts must precede this)
  app.get("*", (req, res) => handle(req, res));

  // Finally, listen on port 3000 and wait..
  app.listen(3000, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log("> Ready on http://localhost:3000");
  });
});
