import {DEC, INC, ASYNC_INC, ASYNC_DEC} from '@/constants/counter';

export const dec = () => ({
  type: DEC,
});
export const inc = () => ({
  type: INC,
});
export const asyncInc = () => ({
  type: ASYNC_INC,
});
export const asyncDec = () => ({
  type: ASYNC_DEC,
});
