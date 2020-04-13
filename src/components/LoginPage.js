import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../redux/actions/auth";

const LoginPage = ({ dispatch }) => {
  const handleLogin = () => {
    dispatch(startLogin());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default connect()(LoginPage);
