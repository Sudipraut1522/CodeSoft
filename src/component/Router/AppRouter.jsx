import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Navbar from "../navbar/Navbar";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
