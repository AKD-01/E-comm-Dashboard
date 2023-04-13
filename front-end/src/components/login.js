import React from "react";

const Login = () => {
  return (
    <div className="login">
      <input className="inputfield" type="email" placeholder="Enter Email" />
      <input className="inputfield" type="password" placeholder="Enter Password" />
      <button className="btn" type="button">Login</button>
    </div>
  );
};

export default Login;
