module.exports = {
  extends: ["./lib/base", "./lib/typescript", "./lib/react", "./lib/prettier"].map(require.resolve),
}
