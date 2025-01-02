// ^ URL => Uniform Resource Locator

// Protocol is a set of rules to communicate.

// ^ https://www.soumya.dev/

// here https => protocol: Hypertext Transfer Protocol Secure
// www.soumya.dev => domain name: User Friendly Name of IP Address of My Server.
// / => path: The path to the resource on the server.

// After ? => Is called Query Parameters -> eg: soumya.dev/about?userId=1&a=2 , You can use + for space for query param

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recevied\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("serverLog.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const qp = myUrl.query.name;
        res.end(`Hi, ${qp}`);
        break;
      default:
        res.end("404 Not Found");
    }
  });
}); // creates a web server.

myServer.listen(8000, () => {
  console.log("Server Started!");
});
