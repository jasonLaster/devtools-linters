'use strict';

var unified = require('unified');
var parse = require('remark-parse');
var stringify = require('remark-stringify');
var markdown = require('./preset');

module.exports = unified()
  .use(parse)
  .use(markdown)
  .use(stringify)
  .freeze();
