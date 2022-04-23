import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "src/features/auth/pages/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
