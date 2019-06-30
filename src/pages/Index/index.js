// @flow
import React from 'react';
import cls from './index.less';
import reactLogo from '@/images/react.svg';
import {connect} from 'react-redux';
import {asyncInc, asyncDec} from '@/actions/counter';

type Props = {
  counter: number,
  asyncInc: Function,
  asyncDec: Function,
};
const IndexPage = (props: Props) => {
  const {counter, asyncDec, asyncInc} = props;
  return (
    <main className={cls.main}>
      <img src={reactLogo} alt="React logo" />
      <h1>Create something rad</h1>
      <h2>(or just a tiny counter)</h2>
      <div className={cls.counterContainer}>
        <button type="button" className="minus" onClick={asyncDec}>
          -
        </button>
        <span className="counter">{counter}</span>
        <button type="button" className="plus" onClick={asyncInc}>
          +
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = ({counter}) => ({
  counter,
});
const mapDispatchToProps = dispatch => ({
  asyncInc: () => dispatch(asyncInc()),
  asyncDec: () => dispatch(asyncDec()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);
