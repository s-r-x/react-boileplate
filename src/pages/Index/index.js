import React from 'react';
import cls from './index.less';
import reactLogo from '../../images/react.svg';
import {connect} from 'react-redux';
import {inc, dec} from '../../actions/creators';

const IndexPage = ({counter, inc, dec}) => (
  <main className={cls.main}>
    <img src={reactLogo} alt="React logo" />
    <h1>Create something rad</h1>
    <h2>(or just a tiny counter)</h2>
    <div className={cls.counterContainer}>
      <button className="minus" onClick={dec}>
        -
      </button>
      <span className="counter">{counter}</span>
      <button className="plus" onClick={inc}>
        +
      </button>
    </div>
  </main>
);

const mapStateToProps = ({counter}) => ({
  counter,
});
const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(inc()),
  dec: () => dispatch(dec()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);
