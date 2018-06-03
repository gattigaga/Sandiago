import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import PinInput, { Input, ErrorText } from "../PinInput";

describe("PinInput", () => {
  const setup = propOverrides => {
    const props = {
      value: [...Array(6)].map(() => ""),
      onChange: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<PinInput {...props} />);

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
    const style = [{ backgroundColor: "red" }];
    const { wrapper } = setup({ style });

    expect(wrapper.props().style).toEqual(style);
  });

  it("should renders in error state", () => {
    const { wrapper } = setup({ isError: true, errorText: "Pin is required" });
    const $errorText = wrapper.find(ErrorText);
    const $input = wrapper.find(Input);

    expect($errorText.exists()).toEqual(true);

    $input.forEach(node => {
      expect(node.props().underlineColorAndroid).toEqual("#ff5252");
      expect(node.props().color).toEqual("#ff5252");
    });
  });
});
