module.exports = {
  "env": {
    "es6": true,
    "meteor": true
  },
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
    }],
    // For global variable definitions.
    "no-var": "off",
    // For JSX in .js files.
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    // No PropTypes please.
    "react/prop-types": "off",
    // No package.json cross-validation kk bai.
    "import/no-extraneous-dependencies": "off"
  },
  "settings": { "import/resolver": { "meteor": { extensions: [".js", ".jsx"] } } }
};
