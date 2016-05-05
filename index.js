module.exports = {
  presets: [
    require('babel-preset-es2015')
  ],
  plugins: [
    require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-transform-runtime'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-strict-mode'),
    require('babel-plugin-source-map-support-for-6').default
  ]
};
