import express from "express";
import path from "path";
import open from "open"; // to open site in browser
import webpack from "webpack";
import config from "../webpack.config.dev.js";

const app = express(); // instance of express

/*eslint-disable no-console */

//Integrating webpack with express
const compiler = webpack(config);
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else open("http://localhost:" + port);
  console.log("server is running");
});
