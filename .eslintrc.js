const eslintConfig = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier", "sort-keys-fix", "promise"],
  rules: {
    "capitalized-comments": ["error", "always"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    "prettier/prettier": "error",
    "promise/always-return": "error",
    "promise/avoid-new": "warn",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "warn",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/valid-params": "warn",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "sort-keys": "error",
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};

console.log(eslintConfig);

module.exports = eslintConfig;
