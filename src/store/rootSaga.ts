import {all} from 'redux-saga/effects';
import counter from '@/domains/counter/store/sagas';

export default function* rootSaga() {
  yield all([counter()]);
}
