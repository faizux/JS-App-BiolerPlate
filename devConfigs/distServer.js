import express from "express";
import path from "path";
import open from "open"; // to open site in browser

import compression from "compression";

const app = express(); // instance of express

/*eslint-disable no-console */

app.use(compression()); //gzip compression
app.use(express.static("dist")); // support for static files

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else open("http://localhost:" + port);
  console.log("server is running");
});
