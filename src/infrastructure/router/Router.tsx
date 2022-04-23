import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "src/features/shop/pages/Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
