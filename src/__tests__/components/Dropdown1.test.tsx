import * as React from "react";
import { mount, shallow, ReactWrapper } from "enzyme";

import "../../setupTests";

import { Dropdown } from "../../components/Dropdown";
import { wrap } from "module";

describe("<Dropdown />", () => {
  test("renders", () => {
    let wrapper = shallow(<Dropdown something={[]} setCustomerId={() => {}} />);
    expect(wrapper).toExist();
  });

  test("renders (true)", () => {
    let wrapper = shallow(<Dropdown something={[]} setCustomerId={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("dropdown toggles", () => {
    let wrapper = shallow(<Dropdown something={[]} setCustomerId={() => {}} />);

    expect(wrapper.state("open")).toBe(false);

    wrapper.find(".button").simulate("click");

    expect(wrapper.state("open")).toBe(true);
  });

  test("calls function", () => {
    const callback = jest.fn();
    let wrapper = shallow(<Dropdown something={[]} setCustomerId={callback} />);

    wrapper.find(".button").simulate("click");
    wrapper.find(".button").simulate("click");

    expect(callback).toHaveBeenCalledWith("asd");
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test("async action", () => {
    let wrapper = shallow(<Dropdown something={[]} setCustomerId={() => {}} />);
  });

  test("state with loaded something", () => {
    const a = ["a", "b"];
    let wrapper = shallow(<Dropdown something={a} setCustomerId={() => {}} />);

    expect(wrapper.state("something")).toBe(a);
  });

  test("state with props set", () => {
    const a = ["a", "b"];
    const b: any = [];

    let wrapper = shallow(<Dropdown something={b} setCustomerId={() => {}} />);

    expect(wrapper.state("something")).toBe(b);

    wrapper.setProps({ something: a });

    expect(wrapper.state("something")).toBe(a);
  });
});
