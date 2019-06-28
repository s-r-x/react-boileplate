// @flow
import React from 'react';
import cls from './index.less';
import reactLogo from '@/images/react.svg';
import {connect} from 'react-redux';
import {inc, dec} from '@/actions/creators';

type Props = {
  counter: number,
  inc: Function,
  dec: Function,
};

const IndexPage = (props: Props) => {
  const {counter, inc, dec} = props;
  return (
    <main className={cls.main}>
      <img src={reactLogo} alt="React logo" />
      <h1>Create something rad</h1>
      <h2>(or just a tiny counter)</h2>
      <div className={cls.counterContainer}>
        <button type="button" className="minus" onClick={dec}>
          -
        </button>
        <span className="counter">{counter}</span>
        <button type="button" className="plus" onClick={inc}>
          +
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = ({counter}) => ({
  counter: counter.counter,
});
const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(inc()),
  dec: () => dispatch(dec()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);
