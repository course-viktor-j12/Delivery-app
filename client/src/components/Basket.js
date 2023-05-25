export const Basket = () => {

    return (
        <div className="basket-item">
            <div className="img-basket"></div>
            <div className="body-basket">
                <p>Name product</p>
                <p>Price: 888</p>
                <div
                    className="quantity"
                >0 <span className="quantity-up">{">"}</span>
                    <span className="quantity-down">{"<"}</span></div>
            </div>
        </div>
    )
}