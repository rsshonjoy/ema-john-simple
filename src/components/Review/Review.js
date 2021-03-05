import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderedPlaced] = useState([false]);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderedPlaced(true);
    processOrder();
  }
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

  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyImage} alt=""/>
  }
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
        {
          thankYou
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;