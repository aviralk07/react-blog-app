import React from "react";
import "./App.css";
import Home from "./pages/home";
import Blog from "./pages/blog";
import { Route , Routes } from "react-router-dom";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  </div>
);

export default App;
