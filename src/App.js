import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ResumeList from "./pages/ResumeList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<ResumeList />} path="/resume-list" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
