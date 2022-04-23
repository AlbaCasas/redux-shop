import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "src/features/admin/pages/Dashboard";
import Shop from "src/features/shop/pages/Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="admin" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
