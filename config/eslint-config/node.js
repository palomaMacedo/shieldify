/** @type{import('eslint').Linter.Config} */

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended"
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
  },
};