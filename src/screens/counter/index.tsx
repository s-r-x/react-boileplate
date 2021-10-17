import { atom, useAtom } from "jotai";
import cls from "./styles.module.less";

const counterAtom = atom(0);

const Counter = () => {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <div className={cls.root}>
      <div>
        <img src="/images/react.svg" alt="React logo" />
        <h1>Create something rad</h1>
        <h2>(or just a tiny counter)</h2>
      </div>
      <main>
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
      </main>
    </div>
  );
};

export default Counter;
