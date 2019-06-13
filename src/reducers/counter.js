import * as _ from '../actions/constants';

const initialState = {
  counter: 0,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case _.INC:
      return {...state, counter: state.counter + 1};
    case _.DEC:
      return {...state, counter: Math.max(0, state.counter - 1)};
    default:
      return state;
  }
}

export default rootReducer;
