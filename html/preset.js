'use strict';

exports.plugins = [
  [require('rehype-retext'), require('../natural-language')()]
];
