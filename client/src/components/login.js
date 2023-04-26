import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const LoginHandler = async () => {
    let result = await fetch("/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details!");
    }
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
