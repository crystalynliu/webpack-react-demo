const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  context: __dirname + '/app',
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};

module.exports = webpackConfig;