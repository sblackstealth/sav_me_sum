'use strict'
var fs = require('fs')
var path = require('path')
module.exports = function (webpackConf) {
  if (!webpackConf) throw new Error('missing webpackConf')
  if (!webpackConf.entry) throw new Error('missing webpackConf.entry')
  fs.writeFileSync(path.join(__dirname, 'test.pid'), process.pid)
  process.exit(0)
}
