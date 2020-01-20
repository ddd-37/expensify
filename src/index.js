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
//import getVisibleExpenses from "./redux/selectors/expenses";
import { Provider } from "react-redux"; // Provides the store to all the components that make up our application
const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));

store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("gas"));
}, 3000);

const state = store.getState();
//console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
