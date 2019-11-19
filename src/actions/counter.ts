import {Action} from 'redux';
import {DEC, INC, ASYNC_INC, ASYNC_DEC} from '@/constants/counter.ts';

export interface IAction extends Action {
  type: DEC | INC | ASYNC_INC | ASYNC_DEC;
}
export const dec = (): IAction => ({
  type: DEC,
});
export const inc = (): IAction => ({
  type: INC,
});
export const asyncInc = (): IAction => ({
  type: ASYNC_INC,
});
export const asyncDec = (): IAction => ({
  type: ASYNC_DEC,
});
