import http from "node:http";
http.createServer(function (req, res) {
  res.write('{"greeting":"Hello, John"}');
  res.end();
}).listen(8080);
