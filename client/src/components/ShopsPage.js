import { useState } from "react"
import { product_cfk, product_donny, product_LA_Pizza, product_MI_Pizza, product_NY_Pizza } from "../db"
import { Cart } from "./Cart"

export const ShopsPage = () => {

    const [shop, setShop] = useState(null)




    return (
        <div className="container-shops">
            <div className="aside">
                <h2>Shops:</h2>
                <div className="shops-item-block">
                    <div className="shop-item" onClick={() => setShop(product_donny)}>MC Donny</div>
                    <div className="shop-item" onClick={() => setShop(product_cfk)}>CFK</div>
                    <div className="shop-item" onClick={() => setShop(product_NY_Pizza)}>NY Pizza</div>
                    <div className="shop-item" onClick={() => setShop(product_MI_Pizza)}>MI Pizza</div>
                    <div className="shop-item" onClick={() => setShop(product_LA_Pizza)}>LA Pizza</div>
                </div>
            </div>
            <div className="main">
                {!shop ? (<h2>Choose any shop</h2>) : (
                    shop.map((element) => <Cart cart={element} key={element.id} />)
                )}
            </div>
        </div>
    )
}