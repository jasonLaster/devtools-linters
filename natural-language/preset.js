"use strict";

var fs = require("fs");
var path = require("path");

var personal = fs
  .readFileSync(path.join(__dirname, "dictionary.txt"), "utf8")
  .replace(/#.+/gm, "");

var projectDictionary = fs
  .readFileSync(
    path.join(__dirname, "../../../assets/", "dictionary.txt"),
    "utf8"
  )
  .replace(/#.+/gm, "");

exports.plugins = [
  require("retext-english"),
  require("retext-syntax-urls"),
  require("retext-syntax-mentions"),
  require("retext-emoji"),
  require("retext-equality"),
  [
    require("retext-spell"),
    {
      dictionary: require("dictionary-en-us"),
      personal: personal.concat(...projectDictionary)
    }
  ]
  // require("retext-sentence-spacing"),
  // [require("retext-quotes"), { preferred: "straight" }],
  // require("retext-repeated-words")
];
