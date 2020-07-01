
module.exports = {
  "env": { "node": true },
  "parserOptions": { "ecmaVersion": 2018 },
  "extends": "eslint:recommended",
  "plugins": [
    "snakecasejs"
  ],
  "settings":
  {
    "snakecasejs/filter": [
      "ClassDeclaration",
      "ClassExpression",
      "NewExpression",
      "FunctionDeclaration",
      "FunctionExpression",
      "CallExpression"
    ],
    "snakecasejs/whitelist": []
  },
  "rules": {
    "snakecasejs/snakecasejs": "error",
    "no-console": "error",
    "no-undef": "off",
    "no-redeclare": "off",
    "no-inner-declarations": "off",
    "no-unused-vars": ["warn", {"args": "none"}],
    "no-restricted-syntax": ["error",
      "BinaryExpression[operator='!==']",
      "BinaryExpression[operator='===']",
      "DebuggerStatement",
      "MetaProperty",
      "LabeledStatement",
    ],
    "no-restricted-properties": ["error", {
      "object": "_",
      "property": "reduce",
      "message": "Please update a variable referenced via closure instead of using _.reduce()"
    }, {
        "object": "it",
        "property": "only"
      }, {
        "object": "describe",
        "property": "only"
      }, {
        "object": "path",
        "property": "join",
        "message": "Please use forward slashes as a cross-platform path delimiter"
      }],
    "indent": ["error", 2, {
      "outerIIFEBody": 0,
      "CallExpression": { "arguments": "off" },
      "ObjectExpression": "off",
      "ArrayExpression": "off",
      "MemberExpression": "off",
      "SwitchCase": 1
    }],
    "max-len": ["error", { "code": 120 }],
    "no-implicit-globals": "error",
    "semi": ["error", "always"],
    "no-lonely-if": "error",
    "no-tabs": "error",
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false, "properties": false }],
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    "no-extend-native": "error",
    "no-trailing-spaces": "error",
    "space-infix-ops": "error",
    "space-before-function-paren": ["error", "never"], 
    "function-paren-newline": ["error", "multiline"],
    "no-use-before-define": ["error", { "functions": false }],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "comma-dangle": ["error", "never"],
    "object-curly-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "curly": ["error", "multi-or-nest", "consistent"],
    "linebreak-style": ["error", "unix"],
    "keyword-spacing": ["error", { "overrides": { "catch": { "after": false } } }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "quote-props": ["error", "consistent-as-needed"]
  }
};