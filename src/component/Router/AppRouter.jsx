import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Navbar from "../navbar/Navbar";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Project from "../../pages/Blog/Project";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
