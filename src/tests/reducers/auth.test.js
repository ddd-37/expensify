import authReducer from "../../redux/reducers/auth";

test("should test uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123youandmegirl",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };

  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
