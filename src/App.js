// src/App.js
import React from "react";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import ProductProvider from "./context/ProductContext";
import "./App.css";

const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <h1>E-Commerce Store</h1>
        <Filters />
        <Sorting />
        <ProductList />
        <Pagination />
      </div>
    </ProductProvider>
  );
};

export default App;
