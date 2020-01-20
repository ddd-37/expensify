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
import { Provider } from "react-redux"; // Provides the store to all the components that make up our application
const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4000 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent bill", amount: 102942 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
