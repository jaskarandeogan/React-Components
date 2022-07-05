import { Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Component1 from "./components/AnimatedNumber/AnimatedNumber";
import AnimatedDropdown from "./components/AnimatedDropdown/AnimatedDropdown";
import Pagination from "./components/pagination/Pagination";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="first"
          element={<Component1 end={100000} start={0} timer={10} />}
        />
        <Route path="second" element={<AnimatedDropdown />} />
        <Route path="third" element={<Pagination />} />
      </Routes>
    </div>
  );
};

export default App;
