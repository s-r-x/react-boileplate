import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styled";
import { inc, dec } from "./store/slice";
import { getCounter } from "./store/selectors";

const CounterTemplate = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.Hero>
        <img src="/images/react.svg" alt="React logo" />
        <h1>Create something rad</h1>
        <h2>(or just a tiny counter)</h2>
      </S.Hero>
      <S.CounterContainer>
        <S.Button data-testid="dec" onClick={() => dispatch(dec())}>
          -
        </S.Button>
        <span data-testid="counter">{counter}</span>
        <S.Button data-testid="inc" onClick={() => dispatch(inc())}>
          +
        </S.Button>
      </S.CounterContainer>
    </S.Container>
  );
};

export default CounterTemplate;
