import "webpack-dev-server";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { HotModuleReplacementPlugin } from "webpack";
import styleLoaders from "./parts/styleLoaders";
import { STYLE_REGEX, ASSETS_PATH } from "./constants";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type {
  Configuration as BaseWebpackConfiguration,
  WebpackOptionsNormalized,
} from "webpack";

interface Configuration extends BaseWebpackConfiguration {
  devServer: WebpackOptionsNormalized["devServer"];
}

const devConfig: Configuration = {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    stats: "errors-only",
    port: process.env.PORT || 8080,
    open: true,
    hot: true,
    overlay: true,
    contentBase: ASSETS_PATH,
    host: process.env.HOST || "0.0.0.0",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: STYLE_REGEX,
        use: ["style-loader", ...styleLoaders],
      },
    ],
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

const config = merge(commonConfig, devConfig);
export default config;
