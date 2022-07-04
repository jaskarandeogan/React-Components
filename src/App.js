import { Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Component1 from "./components/Component1";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="second" element={<Component1 end={100000} start={0} timer={10}  />} />
      </Routes>
    </div>
  );
};

export default App;
