import { ADD_ACCOUNT, addAccount } from "../../actions";

describe("addAccount()", () => {
  it("should returns expected action", () => {
    const account = {
      username: "admin",
      password: "admin"
    };

    const expected = {
      type: ADD_ACCOUNT,
      payload: account
    };

    const action = addAccount(account);

    expect(action).toEqual(expected);
  });
});
