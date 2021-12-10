module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/typescript",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "project": "tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "unused-imports",
    "import-newlines",
    "import",
    "react",
    "react-hooks"
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "ignorePatterns": "**/*.d.ts",
  "rules": {
    "no-console": ["error", { "allow": [ "warn", "error" ] }],
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "padded-blocks": ["error", { "classes": "always" }],
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/indent": ["error", 2],
    "eqeqeq": "error",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "import/prefer-default-export": ["off"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "camelcase": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "off",
    "object-curly-spacing": [2, "always"],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 2
        },
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 3
        },
        "ExportDeclaration": "always"
      }
    ],
    "import-newlines/enforce": [
      "error",
      {
        "items": 3,
        "max-len": 80,
        "semi": true
      }
    ],
    "array-bracket-spacing": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "off",
    "no-empty-pattern": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-cycle": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "no-unresolved": "off",
    "global-require": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "no-void": "off",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "curly": "off",
    "no-redeclare": "off",
    "no-inner-declarations": "off",

    "react-hooks/rules-of-hooks": "off", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "off" // Checks effect dependencies
  }
};
