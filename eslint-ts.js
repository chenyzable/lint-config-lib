module.exports = {
  extends: ["./lib/base", "./lib/typescript", "./lib/prettier"].map(require.resolve),
}
