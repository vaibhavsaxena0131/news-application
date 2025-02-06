module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    quotes: ["off"],
    "no-console": ["warn", { allow: ["info"] }],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
