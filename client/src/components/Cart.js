import React, { useState } from 'react';

export const Cart = ({ cart }) => {
  const [countProduct, setCountProduct] = useState(0);

  const addProduct = () => {
    setCountProduct(countProduct + 1);
    console.log(countProduct);
  };

  return (
    <div className="container-cart">
      <div className="img-item">
        <img src="./image/burger.jpeg" />
      </div>
      <h3>{cart.name}</h3>
      <h3>{cart.price}</h3>
      <button className="addCartButton" onClick={addProduct}>Add to Cart</button>
    </div>
  );
};
