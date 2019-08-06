# H1 Get Started with VS Code

* If you haven't already, install Eslint: `npm install eslint --save-dev`.
* Install the CSNW Linter: `npm install @csnw/eslint-config-csnw --save-dev`.
* Install the "Eslint" VS Code extention (by Dirk Baeumer).
* Create an `.eslintrc` file in the project root (or update the existing one) and add `{"extends": "@csnw/eslint-config-csnw"}`.  You are free to further define project specific rules and exceptions here.
* To enable automatic small fixes on file save, add `"eslint.autoFixOnSave": true` to `settings.json`.