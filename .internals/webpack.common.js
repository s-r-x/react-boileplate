const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { FILE_REGEX } = require("./constants");
const { SRC, DST } = require("./constants");
const alias = require("./aliases");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackBar = require("webpackbar");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

module.exports = {
  target: "web",
  entry: {
    app: path.join(SRC, "index.tsx"),
  },
  output: {
    filename: isProd ? "[name].[chunkhash:8].js" : "[name].js",
    chunkFilename: isProd ? "[name].[chunkhash:8].js" : "[id].js",

    path: DST,
  },
  resolve: {
    alias,
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
              plugins: [isDev && require.resolve("react-refresh/babel")].filter(
                Boolean
              ),
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
