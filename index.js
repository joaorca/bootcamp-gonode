const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    return res.end("Hello World");
  })
  .listen(8080);

process.on('SIGINT', () => process.exit());