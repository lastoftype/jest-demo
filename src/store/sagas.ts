import { all } from "redux-saga/effects";

import { sagas as customerSagas } from "./customer/sagaWatchers";

export function* sagas() {
  yield all([...customerSagas]);
}
