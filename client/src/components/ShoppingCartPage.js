import { Basket } from "./Basket" 

export const ShoppingCartPage = () => {

    return (
        <div className="container-shoppingCart">
            <div className="container-client">
                <form className="form-client">
                    <div className="form-item">
                        <label for="name">Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="input"
                            name="name"
                            id="name"
                        ></input>
                    </div>
                   <div className="form-item">
                   <label for="email">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="input"
                        name="email"
                        id="email"
                    ></input>
                   </div>
                   <div className="form-item">
                   <label for="phone">Phone:</label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="input"
                        name="phone"
                        id="phone"
                    ></input>
                   </div>
                   <div className="form-item">
                   <label for="address">Address:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="input"
                        name="address"
                        id="address"
                    ></input>
                   </div>
                </form>
                <div className="">
                <h3>Total price:</h3>
                <button>Submit</button>
            </div>
            </div>
            <div className="container-basket">
                <Basket />
                <Basket />
                <Basket />
            </div>
            
        </div>
    )
}