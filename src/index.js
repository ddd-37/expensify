import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const ExpenseDashboardPage = () => <div>This the dashboard</div>;

const AddExpensePage = () => <div>This the add expense component</div>;

const EditExpensePage = () => <div>This the edit expense component</div>;

const HelpPage = () => <div>This the help component</div>;

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <span> </span>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create Expense
    </NavLink>
    <span> </span>
    <NavLink to="/edit" activeClassName="is-active" exact={true}>
      Edit Page
    </NavLink>
    <span> </span>
    <NavLink to="/help" activeClassName="is-active" exact={true}>
      Help Page
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
