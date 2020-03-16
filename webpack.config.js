const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'font-family': '\'Tajawal\', sans-serif',
              },
              javascriptEnabled: true,
            },
          },
        }],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
      Elements: path.resolve(__dirname, 'src/elements'),
      Components: path.resolve(__dirname, 'src/Components'),
      Providers: path.resolve(__dirname, 'src/Providers'),
      Pages: path.resolve(__dirname, 'src/Pages'),
      Layouts: path.resolve(__dirname, 'src/layouts'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Public: path.resolve(__dirname, 'public'),
      Graphql: path.resolve(__dirname, 'src/Graphql'),
    },
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true,
  },
};
