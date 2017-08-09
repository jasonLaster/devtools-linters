'use strict';

var fs = require('fs');
var path = require('path');
var execa = require('execa');
var test = require('tape');

var join = path.join;

test('markdown', function (t) {
  t.plan(1);

  t.test('should work', function (st) {
    var bin = join('node_modules', '.bin', 'remark');
    var input = join('test', 'fixtures', 'markdown.md');
    var output = join('test', 'fixtures', 'markdown.txt');

    st.plan(1);

    execa
      .stderr(bin, ['--no-color', '-u', './markdown/preset', input])
      .then(function (result) {
        st.equal(result, fs.readFileSync(output, 'utf8').trim())
      }, st.ifErr);
  });
});

test('html', function (t) {
  t.plan(1);

  t.test('should work', function (st) {
    var bin = join('node_modules', '.bin', 'rehype');
    var input = join('test', 'fixtures', 'html.html');
    var output = join('test', 'fixtures', 'html.txt');

    st.plan(1);

    execa
      .stderr(bin, ['--no-color', '-u', './html/preset', input])
      .then(function (result) {
        st.equal(result, fs.readFileSync(output, 'utf8').trim())
      }, st.ifErr);
  });
});
