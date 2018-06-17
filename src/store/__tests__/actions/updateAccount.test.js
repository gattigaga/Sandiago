import { UPDATE_ACCOUNT, updateAccount } from "../../actions";

describe("updateAccount()", () => {
  it("should returns expected action", () => {
    const accountID = "1";
    const data = {
      username: "admin",
      password: "admin"
    };

    const expected = {
      type: UPDATE_ACCOUNT,
      payload: {
        data,
        id: accountID
      }
    };

    const action = updateAccount(accountID, data);

    expect(action).toEqual(expected);
  });
});
