import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
const App = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen">
      {/* navbar */}
      <Nav />
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
