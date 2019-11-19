import * as React from 'react';
import {connect} from 'react-redux';
import {asyncInc, asyncDec} from '@/actions/counter';
import cls from './index.less';
import reactLogo from '@/images/react.svg';

type Props = {
  counter: number;
  asyncDec(e: any): void;
  asyncInc(e: any): void;
};
const IndexPage = (props: Props) => {
  const {counter, asyncDec, asyncInc} = props;
  return (
    <main className={cls.main}>
      <img src={reactLogo} alt="React logo" />
      <h1>Create something rad</h1>
      <h2>(or just a tiny counter)</h2>
      <div className={cls.counterContainer}>
        <button type="button" onClick={asyncDec}>
          -
        </button>
        <span className="counter">{counter}</span>
        <button type="button" onClick={asyncInc}>
          +
        </button>
      </div>
    </main>
  );
};

const mSp = ({counter}: {counter: number}) => ({
  counter,
});
const mDp = (dispatch: Function) => ({
  asyncInc: () => dispatch(asyncInc()),
  asyncDec: () => dispatch(asyncDec()),
});
export default connect(
  mSp,
  mDp,
)(IndexPage);
