import React, { useContext, useState } from "react";
import context from "../context/Context";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(context);
  const handleSubmit = (e) => {
    e.preventDefault;
    setUser({ userName, password });
  };
  return (
    <div>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="username"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
