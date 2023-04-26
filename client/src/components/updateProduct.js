import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`/products/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const submitHandler = async () => {
    let result = await fetch(`/products/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="form">
      <h1>Update Product</h1>
      <input
        className="inputfield"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Name"
      />
      <input
        className="inputfield"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Price"
      />
      <input
        className="inputfield"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Category"
      />
      <input
        className="inputfield"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Company"
      />
      <button onClick={submitHandler} className="btn" type="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
