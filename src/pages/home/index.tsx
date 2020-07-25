import * as React from "react";
import { Wrap, Counters } from "./styled";
import { TProviderProps } from "./container";

export const HomePage = (props: TProviderProps) => {
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

export default HomePage;
