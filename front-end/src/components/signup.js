import React from "react";

const SignUp = () => {
  return (
    <div className="form">
      <h1 className="signup-header">Register</h1>
      <input className="inputfield" type="text" placeholder="Enter Name" />
      <input className="inputfield" type="text" placeholder="Enter Email" />
      <input className="inputfield" type="password" placeholder="Enter Password" />
    </div>
  );
};

export default SignUp;
