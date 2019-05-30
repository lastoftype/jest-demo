import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as CustomerActions from "./store/customer/actionCreators";
import * as CustomerSelectors from "./store/customer/selectors";

import { connect } from "react-redux";

import Dropdown from "./components/Dropdown";

export interface Props {
  customer: {
    id: string;
  };
  setCustomerId: (id: string) => void;
}

export const App: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <Dropdown />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customer: CustomerSelectors.selectCustomer(state)
});

const mapDispatchToProps = {
  setCustomerId: CustomerActions.setCustomerId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
