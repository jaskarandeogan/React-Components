import React from "react";
import ReactDOM from "react-dom";
import { Link, Outlet } from "react-router-dom";
import { Component1 } from "./components/Component1"

const Home = props =>{
    return (
        <div>
          <h1>Home of Components</h1>
          <p> <Link to="second" >Link to The Animated Number 1</Link> </p>
        </div>
      );
}
export default Home;