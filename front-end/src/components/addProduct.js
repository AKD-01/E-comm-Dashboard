import React from 'react';

const AddProduct = () => {
  return (
    <div className='form'>
      <h1>Add Product</h1>
      <input className='inputfield' type='text' placeholder='Enter Product Name' />
      <input className='inputfield' type='text' placeholder='Enter Product Price' />
      <input className='inputfield' type='text' placeholder='Enter Product Category' />
      <input className='inputfield' type='text' placeholder='Enter Product Company' />
      <button className='btn' type='button'>Add Product</button>
    </div>
  );
};

export default AddProduct;
