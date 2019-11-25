import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    inc(state) {
      return state + 1;
    },
    dec(state) {
      return Math.max(0, state - 1);
    },
    delayInc: state => state,
    delayDec: state => state,
  },
});

export const {inc, dec, delayInc, delayDec} = counterSlice.actions;

export default counterSlice.reducer;
