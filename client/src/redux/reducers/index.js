const initialState = []


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SHOP': {
            return { ...state };
        }
        case 'ADD_PRODUCT': {
            const productIndex = state.findIndex((product) => product.name === action.name)

            if (productIndex !== -1) {
                const updatedState = [...state]
                updatedState[productIndex].counter += 1
                return updatedState
            }

            return [
                ...state,
                {
                    shop: action.shop,
                    name: action.name,
                    counter: 1,
                    price: action.price,
                }
            ]
        }

        case 'INC': {
            const updatedState = state.map((product) => {
                if (product.name === action.name) {
                    return {
                        ...product,
                        counter: action.counter + 1
                    }
                }
                return product
            });
            return updatedState
        }
        case 'DEC': {
            const updatedState = state.map((product) => {
                if (product.name === action.name) {
                    const updatedCounter = Math.max(1, product.counter - 1)
                    return {
                        ...product,
                        counter: updatedCounter
                    }
                }
                return product
            });
            return updatedState
        }
        case 'DELETE_BASKET': {
            const updatedState = state.filter((product) => product.name !== action.name)
            return updatedState
        }
        case 'GET_TOTAL_PRICE': {
            const totalPrice = state.reduce((acc, product) => {
                return acc + (product.counter * product.price)
            }, 0)
            return totalPrice
        }
        default: {
            return state
        }
    }
}
