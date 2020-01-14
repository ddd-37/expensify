// import React from "react";
// import ReactDOM from "react-dom";
// import "normalize.css/normalize.css";
// import "./styles/style.scss";
// import AppRouter from "./routers/AppRouter";

// ReactDOM.render(<AppRouter />, document.getElementById("root"));

// Redux stuff
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => {
        return expense.id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates // This will override any of the ones that were passed down
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: undefined,
  endDate: undefined
};

// SET_TEXT_FILTER
const setTextFilter = text => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };

    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    // If start date is not a number, we don't need to care about the startDate
    // OR the created date occured after the startDate we're looking for
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;

    // If start date is not a number, we don't need to care about the startDate
    // OR the created date occured before the startDate we're looking for
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;

    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log("TCL: visible", visible);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 111100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Dinner", amount: 4000, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter("boogaloo"));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
