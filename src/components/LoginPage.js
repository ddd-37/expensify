import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../redux/actions/auth";

const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = {
  startLogin,
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
