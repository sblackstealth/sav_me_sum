#!/usr/bin/env node
'use strict'

var path = require('path')
var transform = require('../')

var userWebpackTransformerFilename = process.argv[2]
if (!userWebpackTransformerFilename) throw new Error('missing transform file')
userWebpackTransformerFilename = (
  path.isAbsolute(userWebpackTransformerFilename)
  ? userWebpackTransformerFilename
  : path.resolve(process.cwd(), userWebpackTransformerFilename)
).replace(/\\/g, '/')

transform(userWebpackTransformerFilename)
