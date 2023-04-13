import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const LoginHandler = () => {
    console.log(email, password);
  }
  return (
    <div className="login">
      <input
        className="inputfield"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Enter Email"
      />
      <input
        className="inputfield"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter Password"
      />
      <button className="btn" onClick={ LoginHandler } type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
