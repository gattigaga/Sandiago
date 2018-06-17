import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Account from "../Account";
import AccountList from "../AccountList";

describe("AccountList", () => {
  Date.now = jest.fn(() => 1529208317880);

  const setup = propOverrides => {
    const props = {
      items: [
        {
          id: 1,
          name: "Facebook",
          description: "This is my Facebook account.",
          date: Date.now()
        },
        {
          id: 2,
          name: "Twitter",
          description: "This is my Twitter account.",
          date: Date.now()
        },
        {
          id: 3,
          name: "Google",
          description: "This is my Google account.",
          date: Date.now()
        }
      ],
      onPress: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<AccountList {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should calls 'onPress' while Account item pressed", () => {
    const { wrapper, props } = setup();

    wrapper
      .find(Account)
      .at(0)
      .simulate("press");

    expect(props.onPress).toBeCalledWith(props.items[0]);
  });
});
