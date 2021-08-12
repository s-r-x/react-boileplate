import * as S from "./styled";
import { atom, useAtom } from "jotai";

const counterAtom = atom(0);

const Counter = () => {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <S.Root>
      <S.Head>
        <img src="/images/react.svg" alt="React logo" />
        <h1>Create something rad</h1>
        <h2>(or just a tiny counter)</h2>
      </S.Head>
      <S.Main>
        <button
          data-testid="dec"
          onClick={() => setCounter(Math.max(0, counter - 1))}
        >
          -
        </button>
        <span data-testid="counter">{counter}</span>
        <button data-testid="inc" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </S.Main>
    </S.Root>
  );
};

export default Counter;
