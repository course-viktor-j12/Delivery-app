import { Cart } from "./Cart"
export const ShopsPage = () => {

    return (
        <div className="container-shops">
            <div className="aside">
                <h2>Shops:</h2>
                <div className="shops-item-block">
                    <div className="shop-item">MC Donny</div>
                    <div className="shop-item">CFK</div>
                    <div className="shop-item">NY Pizza</div>
                    <div className="shop-item">MI Pizza</div>
                    <div className="shop-item">LA Pizza</div>
                </div>
            </div>
            <div className="main">
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />
                <Cart  />

            </div>
        </div>
    )
}