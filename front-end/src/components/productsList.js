import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandler = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <input
        className="search-box"
        onChange={searchHandler}
        type="search"
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
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>$ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button
                className="delbtn"
                onClick={() => deleteProduct(item._id)}
              >
                Delete
              </button>
              <Link className="upbtn" to={"/update/" + item._id}>
                Update
              </Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found.</h1>
      )}
    </div>
  );
};

export default ProductsList;
