import React, { useState } from "react";
import Styles from "./pagination.module.css"

const Pagination = ({ data, itemPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(data.length / itemPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const pageNumber = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-4 mb-4 gap-2">
      {pageNumber.map((number) => (
        <button
          key={number}
          className={`${
            currentPage === number ? Styles["pagination-btn-active"] : Styles["pagination-btn-inactive"]
          }`}
          onClick={() => handleClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
