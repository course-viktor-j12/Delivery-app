import { useSelector, useDispatch } from "react-redux";
import { product_cfk, product_donny, product_LA_Pizza, product_MI_Pizza, product_NY_Pizza } from "../db";
import { Cart } from "./Cart";

export const ShopsPage = () => {
  const shop = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const handleAddShop = (selectedShop) => {
    dispatch({ type: 'ADD_SHOP', shop: selectedShop });
  };

  return (
    <div className="container-shops">
      <div className="aside">
        <h2>Shops:</h2>
        <div className="shops-item-block">
          <div className="shop-item" onClick={() => handleAddShop(product_donny)}>MC Donny</div>
          <div className="shop-item" onClick={() => handleAddShop(product_cfk)}>CFK</div>
          <div className="shop-item" onClick={() => handleAddShop(product_NY_Pizza)}>NY Pizza</div>
          <div className="shop-item" onClick={() => handleAddShop(product_MI_Pizza)}>MI Pizza</div>
          <div className="shop-item" onClick={() => handleAddShop(product_LA_Pizza)}>LA Pizza</div>
        </div>
      </div>
      <div className="main">
        {!shop ? (
          <h2>Choose any shop</h2>
        ) : (
          shop.map((element) => <Cart product={element} key={element.id} />)
        )}
      </div>
    </div>
  );
};
