import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import HeaderButton from "../HeaderButton";

describe("HeaderButton", () => {
  const setup = propOverrides => {
    const props = {
      icon: "ios-settings",
      onPress: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<HeaderButton {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should calls 'onPress' while pressed", () => {
    const { wrapper, props } = setup();

    wrapper.simulate("press");

    expect(props.onPress).toBeCalled();
  });
});
