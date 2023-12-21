import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import ProtectedRoutes from "./pages/protectedroutes";
import Learn from "./pages/learn";
import News from "./Mycomps/news";
import Loading from "./pages/loading";
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
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/news" element={<News />} />
            <Route path="/loading" element={<Loading />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;