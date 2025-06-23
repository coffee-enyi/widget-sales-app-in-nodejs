const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  if (req.url === "/" && req.method === "GET") {
    res.end("You hav a raw Node.js Server is running!");
  } else {
    res.writeHead(404);
    res.end("Not Found!");
  }
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
