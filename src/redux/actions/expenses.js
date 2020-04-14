import db from "./../../firebase/firebase";

// Expense actions

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  console.log("startAddExpense -> startAddExpense");
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    db.ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// START_REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // Return that promise!
    return db
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        console.log("Sucesfuly removed item");
        dispatch(removeExpense({ id }));
      })
      .catch((e) => {
        console.log("ERROR Removing Item: ", e);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// START_EDIT_EXPENSE
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((e) => {
        console.log("ERROR updating item: ", e);
      });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

// START_SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenses = [];
    // NEED TO RETURN HERE SINCE WE'RE LOOKING FOR A PROMISE IN INDEX.JS
    return db
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((child) => {
          expenses.push({
            id: child.key,
            ...child.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
