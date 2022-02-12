import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  const [isLogin, setIslogin] = useState();
  const [token, setToken] = useState();

  const handleLogout = () => {
    setIslogin(false);
    setToken("");
  };

  useEffect(() => {
    setIslogin(false);
    setToken("");
  }, []);

  return (
    <div className="main-app">
      <BrowserRouter>
        <Header isLogin={isLogin} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/login"
            element={<Login setIslogin={setIslogin} setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
