const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

const {
  textToMorse,
  alphabet,
  morseToText,
  getValue,
  translate,
} = require("./morse");

describe("morse.js test", () => {
  it("alphabet object should exist", () => {
    expect(typeof alphabet).toEqual("object");
  });

  it("alphabet object should contain 37 key - value pairs", () => {
    expect(Object.keys(alphabet).length).toBe(37);
  });

  it("textToMorse function should exist", () => {
    expect(typeof textToMorse).toEqual("function");
  });

  it("morseToText function should exist", () => {
    expect(typeof morseToText).toEqual("function");
  });

  it("getValue function should exist", () => {
    expect(typeof getValue).toEqual("function");
  });

  it("translate function should exist", () => {
    expect(typeof translate).toEqual("function");
  });
});

describe("index.html test", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("<h1> should exist", () => {
    expect(document.getElementById("header")).toBeTruthy();
  });

  it("button should exist", () => {
    expect(document.getElementById("translate")).toBeTruthy();
  });

  it("input field should exist", () => {
    expect(document.getElementById("text")).toBeTruthy();
  });

  it("result field should exist", () => {
    expect(document.getElementById("result")).toBeTruthy();
  });

  it("morse code image should exist", () => {
    expect(document.getElementById("morse-image")).toBeTruthy();
  });
});
