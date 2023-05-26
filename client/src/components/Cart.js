import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    console.log(product.name);
    dispatch({ type: 'ADD_PRODUCT', product: product.name });
    dispatch({ type: 'INC' });
    dispatch({ type: 'PRICE', price: product.price });

  };
  return (
    <div className="container-cart">
      <div className="img-item">
        <img src="./image/burger.jpeg" />
      </div>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <button className="addCartButton" onClick={handleAddProduct}>Add to Cart</button>
    </div>
  );
};
