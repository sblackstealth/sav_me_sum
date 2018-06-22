# react-scripts-webpack-config-editor

edit the react-scripts webpack config at runtime.

[ ![Codeship Status for cdaringe/react-scripts-webpack-config-editor](https://app.codeship.com/projects/88ce0a90-004e-0135-9570-3e56087fa495/status?branch=master)](https://app.codeship.com/projects/212544) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## install

`npm install --save-dev react-scripts-webpack-config-editor`

## usage

- update your package.json and add an install script

```js
// package.json
{
  "scripts": {
    "install": "react-scripts-webpack-config-editor <my-webpack-transformer.js>"
  }
}
```

- add your transformer

```js
// my-webpack-transformer.js
module.exports = function editWebpackConfig (webpackConfig) {
  // webpackConfig is the parsed JS webpack config from react-scrips.
  // modify it here synchronously, & return it.
  return Object.assign({}, webpackConfig, {
    ...my-webpack-customizations
  })
}
```

## why

you love [create-react-app](https://github.com/facebookincubator/create-react-app), but need just a tiny tweak to the build process.

## why not

the whole point of sticking with react-scripts is offloading the complexity of the build system (webpack), and getting rolling updates.  tweaking it implies that you want ownership of the build process!

## justification

if you **must** change the build used by react-scripts (create-react-app) you can either fork the project, or `react-scripts eject`.  **until now!**

- forking stinks. rolling updates come with a cost of you or your team pulling down the upstream project. further, **git conflicts are bound to follow**.
- ejecting stinks.  you get a ton of code pushed into your codebase & immediately onboard technical debt by absorbing all of that code.

your custom modifications are sure to break when you bump react-scripts. however, the amount of modifications should be _limited_, so hopefully you only need to patch a few lines in your transformer.
