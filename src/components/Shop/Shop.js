import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map( existingKey => {
      const product = fakeData.find(pd => pd.key === existingKey);
      console.log(existingKey, saveCart[existingKey]);
      
    })
    console.log(saveCart);
  }, [])

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);

    let count = 1;
    let newCart;
    if (sameProduct) {
      count =sameProduct.Quantity + 1;
      sameProduct.Quantity = count;
      const others = cart.filter(pd => pd.key!== toBeAddedKey)
      newCart = [...others, sameProduct];
    }else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    
    setCart(newCart);
    
    addToDatabaseCart(product.key, count);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
          {
            products.map(pd => <Product
            key={pd.key}
            showAddTCart={true} 
            handleAddProduct={handleAddProduct} 
            product={pd}
            > </Product>)
          }
      </div>
      <div className="card-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;