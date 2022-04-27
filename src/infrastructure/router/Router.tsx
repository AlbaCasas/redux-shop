import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "src/features/admin/pages/Dashboard";
import Details from "src/features/shop/pages/Details";
import Shop from "src/features/shop/pages/Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="admin" element={<Dashboard />}></Route>
        <Route path="details/:productId" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
