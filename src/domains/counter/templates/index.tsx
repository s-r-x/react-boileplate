import React from "react";
import Hero from "../atoms/Hero";
import { TConnectorProps } from "../connector";
import CounterWithButtons from "../molecules/CounterWithButtons";
import * as S from "./styled";

const CounterTemplate = (props: TConnectorProps) => (
  <S.Container>
    <Hero />
    <CounterWithButtons {...props} />
  </S.Container>
);

export default CounterTemplate;
