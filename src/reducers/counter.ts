import {INC, DEC} from '@/constants/counter';
import {IAction} from '@/actions/counter';

const initialState = 0;

export default (state = initialState, {type}: IAction) => {
  switch (type) {
    case INC:
      return state + 1;
    case DEC:
      return Math.max(0, state - 1);
    default:
      return state;
  }
};
