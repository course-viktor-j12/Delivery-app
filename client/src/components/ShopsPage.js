import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cart } from "./Cart";

export const ShopsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null)

  const handleAddShop = (selectedShop) => {
    fetch(`http://localhost:5000/api/product/${selectedShop}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch((e) => {
        console.log(e)
      })
    setSelectedShop(selectedShop)
  }

  useEffect(() => {
      const shopItems = document.querySelectorAll('.shop-item')
      // some code... 
  }, [selectedShop])

  return (
    <div className="container-shops">
      <div className="aside p-3 d-flex flex-column w-25">
        <h2>Shops:</h2>
        <div className="shops-item-block flex-column ">
          <div className="shop-item my-3 m-md-3 p-0 p-md-3" onClick={() => handleAddShop('Donny')} >MC Donny</div>
          <div className="shop-item my-3 m-md-3 p-0 p-md-3" onClick={() => handleAddShop('CFK')} >CFK</div>
          <div className="shop-item my-3 m-md-3 p-0 p-md-3" onClick={() => handleAddShop('NY-Pizza')} >NY Pizza</div>
          <div className="shop-item my-3 m-md-3 p-0 p-md-3" onClick={() => handleAddShop('MI-Pizza')} >MI Pizza</div>
          <div className="shop-item my-3 m-md-3 p-0 p-md-3" onClick={() => handleAddShop('LA-Pizza')} >LA Pizza</div>
        </div>
      </div>
      <div className="main w-50 p-3">
        {
          !selectedShop ? (
            <h2>Choose any shop</h2>
          ) : (products.length === 0 ? (
            <h2>Loading...</h2>
          ) : (
            products.map((element) => <Cart product={element} key={element.id} />)
          ))
        }
      </div>
    </div>
  )
}
