import React from "react";
import * as S from "./styled";

type TProps = {
  onClick: () => void;
  label: string;
  [key: string]: any;
};
const CounterButton = ({ onClick, label, ...props }: TProps) => (
  <S.Button type="button" onClick={onClick} {...props}>
    {label}
  </S.Button>
);

export default CounterButton;
