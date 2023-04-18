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
    "react/react-in-jsx-scope": "off",
  },
}
