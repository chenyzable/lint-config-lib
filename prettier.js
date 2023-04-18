module.exports = {
  singleQuote: false,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never",
  endOfLine: "lf",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
}
