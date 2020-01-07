import React from "react";
import { NavLink } from "react-router-dom";

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

export default Header;
