# Joke Extension

This is a simple extension that will show you random jokes in the popup when extension is clicked!


## How to make extension like this?

* Make `manifest.json` file
  * Add details like: <br>
    ` {
          "name":"Joke Extension",
          "version":"0.0.1",
          "manifest_version":2,
          "browser_action": {
              "default_popup":"popup.html",
              "default_icon":"logo.png"
          },
          "icons":{
              "128":"logo.png"
          },
          "permissions": ["activeTab"]
      }`
      
      
* Make `popup.html`, `script.js`, `style.css` files, and upload it in Chrome browser. 
