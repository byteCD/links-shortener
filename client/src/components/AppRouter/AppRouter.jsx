import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
