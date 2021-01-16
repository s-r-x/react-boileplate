import { combineReducers } from "redux";
import counter, { DOMAIN } from "@/screens/counter/store/slice";

const reducer = combineReducers({
  [DOMAIN]: counter,
});

export default reducer;
export type TRootState = ReturnType<typeof reducer>;
