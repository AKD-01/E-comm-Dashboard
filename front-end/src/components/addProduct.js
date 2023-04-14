import React from 'react';

const AddProduct = () => {
  return (
    <div>
      <h1>Add Product</h1>
      <input className='input-field' type='text' placeholder='Enter Product Name' />
      <input type='text' placeholder='Enter Product Price' />
      <input type='text' placeholder='Enter Product Category' />
      <input type='text' placeholder='Enter Product Company' />
    </div>
  );
};

export default AddProduct;
