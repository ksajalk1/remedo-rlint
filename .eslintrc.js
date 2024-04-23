module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:tailwindcss/recommended"
  ],
  plugins: [
    "remedo-lint",
    "@typescript-eslint",
    "jsx-a11y",
    "tailwindcss",
    "validate-jsx-nesting",
    "eslint-comments"
  ],
  rules: {
    "remedo-lint/require-id": [2, { include: [], exclude: [] }],
    "remedo-lint/no-console": [2, { include: [], exclude: [] }],
    "remedo-lint/no-inline-style-literal": [2, { include: [], exclude: [] }],
    "remedo-lint/no-array-indices-in-carray": [2, { include: [], exclude: [] }],
    "remedo-lint/parent-div-id": [2, { include: [], exclude: [] }],
    "remedo-lint/style-classname-props": [2, { include: [], exclude: [] }],
    "validate-jsx-nesting/no-invalid-jsx-nesting": "error",
    "remedo-lint/optional-props": [2, { include: [], exclude: [] }]
  },
  overrides: [
    {
      files: ["src/**/*composition*.tsx"], // Pattern to match files containing 'composition'
      rules: {} // Disables all rules for these files
    },
    {
      files: ["src/**/*.tsx"],
      rules:{
        "tailwindcss/classnames-order": "off",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/no-arbitrary-value": "error",
        "eslint-comments/require-description": ["error", {"ignore": []}]
      }
    }
    
  ]
};

