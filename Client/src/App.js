import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import About from "./pages/about";
import ProtectedRoutes from "./pages/protectedroutes";
import Learn from "./pages/learn";
import News from "./Mycomps/news";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;