import {put, debounce} from 'redux-saga/effects';
import {inc, dec, DOMAIN} from './slice';

const TIMEOUT = 500;

function* delayIncSaga() {
  yield put(inc());
}
function* delayDecSaga() {
  yield put(dec());
}
export default function* counterSaga() {
  yield debounce(TIMEOUT, `${DOMAIN}/delayInc`, delayIncSaga);
  yield debounce(TIMEOUT, `${DOMAIN}/delayDec`, delayDecSaga);
}
