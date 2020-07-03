module.exports = {
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.ts',
    '**/*.jsx',
    '**/*.tsx',
    '**/node_modules/**',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-empty-line-before': 'never',
    indentation: 2,
    'no-missing-end-of-source-newline': null,
    'order/properties-alphabetical-order': true,
    'string-quotes': 'single',
  },
};
