import { takeEvery, fork } from "redux-saga/effects";

import * as Types from "./actionTypes";
import * as CustomerWorkers from "./sagaWorkers";

export function* setCustomerId() {
  yield takeEvery(Types.SET_CUSTOMER_ID, function*(action: any) {
    yield CustomerWorkers.setCustomerId(action.id);
  });
}

export const sagas = [fork(setCustomerId)];
