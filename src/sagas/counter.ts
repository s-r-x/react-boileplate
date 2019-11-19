import {put, delay, takeLatest} from 'redux-saga/effects';
import {ASYNC_INC, ASYNC_DEC} from '@/constants/counter';
import {inc, dec} from '@/actions/counter';

function* asyncInc() {
  yield delay(500);
  yield put(inc());
}
function* asyncDec() {
  yield delay(500);
  yield put(dec());
}
export default function* counterSaga() {
  yield takeLatest(ASYNC_INC, asyncInc);
  yield takeLatest(ASYNC_DEC, asyncDec);
}
