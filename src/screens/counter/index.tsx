import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styled";
import { inc, dec } from "./store/slice";
import { getCounter } from "./store/selectors";

const CounterTemplate = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();
  return (
    <S.Root>
      <S.Head>
        <img src="/images/react.svg" alt="React logo" />
        <h1>Create something rad</h1>
        <h2>(or just a tiny counter)</h2>
      </S.Head>
      <S.Main>
        <button data-testid="dec" onClick={() => dispatch(dec())}>
          -
        </button>
        <span data-testid="counter">{counter}</span>
        <button data-testid="inc" onClick={() => dispatch(inc())}>
          +
        </button>
      </S.Main>
    </S.Root>
  );
};

export default CounterTemplate;
