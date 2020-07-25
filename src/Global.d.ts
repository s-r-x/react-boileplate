import { TTheme } from "@/styles/theme";

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
