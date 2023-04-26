import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/")
  };

  return (
    <div className="form">
      <h1>Add Product</h1>
      <input
        className="inputfield"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Name"
      />
      {error && !name && (
        <span className="invalid-input">Enter Valid Name</span>
      )}
      <input
        className="inputfield"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Price"
      />
      {error && !price && (
        <span className="invalid-input">Enter Valid Price</span>
      )}
      <input
        className="inputfield"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Category"
      />
      {error && !category && (
        <span className="invalid-input">Enter Valid Category</span>
      )}
      <input
        className="inputfield"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        type="text"
        placeholder="Enter Product Company"
      />
      {error && !company && (
        <span className="invalid-input">Enter Valid Company</span>
      )}
      <button onClick={submitHandler} className="btn" type="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
