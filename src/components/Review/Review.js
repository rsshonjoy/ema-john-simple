import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys =Object.keys(saveCart);

    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd =>pd.key === key);
      product.quantity = saveCart[key];
      return product;
    })
    setCart(cartProducts);
    
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {
          cart.map(pd => <ReviewItem
          key={pd.key}
          removeProduct={removeProduct}
          product= {pd}
          ></ReviewItem>)
        }
      </div>
    </div>
  );
};

export default Review;