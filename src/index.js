import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "normalize.css/normalize.css";
import "./styles/style.scss";

// COMPONENTS
import AppRouter from "./routers/AppRouter";

//REDUX
import configureStore from "./redux/store/configureStore";
import { addExpense } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filters";
import getVisibleExpenses from "./redux/selectors/expenses";
const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));

store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("gas"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById("root"));
