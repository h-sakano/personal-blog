const babelOptions = {
  presets: ['babel-preset-gatsby'],
};
// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const transformer = require('babel-jest').default;

module.exports = transformer.createTransformer(babelOptions);
