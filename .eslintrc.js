/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint/eslint-plugin"
  ],
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "off",
    "valid-jsdoc": [
      "error",
      {
        "requireReturn": true,
        "requireReturnType": false,
        "requireParamType": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ]
  }
}
