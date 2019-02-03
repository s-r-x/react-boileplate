const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');


const config = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /(\.css)|(\.less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },

    ],
  },
  plugins: [                                                                                                                                                           
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = merge(common, config);
