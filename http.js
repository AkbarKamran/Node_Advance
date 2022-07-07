const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello this is our Pure Node Server");
  res.end();
});

server.listen(5000);
