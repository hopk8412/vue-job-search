/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
};
