import React from "react";
import ReactDOM from "react-dom";
import ConnectedApp, { App, Props } from "./App";

import { Provider } from "react-redux";
import { mockStore } from "./__mocks__";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={mockStore({})}>
      <App customer={{ id: null }} setCustomerId={() => {}} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("accepts args for store", () => {
  const props: Props = {
    customer: {
      id: "123"
    },
    setCustomerId: (id: string) => {}
  };
  let component = shallow(<App {...props} />);
  expect(component).toBeDefined();
});
