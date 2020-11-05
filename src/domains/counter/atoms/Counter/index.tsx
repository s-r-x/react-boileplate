import React from "react";

type TProps = {
  count: number;
};
const Counter = (props: TProps) => <span id="counter">{props.count}</span>;

export default Counter;
