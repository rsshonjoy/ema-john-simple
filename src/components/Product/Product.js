import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props.product.name);
  const {img, name} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
      </div>
    </div>
  );
};

export default Product;