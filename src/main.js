var electron = require('electron') // http://electron.atom.io/docs/api
var path = require('path')         // https://nodejs.org/api/path.html
var url = require('url')           // https://nodejs.org/api/url.html

var window = null

// Wait until the app is ready
electron.app.once('ready', function () {
  // Create a new window
  window = new electron.BrowserWindow({
    width: 800,
    height: 1200,
    // Show the minimize/maximize buttons inset in the window on macOS
    titleBarStyle: 'hidden-inset',
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: "#fff",
    // Don't show the window until it ready, this prevents any white flickering
    show: false
  })

  // Load a URL in the window to the local index.html path or remote dev server
  let uri

  if (process.env.NODE_ENV === 'development') {
    uri = process.env.URI
  } else {
    uri = url.format({
      pathname: path.join(__dirname, '..', 'dist', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  }

  window.loadURL(uri)

  // Show window when page is ready
  window.once('ready-to-show', function () {
    window.show()
  })
})
