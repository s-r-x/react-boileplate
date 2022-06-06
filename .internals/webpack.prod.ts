import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import styleLoaders from "./parts/styleLoaders";
import common from "./webpack.common";
import {
  STYLE_REGEX,
  DST,
  ASSETS_PATH,
  SHOULD_RUN_ANALYZER,
} from "./constants";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { Configuration } from "webpack";

const config: Configuration = {
  devtool: false,
  watch: false,
  module: {
    rules: [
      {
        test: STYLE_REGEX,
        use: [{ loader: MiniCssExtractPlugin.loader }, ...styleLoaders],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: ASSETS_PATH,
          to: DST,
        },
      ],
    }),
    new CleanWebpackPlugin(),
    SHOULD_RUN_ANALYZER && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};

export default merge(common, config);
