import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
  const {cart, setCart} = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys =Object.keys(saveCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd =>pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    console.log(cartProducts);
    
  })
  return (
    <div>
      <h1>This is review.</h1>
    </div>
  );
};

export default Review;