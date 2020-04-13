import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "normalize.css/normalize.css";
import "./styles/style.scss";

// COMPONENTS
import AppRouter from "./routers/AppRouter";

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

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("log in");
  } else {
    console.log("log out");
  }
});
