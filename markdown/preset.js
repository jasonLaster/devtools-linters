"use strict";

exports.plugins = [
  [require("remark-retext"), require("../natural-language")()],
  require("remark-preset-lint-recommended"),
  [require("remark-lint-list-item-bullet-indent"), false],
  [require("remark-lint-list-item-indent"), false],
  [require("remark-lint-ordered-list-marker-style"), false],
  [require("remark-lint-no-unused-definitions"), false],
  [require("remark-lint-no-shortcut-reference-link"), false],
  [require("remark-lint-no-shortcut-reference-image"), false],
  [require("remark-lint-no-table-indentation"), true],
  [require("remark-lint-table-cell-padding"), "consistent"],
  [require("remark-lint-table-pipes"), false],
  [require("remark-validate-links"), { repository: "" }]
];
