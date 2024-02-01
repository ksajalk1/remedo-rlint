module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["remedo-lint"],
  rules: {
    "remedo-lint/func-prefix-matching": [1, { include: [], exclude: [] }],
  },
};
