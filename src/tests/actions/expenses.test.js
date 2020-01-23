import {
  addExpense,
  editExpense,
  removeExpense
} from "./../../redux/actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit action object", () => {
  const action = editExpense("123abc", { amount: 12345 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      amount: 12345
    }
  });
});

test("should setup add expense action objet with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 102938,
    createdAt: 1000,
    note: "This was for rent"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
