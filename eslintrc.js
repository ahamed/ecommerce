module.exports = {
  extends: ["eslint:recommended", "airbnb", "plugin:react/recommended"],
  plugins: ["typescript", "react", "optimize-regex", "json"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  rules: {
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    "no-case-declarations": 0,
    curly: ["error", "multi-line"],
    "array-bracket-spacing": ["error", "never"],
    "jsx-quotes": ["error", "prefer-double"],

    // shit for airbnb
    radix: ["error", "as-needed"],
    "no-tabs": 0,
    "no-multi-str": 0,
    "no-restricted-globals": 0,
    "max-len": ["error", { code: 160, tabWidth: 4, ignoreUrls: true }],
    "prefer-template": 0,
    "arrow-parens": ["error", "always"],
    "no-restricted-syntax": 0,
    "one-var": 0,
    "prefer-const": ["error", { destructuring: "all" }],
    "quote-props": ["error", "consistent"],
    "class-methods-use-this": 0,
    "no-continue": 0,
    "no-script-url": 0,
    "default-case": 0,

    indent: ["error", "tab", { SwitchCase: 1, VariableDeclarator: 1 }],
    "object-curly-newline": ["error", { multiline: true }],
    "no-plusplus": 0,

    "react/sort-comp": 0,
    "react/jsx-indent": ["error", "tab"],
    "react/jsx-indent-props": ["error", "tab"],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/no-did-mount-set-state": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/anchor-is-valid": 0,

    "import/parsers": { "typescript-eslint-parser": [".ts", ".tsx"] },
    "import/no-unresolved": 0,
    "import/extensions": [".ts", ".tsx"],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
  },

  overrides: [
    {
      files: ["*.tsx"],
      parser: "typescript-eslint-parser",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    {
      files: ["*.ts"],
      parser: "typescript-eslint-parser",
      parserOptions: { ecmaFeatures: { jsx: false } },
    },
  ],
};
