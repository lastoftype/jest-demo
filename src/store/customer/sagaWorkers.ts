import { put, call, select } from "redux-saga/effects";

import * as Types from "./actionTypes";
import * as CustomerSelectors from "./selectors";

export function* setCustomerId(id: string) {
  yield put({ id, type: Types.SET_CUSTOMER_ID_SUCCESS });
}

export function* testYieldThing() {
  const activeOrder = yield select(CustomerSelectors.selectActiveOrder);

  if (!activeOrder || !activeOrder.id) {
    return null;
  }

  yield put({ type: "update", activeOrder });
}

export function* setCustomer(customer: { id: string; name: string }) {
  const customerInfo = yield select(CustomerSelectors.selectCustomer);

  let response;

  try {
    response = yield call(
      fetch,
      `https://swapi.co/api/people/${customerInfo}/`
    );
  } catch (error) {
    console.log(error);
  }

  if (!response) {
    yield put({ type: "asd" });
  } else {
    yield put({ type: "success", response });
    yield* testYieldThing();
  }
}
