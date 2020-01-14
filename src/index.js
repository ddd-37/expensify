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

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

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
        console.log(expense.id);
        console.log(action.id);
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

const setTextFilter = text => ({
  type: "SET_TEXT_FILTER",
  text
});

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 111100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Dinner", amount: 4000 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter("boogaloo"));
