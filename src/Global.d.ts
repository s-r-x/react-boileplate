import { TTheme } from "@/styles/theme";
import { CSSProp } from "styled-components";
import { TRootState } from "./store/rootReducer";

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

declare module "react-redux" {
  export interface DefaultRootState extends TRootState {}
}

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
