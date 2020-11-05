import { createSlice, createAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inc: (state) => state + 1,
    dec: (state) => Math.max(0, state - 1),
  },
});

export const DOMAIN = counterSlice.name;
export const delayInc = createAction(`${DOMAIN}/delayInc`);
export const delayDec = createAction(`${DOMAIN}/delayDec`);

export const { inc, dec } = counterSlice.actions;
export const Actions = {
  ...counterSlice.actions,
  delayInc,
  delayDec,
};

export default counterSlice.reducer;
