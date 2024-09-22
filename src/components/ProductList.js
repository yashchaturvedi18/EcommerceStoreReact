// src/components/ProductList.js
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { paginatedProducts } = useContext(ProductContext);

  return (
    <div className="product-list">
      {paginatedProducts.map((product) => (
        <div key={product.id} className="product">
          <img src={require(`../../public/images/${product.image}`)} 
          alt={product.name} 
            loading="lazy"
          />
          <div>{product.name}</div>
          <div>${product.price}</div>
          <div>{product.rating} stars</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
