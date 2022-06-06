import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { FILE_REGEX } from "./constants";
import { SRC, DST, IS_PROD, IS_DEV } from "./constants";
import { aliases } from "./aliases";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import WebpackBar from "webpackbar";
import type { Configuration } from "webpack";

const config: Configuration = {
  target: "web",
  entry: {
    app: path.join(SRC, "index.tsx"),
  },
  output: {
    filename: IS_PROD ? "[name].[chunkhash:8].js" : "[name].js",
    chunkFilename: IS_PROD ? "[name].[chunkhash:8].js" : "[id].js",

    path: DST,
  },
  resolve: {
    alias: aliases,
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                IS_DEV && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: FILE_REGEX,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}", // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
    new WebpackBar({
      color: "#673AB7",
    }),
  ],
};

export default config;
