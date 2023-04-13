import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const LoginHandler = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
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
      <button className="btn" onClick={LoginHandler} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
