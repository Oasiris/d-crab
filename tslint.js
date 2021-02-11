// Exported as a JS file instead of a JSON file so comments do not show up as format errors on GitHub.
module.exports = {
  extends: [
    'tslint-react',

    './tslint-base.js',

    // Disable formatting rules in the linter that might conflict with Prettier, our new formatter.
    'tslint-config-prettier',

    './tslint-import.js',
  ],
}
