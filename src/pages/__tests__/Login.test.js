import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import configureStore from "redux-mock-store";

import ConnectedComponent, { Login } from "../Login";

describe("Login", () => {
  const mockStore = configureStore();

  const setup = (props = {}, isConnected = true) => {
    const state = {
      userSession: null
    };

    const store = mockStore(state);
    store.dispatch = jest.fn();

    const wrapper = isConnected
      ? shallow(<ConnectedComponent store={store} />)
      : shallow(<Login {...props} />);

    return {
      wrapper,
      store
    };
  };

  it("should maps state and dispatch to props", () => {
    const { wrapper } = setup();

    expect(wrapper.props()).toMatchObject({
      me: null,
      saveSession: expect.any(Function)
    });
  });

  it("should maps saveSession to dispatch set user session action", () => {
    const { wrapper, store } = setup();
    const user = {
      pin: "123456",
      isLoggedIn: true
    };

    wrapper.props().saveSession(user);

    expect(store.dispatch).toBeCalledWith({
      type: "SET_USER_SESSION",
      payload: user
    });
  });
});
