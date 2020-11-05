import { delayInc, delayDec } from "./store/slice";
import { getCounter } from "./store/selectors";
import { TRootState } from "@/store/rootReducer";
import { connect, ConnectedProps } from "react-redux";

const mSp = (state: TRootState) => ({
  counter: getCounter(state),
});

const mDp = (dispatch: Function) => ({
  inc: () => dispatch(delayInc()),
  dec: () => dispatch(delayDec()),
});
export const connector = connect(mSp, mDp);
export type TConnectorProps = ConnectedProps<typeof connector>;
