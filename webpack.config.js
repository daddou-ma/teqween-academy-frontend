const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Elements: path.resolve(__dirname, 'src/elements'),
      Components: path.resolve(__dirname, 'src/components'),
      Layouts: path.resolve(__dirname, 'src/layouts'),
      Styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
