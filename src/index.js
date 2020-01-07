import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => <div>This the dashboard</div>;

const AddExpensePage = () => <div>This the add expense component</div>;

const EditExpensePage = () => <div>This the edit expense component</div>;

const HelpPage = () => <div>This the help component</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
