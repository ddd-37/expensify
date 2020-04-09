import {
  addExpense,
  removeExpense,
  editExpense
} from "./../../redux/actions/expenses";

test("SHOULD SETUP REMOVE EXPENSE ACTION OBJECT", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});
