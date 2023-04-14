import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log("products", products);
  return (
    <div className="product-list">
      <h1>Products List</h1>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>
    </div>
  );
};

export default ProductsList;
