// src/components/Filters.js
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import useDebounce from '../hooks/useDebounce';

const Filters = () => {
  const { filters, setFilters } = useContext(ProductContext);
  
  // Local state for the search term input
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  
  // Debounced value of search term with 300ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Update filters when the debounced search term changes
  useEffect(() => {
    setFilters((prev) => ({ ...prev, searchTerm: debouncedSearchTerm }));
  }, [debouncedSearchTerm, setFilters]);

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, priceRange: [0, e.target.value] }));
  };

  const handleRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, rating: e.target.value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the local search term
  };

  return (
    <div className="filters">
      <div>
        <label>Category:</label>
        <select onChange={handleCategoryChange} value={filters.category}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <input type="range" min="0" max="1000" value={filters.priceRange[1]} onChange={handlePriceChange} />
        <span>{filters.priceRange[1]}</span>
      </div>
      <div>
        <label>Rating:</label>
        <select onChange={handleRatingChange} value={filters.rating}>
          <option value="0">All</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div>
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange} // Update the search term as the user types
          value={searchTerm} // Set the local state for search term
        />
      </div>
    </div>
  );
};

export default Filters;
