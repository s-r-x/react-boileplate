import {all} from 'redux-saga/effects';
import counter from '@/features/counter/sagas';

export default function* rootSaga() {
  yield all([counter()]);
}
