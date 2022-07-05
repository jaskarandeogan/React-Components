import React from "react";
import ReactDOM from "react-dom";
import { Link, Outlet } from "react-router-dom";
import "./Home.css"


const Home = props =>{
    return (
        <div className="home">
          <h1>Home of Components</h1>
          <p> <Link to="first" >The Animated Number </Link> </p>
          <p> <Link to="second" >Animated Dropdown </Link> </p>
          <p> <Link to="third" >Pagination of Cards </Link> </p>
        </div>
      );
}
export default Home;