import {INC, DEC} from '@/constants/counter';

const initialState = 0;

export default (state = initialState, {type}) => {
  switch (type) {
    case INC:
      return state + 1;
    case DEC:
      return Math.max(0, state - 1);
    default:
      return state;
  }
};
