// Next.js server initialization.
// Require next.js, express and necessary tools.
const express = require('express')
const next = require('next')
const api = require('./api')

// Initialize our server application.
const app = express()

// If production is explicitly specified via flag..
if (process.argv[2] === '--production') {
  // Set mode to production.
  process.env.NODE_ENV = 'production'
}

// Find if app is running in development/production.
const dev = process.env.NODE_ENV !== 'production'

// Initialize next.js build pipeline and ultimately, app.
const webApp = next({ dev })
const handle = webApp.getRequestHandler()

// Once our app is ready, let's get ready to Express.js!
webApp.prepare().then(() => {
  // Setup the API server! This is the application's core.. It's just 3 lines! (A WIP, but 90% done)
  app.get('/api', (req, res) => {
    // Call our API server depending on the query.
    if (req.query.post) res.send(api.getPost(req.query.post))
    else res.send(api.getPostsMetadata())
  })

  // Handle all incoming requests (intercepts must precede this)
  app.get('*', (req, res) => handle(req, res))

  // Finally, listen on port 3000 and wait..
  app.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
