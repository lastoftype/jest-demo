import { put } from "redux-saga/effects";

import * as Types from "./actionTypes";

export function* setCustomerId(id: string) {
  yield put({ id, type: Types.SET_CUSTOMER_ID_SUCCESS });
}

export function* setCustomer(customer: { id: string; name: string }) {
  yield new Promise(resolve => resolve(customer));
}
