import { useDispatch, useSelector } from 'react-redux';

export const Basket = () => {
    const { product, counter, price } = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const handleInc = () => {
      dispatch({ type: 'INC', counter: counter + 1 });
    };
  
    const handleDec = () => {
      dispatch({ type: 'DEC', counter: counter - 1 });
    };
  
    return (
      <div className="basket-item">
        <div className="img-basket"></div>
        <div className="body-basket">
          <p>{product}</p>
          <p>Price: {price}</p>
          <div className="quantity">
            {counter}{' '}
            <span className="quantity-up" onClick={handleInc}>{'>'}</span>
            <span className="quantity-down" onClick={handleDec}>{'<'}</span>
          </div>
        </div>
      </div>
    );
  };
  