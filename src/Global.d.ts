import { TRootState } from "./store/rootReducer";

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "react" {}

declare module "react-redux" {
  export interface DefaultRootState extends TRootState {}
}
