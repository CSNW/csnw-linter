### Get Started with VS Code

* Install the CSNW Linter (be sure to fill in the latest tagged release version in the URL): `npm install https://github.com/CSNW/csnw-linter#<tagged-release-version> --save-dev`.
* Install Eslint and the snakecase plugin: `npm install eslint eslint-plugin-snakecasejs --save-dev`.
* Create an `.eslintrc` file in the project root (or update the existing one) and add `{"extends": "@csnw/eslint-config-csnw"}`.  You are free to further define project specific rules and exceptions here.
* Install the "Eslint" VS Code extention (by Dirk Baeumer).
* To enable automatic small fixes on file save, add `"eslint.autoFixOnSave": true` to `settings.json`.

Note: this linter uses the [eslint-snakecase-plugin](https://www.npmjs.com/package/eslint-plugin-snakecasejs).  If you'd like to add items to the snakecase whitelist or filter, that can be done in your project's `.eslintrc` file.