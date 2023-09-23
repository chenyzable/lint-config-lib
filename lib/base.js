module.exports = {
  root: true,
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
  rules: {
    // 取消禁止使用++操作符规则
    "no-plusplus": "off",
    // 取消禁止使用continue关键字规则
    "no-continue": "off",
    // 取消class成员方法必须使用this规则
    "class-methods-use-this": "off",
    // 取消import导入包来源限制（允许导入devDependencies声明的依赖）
    "import/no-extraneous-dependencies": "off",
    // 取消Promise reject参数必须是一个Error对象规则
    "prefer-promise-reject-errors": "off",
    // 取消一些语法限制规则
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
}
