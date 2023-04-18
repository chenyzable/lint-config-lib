module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
  },
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/variables.js",
    "./rules/node",
    "./rules/style",
    "./rules/es6",
    "./rules/imports",
    "./rules/strict",
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
