import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Button from "../Button";

describe("Button", () => {
  const setup = propOverrides => {
    const props = {
      caption: "Login",
      onPress: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Button {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should renders with custom style", () => {
    const { wrapper } = setup({ style: [{ backgroundColor: "red" }] });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should calls 'onPress' while pressed", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("press");

    expect(props.onPress).toBeCalled();
  });
});
