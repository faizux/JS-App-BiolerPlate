import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Our First Test", function () {
  it("should pass", function () {
    expect(true).to.equal(true);
  });
});

describe("index.html", function () {
  it("it should say hello", function () {
    const index = fs.readFileSync("./src/index.html", "utf8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello World from Faiz update w/o Nodemon");
    dom.window.close();
  });
});
