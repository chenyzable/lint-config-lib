module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // 开启ts文件中导入类型文件使用import type规则
    "@typescript-eslint/consistent-type-imports": "error",
  },
}
