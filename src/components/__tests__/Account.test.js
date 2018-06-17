import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Account from "../Account";

describe("Account", () => {
  const setup = propOverrides => {
    const props = {
      name: "Facebook",
      description: "This is my first Facebook account",
      date: "09:05 AM",
      onPress: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Account {...props} />);

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
