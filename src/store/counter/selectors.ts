import { DOMAIN } from "./slice";
import { TRootState } from "@/store/rootReducer";

export const getCounter = (state: TRootState) => state[DOMAIN];
