'use strict';

var unified = require('unified');
var parse = require('rehype-parse');
var stringify = require('rehype-stringify');
var html = require('./preset');

module.exports = unified()
  .use(parse)
  .use(html)
  .use(stringify)
  .freeze();
