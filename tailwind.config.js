module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        coloredLink: '#1890ff',
        github: '#24292e',
        twitter: '#1da1f2',
      },
    },
  },
  variants: {},
  plugins: [],
};
