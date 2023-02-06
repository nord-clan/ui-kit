module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "import/named": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-unused-vars": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        vars: "all",
        ignoreRestSiblings: false,
      },
    ],
    "no-shadow": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "react/prop-types": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
    ],
    "object-property-newline": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectPattern: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "padded-blocks": [
      "error",
      {
        classes: "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        json: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "linebreak-style": ["error", "windows"],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "no-debugger": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    quotes: ["error", "single"],
  },
  overrides: [
    //* All files
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'type',
              'builtin',
              'external',
              'internal',
              'unknown',
              'parent',
              'sibling',
              'index',
              'object'
            ],
            alphabetize: { order: 'asc', caseInsensitive: true }
          }
        ]
      },
    },
    //* Configuration for Stories files
    {
      files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      extends: ["plugin:storybook/recommended"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "storybook/hierarchy-separator": "error",
        "storybook/default-exports": "off",
        "react/function-component-definition": "off",
        "react/no-unstable-nested-components": "off",
        "react/prop-types": "off",
      },
    },
    //* Configuration for Stories files
    {
      files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      extends: ["plugin:storybook/recommended"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "storybook/hierarchy-separator": "error",
        "storybook/default-exports": "off",
        "react/function-component-definition": "off",
      },
    },
    //* Configuration for Jest test files
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      plugins: ["jest", "jest-formatting", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "@typescript-eslint/no-unsafe-call": "off",
        "testing-library/no-container": "off",
        "testing-library/no-node-access": "off",
      },
    },
  ],
};
