import { SET_USER_SESSION, setUserSession } from "../../actions";

describe("setUserSession()", () => {
  it("should returns expected action", () => {
    const user = {
      pin: "123456",
      isLoggedIn: false
    };

    const expected = {
      type: SET_USER_SESSION,
      payload: user
    };

    const action = setUserSession(user);

    expect(action).toEqual(expected);
  });
});
