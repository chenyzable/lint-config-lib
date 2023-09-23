module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    // 取消jsx文件必须引入react规则
    "react/react-in-jsx-scope": "off",
  },
}
