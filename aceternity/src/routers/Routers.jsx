import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/register/LoginPage";
import Main from "../pages/landingpage/Main";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
