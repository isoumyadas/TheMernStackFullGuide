// Good practice to keep index.js as a main file or entry point.

// bulit in module => http

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recevied\n`;
  fs.appendFile("serverLog.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("About Us");
        break;
      default:
        res.end("404 Not Found");
    }
  });
}); // creates a web server.

myServer.listen(8000, () => {
  console.log("Server Started!");
});
