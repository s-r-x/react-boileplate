import { connect, ConnectedProps } from "react-redux";
import { delayInc, delayDec } from "@/store/counter/slice";
import { getCounter } from "@/store/counter/selectors";
import { TRootState } from "@/store/rootReducer";
import HomePage from ".";

const mSp = (state: TRootState) => ({
  counter: getCounter(state),
});
const mDp = (dispatch: Function) => ({
  inc: () => dispatch(delayInc()),
  dec: () => dispatch(delayDec()),
});
const provide = connect(mSp, mDp);
export type TProviderProps = ConnectedProps<typeof provide>;

export default provide(HomePage);
