import {combineReducers} from 'redux';
import counter from './counter/slice';

const reducer = combineReducers({
  counter,
});

export default reducer;
export type TRootState = ReturnType<typeof reducer>;