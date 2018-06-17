import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import toJSON from "enzyme-to-json";

import ConnectedComponent, {
  AccountListContainer
} from "../AccountListContainer";

describe("AccountListContainer", () => {
  Date.now = jest.fn(() => 1529122840652);

  const mockStore = configureStore();

  const setup = (props = {}, isConnected = true) => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const wrapper = isConnected
      ? shallow(<ConnectedComponent store={store} />)
      : shallow(<AccountListContainer {...props} />);

    return {
      wrapper,
      store
    };
  };

  it("should renders with accounts", () => {
    const items = [
      {
        id: "1",
        name: "Facebook",
        description: "This is my first facebook account",
        date: Date.now()
      },
      {
        id: "2",
        name: "Twitter",
        description: "This is my first twitter account",
        date: Date.now()
      },
      {
        id: "3",
        name: "Google",
        description: "This is my first google account",
        date: Date.now()
      }
    ];
    const { wrapper } = setup({ items }, false);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should renders without accounts", () => {
    const { wrapper } = setup({}, false);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should maps state and dispatch to props", () => {
    const { wrapper } = setup();

    expect(wrapper.props()).toMatchObject({
      items: []
    });
  });
});
