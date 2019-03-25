const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { FILE_REGEX } = require('./constants');

const { SRC, DST } = require('./constants');

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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ 
                '@babel/preset-env', 
                { 'useBuiltIns': 'usage', modules: false, }
              ],
              '@babel/preset-react', 
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        }
      },
      {
        test: FILE_REGEX,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash:8].[ext]", 
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'), 
    })
  ],
};
