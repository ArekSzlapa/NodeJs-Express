const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
    return;
  }

  res.end("This page does not exist");
});

server.listen(5000);
console.log(os.uptime());
