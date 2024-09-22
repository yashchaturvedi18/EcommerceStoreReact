// src/components/Sorting.js
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Sorting = () => {
  const { sortOption, setSortOption } = useContext(ProductContext);

  const handleSortChange = (e) => {
    const [field, direction] = e.target.value.split("-");
    setSortOption({ field, direction });
  };

  return (
    <div className="sorting">
      <select onChange={handleSortChange} value={`${sortOption.field}-${sortOption.direction}`}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
