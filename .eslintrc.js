module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  globals: {
    "document": false,
    "JSX": true
  },
  parserOptions: {
    "ecmaVersion": "latest",
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "curly": ["error", "all"],
    "import-helpers/order-imports": [
      "error",
      {
        "newlinesBetween": "never",
        "groups": [
          "module",
          "/^services/",
          "/^useCases/",
          "/^hooks/",
          "/^routes/",
          "/^lib/",
          "/^pages/",
          "/^contexts/",
          "/^components/",
          "/^styles/",
          "/^interfaces/",
          "/^constants/",
          "/^assets/",
          "parent",
          "sibling",
          "index"
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ],
    "indent": ["error", 2],
    "prettier/prettier": ["error", {
      "arrowParens": "always",
      "useTabs": false,
      "trailingComma": "all",
      "tabWidth": 2,
      "singleQuote": true,
      "semi": true,
      "bracketSpacing": true,
      "printWidth": 80
    }],
    "quote-props": ["error", "as-needed"],
    "quotes": [2, "single"],
    "react/display-name": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-debugger": "warn",
    "no-unreachable": "error",
    "semi": ["error", "always"],
  },
  overrides: [
    {
      "files": ["*.d.ts"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ],
  settings: {
    "react": {
      "version": "detect"
    },
    "import/ignore": ["\\.(scss|css)$"]
  },
};