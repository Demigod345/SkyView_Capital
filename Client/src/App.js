import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Profile from './pages/profile';
import About from './pages/about';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/about" element = {<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
