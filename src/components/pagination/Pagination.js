// npm install react-paginate --save to install the react-paginate

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//  Component Props

// apiUrl : api url for which to connect

// PerPage : number of cards you wanna show per page

const Pagination = (props) => {
  // States to handle
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PerPage = props.PerPage ? props.PerPage : 6;
  const apiUrl = props.apiUrl
    ? props.apiUrl
    : "https://restcountries.com/v3.1/all";
//   console.log(apiUrl);
  // Loading data
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    axios.get(apiUrl).then((result) => {
    //   console.log(result.data);
      setData(result.data);
    });
  }

  // Handle page click
  function handlePageClick({ selected: selectedPage }) {
    // console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }
  // 0,10,20,30,40....

  const offset = currentPage * PerPage;
//   console.log("offset", offset);

  const currentPageData = data
    .slice(offset, offset + PerPage)
    .map((result, index) => {
      return (
        <>
          {/* write html here for cards */}
          <div className="card-wrapper" key={index}>
            <div className="card-image">
              <img src={result.flags.png}  />
            </div>
            <h4 className="card-heading">{result.name.common}</h4>
            <p className="card-description">
                No description
            </p>
            <p>
               Population: {result.population} 
            </p>
            <p>
                Region: {result.region}
            </p>
          </div>
        </>
      );
    });
//   console.log("currentPageData", currentPageData);

  // total pages Calculator
  const pageCount = Math.ceil(data.length / PerPage);

  return (
    <div className="pagination-component">
      <h1>React Pagination</h1>
      {currentPageData}
      <ReactPaginate
        previousLabel={`<`}
        nextLabel={`>`}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={`pagination-nav-container`}
        previousLinkClassName={`pagination-prev`}
        nextLinkClassName={`pagination-next`}
        disabledClassName={`pagination-disabled`}
        activeClassName={`pagination-active`}
      />
    </div>
  );
};
export default Pagination;
