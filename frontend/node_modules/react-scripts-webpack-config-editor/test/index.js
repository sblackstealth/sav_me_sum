'use strict'

require('perish')
var tape = require('tape')
var bb = require('bluebird')
var fs = bb.promisifyAll(require('fs-extra'))
var path = require('path')
var spawn = require('cross-spawn-promise')

var testNodeModules = path.resolve(__dirname, 'node_modules')
var rsBin = path.join(testNodeModules, '.bin', 'react-scripts')
var testRSRWCE = path.join(testNodeModules, 'react-scripts-runtime-webpack-config-editor')
var testBin = path.join(testRSRWCE, 'bin', 'index.js')
var testTransformer = path.resolve(__dirname, 'log.pid.transformer.js')
var testPidFile = path.join(__dirname, 'test.pid')

function cleanup () {
  return bb.resolve()
  .then(() => fs.removeAsync(testNodeModules))
  .catch(() => { /* pass */ })
  .then(() => fs.removeAsync(testPidFile))
  .catch(() => { /* pass */ })
}

function createTestNodeModules () {
  return bb.resolve()
  .then(() => fs.copyAsync(path.resolve(__dirname, '..', 'node_modules'), testNodeModules))
  .then(() => fs.mkdirpAsync(testRSRWCE))
  .then(() => fs.copyAsync(path.resolve(__dirname, '..', 'src'), path.join(testRSRWCE, 'src')))
  .then(() => fs.copyAsync(path.resolve(__dirname, '..', 'bin'), path.join(testRSRWCE, 'bin')))
  .then(() => fs.copyAsync(path.resolve(__dirname, '..', 'package.json'), path.join(testRSRWCE, 'package.json')))
}

tape('calls webpack transformer w/ webpack config.', t => {
  t.plan(2)
  // simulate an installation file heirarchy, and execute.
  // our test transformer outputs a pid file if its assertions about the
  // webpack config are met.
  return bb.resolve()
  .then(() => cleanup())
  .then(() => createTestNodeModules())
  .then(() => spawn('node', [testBin, testTransformer], { cwd: testRSRWCE }))
  .catch(err => {
    console.error(err.stderr.toString())
    throw err
  })
  .then(() => spawn('node', [rsBin, 'build'], { cwd: testRSRWCE })) // no worries that we have nothing to build. our transformer does an `exit(0)`
  .catch(err => {
    console.error(err.stderr.toString())
    throw err
  })
  .then(() => fs.readFileAsync(testPidFile))
  .then(strpid => parseInt(strpid, 10))
  .then(pid => t.ok(typeof pid === 'number', 'transformer executed'))
  .then(() => cleanup())
  .then(() => t.pass('teardown'))
  .then(t.end, t.end)
})
