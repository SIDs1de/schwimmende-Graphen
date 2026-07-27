import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "typescript", "oxc", "unicorn", "import", "jsx-a11y"],

  categories: {
    correctness: "error",
    suspicious: "error",
    perf: "error",

    pedantic: "off",
    style: "off",
    restriction: "off",
    nursery: "off",
  },

  options: {
    typeAware: true,
    maxWarnings: 0,
  },

  env: {
    browser: true,
    es6: true,
  },

  ignorePatterns: [
    "node_modules",
    "dist",
    "build",
    ".react-router",
    "coverage",
    "public",
    "__generated__",
  ],

  rules: {
    // React
    "react/rules-of-hooks": "error",
    "react/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "react/react-in-jsx-scope": "off",

    // TypeScript
    "typescript/no-explicit-any": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/prefer-readonly-parameter-types": "off",

    // Базовое качество
    "eslint/eqeqeq": "error",
    "eslint/no-console": "warn",
    "eslint/no-debugger": "error",
    "eslint/prefer-const": "error",

    // TypeScript уже проверяет unused
    "eslint/no-unused-vars": "off",

    // Импорты
    "import/no-duplicates": "error",
    "import/no-default-export": "off",
    "import/prefer-default-export": "off",
    "import/no-named-export": "off",
    "import/no-unassigned-import": "off",
    "import/consistent-type-specifier-style": "off",

    // Форматтер и так занимается стилем
    "eslint/sort-imports": "off",
    "eslint/no-magic-numbers": "off",
    "eslint/no-shadow": "off",
    "eslint/max-lines-per-function": "off",

    // Не мешаем обычному React-коду
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-max-depth": "off",
    "react/jsx-no-literals": "off",

    // Не навязываем имена файлов
    "unicorn/filename-case": "off",
    "unicorn/prefer-query-selector": "off",
    "unicorn/prefer-node-protocol": "error",
  },

  overrides: [
    {
      files: [
        "vite.config.ts",
        "**/*.config.ts",
        "**/*.config.js",
        "**/*.config.mjs",
        "scripts/**/*.ts",
        "scripts/**/*.js",
      ],

      env: {
        node: true,
      },

      rules: {
        "import/no-nodejs-modules": "off",
        "eslint/no-console": "off",
      },
    },

    {
      files: ["**/*.d.ts"],

      rules: {
        "import/unambiguous": "off",
        "unicorn/filename-case": "off",
      },
    },

    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],

      rules: {
        "typescript/no-non-null-assertion": "off",
        "eslint/no-console": "off",
      },
    },
  ],
});
