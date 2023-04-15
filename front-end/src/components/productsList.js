import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
      alert("Record is deleted");
    }
  };

  const searchHandler = async (e) => {
    let key = e.target.value;
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <input
        className="search-box"
        onChange={searchHandler}
        type="text"
        placeholder="Search Product"
      />
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>$ {item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button className="delbtn" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
            <Link className="upbtn" to={"/update/" + item._id}>
              Update
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
