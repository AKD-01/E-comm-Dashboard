import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const submitHandler = () => {
    console.log(name, price, category, company);
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
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
