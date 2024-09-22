// src/context/ProductContext.js
import React, { createContext, useState } from "react";
import { products as mockProducts } from "../mockData/mockData";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    rating: 0,
    searchTerm: "",
  });

  const [sortOption, setSortOption] = useState({
    field: "price",
    direction: "asc",
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    productsPerPage: 4,
  });

  const filteredProducts = mockProducts
    .filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) &&
        (filters.rating ? product.rating >= filters.rating : true) &&
        (filters.priceRange ? product.price <= filters.priceRange[1] : true) &&
        (filters.searchTerm ? product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) : true)
      );
    })
    .sort((a, b) => {
      if (sortOption.field === "price") {
        return sortOption.direction === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortOption.field === "name") {
        return sortOption.direction === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortOption.field === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  const start = (pagination.currentPage - 1) * pagination.productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, start + pagination.productsPerPage);

  return (
    <ProductContext.Provider
      value={{
        filters,
        setFilters,
        sortOption,
        setSortOption,
        pagination,
        setPagination,
        paginatedProducts,
        totalProducts: filteredProducts.length,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
