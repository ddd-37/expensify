import { login, logout } from "./../../redux/actions/auth";
test("should generate login action object", () => {
  const uid = "abc123youandmegirl";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
