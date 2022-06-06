import path from "path";

export const SRC = path.resolve(__dirname, "..", "src");
export const DST = path.resolve(__dirname, "..", "dist");
export const ASSETS_PATH = path.resolve(__dirname, "..", "assets");
export const STYLE_REGEX = /(\.css)|(\.less)$/i;
export const FILE_REGEX =
  /\.(woff|woff2|otf|ttf|eot|svg|png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i;

export const IS_PROD = process.env.NODE_ENV === "production";
export const IS_DEV = !IS_PROD;
export const SHOULD_RUN_ANALYZER = process.env.RUN_WEBPACK_ANALYZER === "true";
