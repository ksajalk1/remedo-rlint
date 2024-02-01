module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended"],
  plugins: ["remedo-lint"],
  rules: {
    "remedo-lint/require-id": [1, { include: [], exclude: [] }],
    "remedo-lint/no-console": [1, { include: [], exclude: [] }],
    "remedo-lint/no-inline-style-literal": [1, { include: [], exclude: [] }],
    "remedo-lint/no-array-indices-in-carray": [1, { include: [], exclude: [] }],
  },
};
