import * as React from "react";
import { mount, ReactWrapper } from "enzyme";

import { mockStore } from "../../__mocks__/store";
import "../../setupTests";

import {
  Dropdown,
  mapDispatchToProps,
  Props,
  State
} from "../../../src/components/Dropdown";

import { Store } from "redux";
import { Provider } from "react-redux";

describe("<Dropdown />", () => {
  let wrapper: ReactWrapper<Props, State>;
  let store: Store;

  beforeEach(() => {
    // Set up store as a mock
    store = mockStore({ customer: { id: null } });

    // Set up mounted component with Redux
    wrapper = mount(
      <Provider store={store}>
        <Dropdown {...mapDispatchToProps} />
      </Provider>
    );
  });

  it("renders", () => {
    expect(wrapper).toExist();
  });

  it("shows menu", () => {
    // Click on toggle
    wrapper.find(".button").simulate("click");

    // .menu should be there
    expect(wrapper.find(".menu")).toBeDefined();

    // Find 3 <li /> elements
    expect(wrapper.find(".menu li").length).toBe(3);
  });

  it("mounted component state is changed", () => {
    const mounted: any = mount(<Dropdown {...store} {...mapDispatchToProps} />);

    expect(mounted.state().open).toBe(false);

    // Click on button
    mounted.find(".button").simulate("click");

    // State has changed
    expect(mounted.state().open).toBe(true);
  });

  it("dispatches an action", () => {
    const dispatch = jest.fn();
    const action = mapDispatchToProps.setCustomerId("asd");

    dispatch(action);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
