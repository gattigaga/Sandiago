import { addAccount, removeAccount, updateAccount } from "../../actions";
import { accounts } from "../../reducers";

describe("accounts()", () => {
  it("should returns initial state", () => {
    const expected = [];
    const result = accounts(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should add new account", () => {
    const account = {
      username: "admin",
      password: "admin"
    };

    const expected = [account];

    const action = addAccount(account);
    const result = accounts(undefined, action);

    expect(result).toEqual(expected);
  });

  it("should remove an account", () => {
    const initial = [
      {
        id: "1",
        username: "admin",
        password: "admin"
      },
      {
        id: "2",
        username: "admin1",
        password: "admin1"
      }
    ];

    const expected = [initial[0]];

    const action = removeAccount("2");
    const result = accounts(initial, action);

    expect(result).toEqual(expected);
  });

  it("should update an account", () => {
    const data = {
      username: "newAdmin",
      password: "newAdmin"
    };

    const initial = [
      {
        id: "1",
        username: "admin",
        password: "admin"
      },
      {
        id: "2",
        username: "admin1",
        password: "admin1"
      }
    ];

    const expected = [
      initial[0],
      {
        id: "2",
        ...data
      }
    ];

    const action = updateAccount("2", data);
    const result = accounts(initial, action);

    expect(result).toEqual(expected);
  });
});
