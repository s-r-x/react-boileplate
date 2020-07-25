import * as React from "react";
import { connect } from "react-redux";
import { delayInc, delayDec } from "@/store/counter/slice";
import { Wrap, Counters } from "./styled";

const mSp = ({ counter }: { counter: number }) => ({
  counter,
});
const mDp = (dispatch: Function) => ({
  inc: () => dispatch(delayInc()),
  dec: () => dispatch(delayDec()),
});

type Props = {
  counter: number;
  inc(): void;
  dec(): void;
};
export const IndexPage = (props: Props) => {
  const { counter, inc, dec } = props;
  return (
    <Wrap>
      <img src="/images/react.svg" alt="React logo" />
      <h1>Create something rad</h1>
      <h2>(or just a tiny counter)</h2>
      <Counters>
        <button type="button" id="dec" onClick={dec}>
          -
        </button>
        <span id="counter" className="counter">
          {counter}
        </span>
        <button type="button" id="inc" onClick={inc}>
          +
        </button>
      </Counters>
    </Wrap>
  );
};

export default connect(mSp, mDp)(IndexPage);
