var library = require("nrtv-library")(require)

module.exports = library.export(
  "nrtv-element-server",
  ["nrtv-server", "nrtv-browser-bridge"],
  function(Server, BrowserBridge) {
    function ElementServer() {}

    ElementServer.start = Server.start.bind(Server)

    ElementServer.serve =
      function(element) {
        Server.get("/", BrowserBridge.sendPage(element))
      }

    return ElementServer
  }
)