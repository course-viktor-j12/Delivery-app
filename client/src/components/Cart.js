import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = ({ product }) => {
  // console.log(product)
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    console.log(product.name);
    dispatch({
      type: 'ADD_PRODUCT', 
      name: product.name, 
      shop: product.shop,
      counter: 1,
      price: product.price
    });
    // dispatch({ type: 'INC', counter: product.counter +1 });
    // dispatch({ type: 'PRICE', price: product.price });

  };
  return (
    <div className="container-cart d-flex flex-column ">
      <div className="img-item ">
      </div>
      <div className="cart-item">
        <h3 className="fs-6 ">{product.name}</h3>
      </div>
      <div className="cart-item">
        <h3>{product.price}</h3>
      </div>
      <div>
        <button className="addCartButton " onClick={handleAddProduct}>Add to Cart</button>
      </div>
    </div>
  );
};
