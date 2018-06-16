import { setUserSession } from "../../actions";
import { userSession } from "../../reducers";

describe("userSession()", () => {
  it("should returns initial state", () => {
    const expected = null;
    const result = userSession(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should set new user session", () => {
    const expected = {
      pin: "123456",
      isLogged: true
    };
    const action = setUserSession(expected);
    const result = userSession(undefined, action);

    expect(result).toEqual(expected);
  });
});
