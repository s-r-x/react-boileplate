import { all } from "redux-saga/effects";
import counter from "@/screens/counter/store/sagas";

export default function* rootSaga() {
  yield all([counter()]);
}
