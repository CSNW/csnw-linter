### Get Started with VS Code

* If you haven't already, install Eslint: `npm install eslint --save-dev`.
* Install the CSNW Linter using the latest release tag.  See [tags here](https://github.com/CSNW/csnw-linter/tags).For example: `npm install https://github.com/CSNW/csnw-linter.git#v1.0.3`.
* Install the "Eslint" VS Code extension (by Dirk Baeumer).
* Create an `.eslintrc` file in the project root (or update the existing one) and add `{"extends": "@csnw/eslint-config-csnw"}`.  You are free to further define project specific rules and exceptions here ([examples here](https://eslint.org/docs/user-guide/configuring#using-configuration-files))
* To enable automatic small fixes on file save, add `"eslint.autoFixOnSave": true` to VSCode `settings.json`.
* See Also: https://github.com/CSNW/onboarding-standards
