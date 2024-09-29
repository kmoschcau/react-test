import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import htmlParser from "@html-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  ...fixupConfigRules(jsxA11y.flatConfigs.recommended),
  prettier,
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
  },
  {
    rules: {
      "no-undef": "off",
    },
  },
];
