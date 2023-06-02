// import { useDispatch, useSelector } from 'react-redux';

// export const Basket = ({product}) => {
//     const { name, counter, price, shop }= product
//     // console.log(name, counter, price, shop);
//     const dispatch = useDispatch()
  
//     const handleInc = () => {
//       dispatch({ type: 'INC', counter: counter + 1 })
//     }
  
//     const handleDec = () => {
//       dispatch({ type: 'DEC', counter: counter - 1 })
//     }
  
//     return (
//       <div className="basket-item">
//         <div className="img-basket"></div>
//         <div className="body-basket">
//           <p><b>{name} from {shop}</b></p>
//           <p>Price: {price}</p>
//           {/* <div className="quantity"> */}
//             {/* {counter}{' '}
//             <span className="quantity-up" onClick={handleInc}>{'>'}</span>
//             <span className="quantity-down" onClick={handleDec}>{'<'}</span> */}
//             <input type="number" className="quantity" value={counter}/>
//           {/* </div> */}
//         </div>
//       </div>
//     )
//   };
import { useDispatch } from 'react-redux';

export const Basket = ({ product }) => {
  const { name, counter, price, shop } = product;
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: 'INC', name: product.name, counter: product.counter});
  }

  const handleDec = () => {
    dispatch({ type: 'DEC', name: product.name, counter: product.counter });
  }
  const handleDeleteBasket=()=>{
    dispatch({ type: 'DELETE_BASKET', name: product.name })
  }

  return (
    <div className="basket-item">
      <div className='btn-delete' onClick={handleDeleteBasket}>X</div>
      <div className="img-basket"></div>
      <div className="body-basket">
        <p>
          <b>
            {name} from {shop}
          </b>
        </p>
        <p>Price: {price}</p>
        <div className="quantity">
          {counter}{" "}
          <span className="quantity-up" onClick={handleInc}>
            {">"}
          </span>
          <span className="quantity-down" onClick={handleDec}>
            {"<"}
          </span>
        </div>
      </div>
    </div>
  );
};
