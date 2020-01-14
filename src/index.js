// import React from "react";
// import ReactDOM from "react-dom";
// import "normalize.css/normalize.css";
// import "./styles/style.scss";
// import AppRouter from "./routers/AppRouter";

// ReactDOM.render(<AppRouter />, document.getElementById("root"));

// Redux stuff
import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "asdge4456",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 0,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
