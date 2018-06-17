import { REMOVE_ACCOUNT, removeAccount } from "../../actions";

describe("removeAccount()", () => {
  it("should returns expected action", () => {
    const accountID = "1";

    const expected = {
      type: REMOVE_ACCOUNT,
      payload: accountID
    };

    const action = removeAccount(accountID);

    expect(action).toEqual(expected);
  });
});
