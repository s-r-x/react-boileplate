import React from "react";
import Counter from "../../atoms/Counter";
import Button from "../../atoms/Button";
import * as S from "./styled";
import { TConnectorProps } from "../../connector";

const CounterWithButtons = (props: TConnectorProps) => (
  <S.Container>
    <Button id="dec" onClick={props.dec} label="-"></Button>
    <Counter count={props.counter} />
    <Button id="inc" onClick={props.inc} label="+"></Button>
  </S.Container>
);
export default CounterWithButtons;
