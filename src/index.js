// import React from "react";
// import ReactDOM from "react-dom";
// import "normalize.css/normalize.css";
// import "./styles/style.scss";
// import AppRouter from "./routers/AppRouter";

// ReactDOM.render(<AppRouter />, document.getElementById("root"));

// Redux stuff
import { createStore } from "redux";

// ACTION GENERATORS - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setTo = store.getState().count } = {}) => ({
  type: "SET",
  setTo
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "SET":
      return {
        count: action.setTo
      };

    case "RESET":
      return {
        count: (state.count = 0)
      };

    default:
      return state;
  }
});

// // By assigning the subcribe to a variable we can remove the subscription by assigning it a variable
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
// // Actions - on object that gets sent to the store

// // INCREMENT - I'd like to increment the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount());

store.dispatch(setCount({ setTo: 101 }));
