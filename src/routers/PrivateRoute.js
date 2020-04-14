import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "./../components/Header";

const PrivateRoute = (props) =>
  props.isAuthenticated ? (
    <>
      <Header />
      <Route {...props} />
    </>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
