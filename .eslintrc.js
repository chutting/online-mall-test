module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-react", "prettier"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  ignorePatterns: ['.eslintrc.js', '/build', 'jest.config.js'],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true,
        "jsxSingleQuote": false,
        "trailingComma": "es5",
        "printWidth": 120
      }
    ],
    "@typescript-eslint/no-this-alias": 'off',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

