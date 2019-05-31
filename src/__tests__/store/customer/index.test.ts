import { call, put, select, SimpleEffect } from "redux-saga/effects";

import * as CustomerWorkers from "../../../store/customer/sagaWorkers";
import { CallEffect } from "redux-saga/effects";
import * as CustomerSelectors from "../../../store/customer/selectors";
// import * as Types from "../../../store/customer/actionTypes";

describe("testing", () => {
  test("bad response", async () => {
    const gen: IterableIterator<any> = CustomerWorkers.setCustomer({
      id: "asd",
      name: "mike"
    });

    let input: any = {};
    let actual: SimpleEffect<any, any>;
    let expected: SimpleEffect<any, any>;
    let response: any = {};

    // Select customer
    actual = gen.next().value;
    expected = select(CustomerSelectors.selectCustomer);
    expect(actual).toStrictEqual(expected);

    // Fetch api call
    input = "asd";
    actual = gen.next(input).value;
    expected = call(fetch, `https://swapi.co/api/people/${input}/`);
    expect(actual).toStrictEqual(expected);

    // Bad response
    input = null;
    actual = gen.next(input).value;
    expected = put({ type: "asd" });
    expect(actual).toStrictEqual(expected);

    // Saga is over
    expect(gen.next().done).toBe(true);
  });

  test("good response", async () => {
    const customer = {
      id: "asd",
      name: "mike"
    };
    const gen: IterableIterator<any> = CustomerWorkers.setCustomer(customer);

    let input: any = {};
    let actual: SimpleEffect<any, any>;
    let expected: SimpleEffect<any, any>;
    let response: any = {};

    // Select customer
    actual = gen.next().value;
    expected = select(CustomerSelectors.selectCustomer);
    expect(actual).toStrictEqual(expected);

    // Fetch api call
    input = "asd";
    actual = gen.next(input).value;
    expected = call(fetch, `https://swapi.co/api/people/${input}/`);
    expect(actual).toStrictEqual(expected);

    // Good response
    input = { ...customer };
    actual = gen.next(input).value;
    expected = put({ type: "success", response: input });
    expect(actual).toStrictEqual(expected);

    // thing()
    input = { id: 123, items: [{ id: "one" }, { id: "two" }] };
    actual = gen.next(input).value;
    expected = select(CustomerSelectors.selectActiveOrder);
    expect(actual).toStrictEqual(expected);

    // put() update
    input = { id: 123, items: [{ id: "one" }, { id: "two" }] };
    actual = gen.next(input).value;
    expected = put({ type: "update", activeOrder: input });
    expect(actual).toStrictEqual(expected);
  });
});
