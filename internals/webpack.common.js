const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { SRC, DST } = require('./constants');

module.exports = {
  entry: {
    app: path.join(SRC, 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: DST,
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
                { 'useBuiltIns': 'usage' }
              ],
              '@babel/preset-react', 
            ],
          }
        }
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot|svg|png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'), 
    })
  ],
};
