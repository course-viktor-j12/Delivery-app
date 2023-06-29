import { useDispatch, useSelector } from "react-redux";
import { useHistory, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { Basket } from "./Basket";

export const ShoppingCartPage = () => {
  const products = useSelector((state) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const totalPrice = products.reduce((acc, product) => {
    return acc + (product.counter * product.price)
  }, 0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    totalPrice: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      totalPrice
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = { ...formData, products }
    axios.post('http://localhost:5000/api/order', order)
      .then((response) => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          totalPrice: ''
        });
        console.log(response);
      })
      .then(() => {
        dispatch({ type: 'DELETE_STATE'})
        navigate('/thankYouPage')
      })
      .catch((error) => console.log(error))

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
          <div className="form-button">
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
