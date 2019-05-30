import { put } from "redux-saga/effects";

import * as CustomerWorkers from "../../../store/customer/sagaWorkers";
import * as Types from "../../../store/customer/actionTypes";
import { ApiDemo } from "../../../__mocks__/api";

const CUSTOMER_ID: string = "asd";

describe("Customer Workers", () => {
  it("yields a put() effect", () => {
    const gen = CustomerWorkers.setCustomerId(CUSTOMER_ID);

    // First yield
    const val = gen.next().value;

    const expectedYield = put({
      type: Types.SET_CUSTOMER_ID_SUCCESS,
      id: CUSTOMER_ID
    });

    expect(val).toStrictEqual(expectedYield);
  });
});

describe("API", () => {
  it("calls get", async done => {
    const response = await ApiDemo.get();
    expect(response).toBe(CUSTOMER_ID);
    done();
  });
});

describe("worker with promise", () => {
  const customer = { id: "23", name: "asd" };
  const gen = CustomerWorkers.setCustomer(customer);
  gen.next().value.then(data => {
    expect(data).toBe(customer);
  });
});
