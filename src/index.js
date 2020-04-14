import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "normalize.css/normalize.css";
import "./styles/style.scss";

// COMPONENTS
import AppRouter, { history } from "./routers/AppRouter";

//REDUX
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux"; // Provides the store to all the components that make up our application
import { startSetExpenses } from "./redux/actions/expenses";

//FIREBASE
import { firebase } from "./firebase/firebase.js";
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
// Function to handle when the app renders
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

// Code to handle log in and redierct of log out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    history.push("/");
  }
});
