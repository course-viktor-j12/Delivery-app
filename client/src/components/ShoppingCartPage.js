import { useSelector } from "react-redux";
import { useState } from "react";
import { Basket } from "./Basket";

export const ShoppingCartPage = () => {
  const products = useSelector((state) => state)
  console.log(products)

  const totalPrice = products.reduce((acc, product) => {
    return acc + (product.counter * product.price)
}, 0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container-shoppingCart">
      <div className="container-client">
        <form className="form-client" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="input"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              placeholder="input"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone:</label>
            <input
              className="form-control"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="input"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="address">Address:</label>
            <input
              className="form-control"
              type="text"
              placeholder="input"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="">
            <h3>Total price: {totalPrice}</h3>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="container-basket">
        {
          products.length === 0 ? (
            <h2>Choose any product</h2>
          ) : (
            products.map((element, index) => <Basket product={element} key={index} />)
          )
        }
      </div>
    </div>
  );
};
