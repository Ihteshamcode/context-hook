import React, { useState } from "react";
import context from "./context/Context";
import "./App.css";
import Login from "./components/Login";
import Sign from "./components/Sign";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <context.Provider value={{ user, setUser }}>
        <Login />
        <Sign />
      </context.Provider>
    </>
  );
}

export default App;
