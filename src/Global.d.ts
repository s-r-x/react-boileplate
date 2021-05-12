import { TTheme } from "@/styles/theme";
import { CSSProp } from "styled-components";


declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
