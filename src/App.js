import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen">
      {/* Landing */}
      <Routes>
        <Route path="/dashboard" element={<Landing />} />
        {/* Login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
