// src/components/Pagination.js
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Pagination = () => {
  const { pagination, setPagination, totalProducts } = useContext(ProductContext);

  const totalPages = Math.ceil(totalProducts / pagination.productsPerPage);

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)} className={pagination.currentPage === index + 1 ? "active" : ""}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
