const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const common = require('./webpack.common');

const config = {
  devtool: 'cheap-module-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /(\.css)|(\.less)$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },

    ],
  },
  plugins: [                                                                                                                                                           
    new MiniCssExtractPlugin({                                                                                                                                         
      filename: '[name].css',                                                                                                                                          
      chunkFilename: '[id].css',                                                                                                                                       
    }),
  ],
};

module.exports = merge(common, config);
