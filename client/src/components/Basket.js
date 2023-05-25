import { useDispatch, useSelector } from 'react-redux';

export const Basket = () => {
    const product = useSelector((state) => state.product);
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const handleInc = () => {
        console.log();
        dispatch({ type: 'INC', counter: counter + 1 });
    };
    const handleDec = () => {
        dispatch({ type: 'DEC', counter: counter - 1 });
    }
    return (
        <div className="basket-item">
            <div className="img-basket"></div>
            <div className="body-basket">
                <p>{product}</p>
                <p>Price: {}</p>
                <div
                    className="quantity"
                >{counter} <span className="quantity-up">{">"}</span>
                    <span className="quantity-down">{"<"}</span></div>
            </div>
        </div>
    )
}