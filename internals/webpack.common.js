const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {FILE_REGEX} = require('./constants');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const {SRC, DST} = require('./constants');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: path.join(SRC, 'index.js'),
  },
  output: {
    filename: isProd ? '[name].[chunkhash:8].js' : '[name].js',
    chunkFilename: isProd ? '[name].[chunkhash:8].js' : '[id].js',

    path: DST,
  },
  resolve: {
    alias: {
      '@': SRC,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {useBuiltIns: 'usage', modules: false}],
                '@babel/preset-react',
                '@babel/preset-flow',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: FILE_REGEX,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'),
    }),
    new FlowWebpackPlugin(),
  ],
};
