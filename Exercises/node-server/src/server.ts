import * as dotenv from "dotenv";
dotenv.config({ path: "../config.env" });
import * as http from "http";
import fs from "fs";
import url from "url";
import logger from "./utility/logging";

console.log(process.env.PORT);
console.log(process.env.HOSTNAME);

const data = fs.readFileSync(`${__dirname}/../data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const { query, pathname, path, href, search } = url.parse(req.url!, true);

  res.writeHead(200, { "Content-Type": "text/plain" });

  fs.readFile(`${__dirname}/public/homepage.html`, "utf-8", (err, data) => {
    res.end(data);
  });

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(`${__dirname}/public/homepage.html`, "utf-8", (err, data) => {
      res.end(data);
    });
  } else if (pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About</h1>");
  } else if (pathname === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else if (pathname === "/date") {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(query);
    res.write(`Date: ${query.year} ${query.month} ${query.day}`);
    res.end();
    logger.info(`Date: ${query.year} ${query.month} ${query.day}`);
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end(`Path ${pathname} does not exist.`);
    logger.info("The path you are trying to reach is not defined");
  }
  // res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
