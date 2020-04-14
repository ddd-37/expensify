import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogOut } from "../redux/actions/auth";

const Header = ({ startLogOut }) => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashboard
      </NavLink>
      <span> </span>
      <NavLink to="/create" activeClassName="is-active" exact={true}>
        Create Expense
      </NavLink>
      <button onClick={startLogOut}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = {
  startLogOut,
};

export default connect(undefined, mapDispatchToProps)(Header);
