import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  return (
    <div className="form">
      <h1 className="signup-header">Register</h1>
      <input className="inputfield" type="text" placeholder="Enter Name" />
      <input className="inputfield" type="text" placeholder="Enter Email" />
      <input
        className="inputfield"
        type="password"
        placeholder="Enter Password"
      />
      <button className="btn" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
