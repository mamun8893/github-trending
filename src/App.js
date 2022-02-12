import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import TopUserCountry from "./pages/TopUserCountry/TopUserCountry";
import TopStarsRepo from "./pages/TopStars/TopStarsRepo";

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
          <Route path="/" element={<Home />} />
          <Route path="/top-users" element={<TopUserCountry />} />
          <Route path="/top-repos" element={<TopStarsRepo />} />
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
