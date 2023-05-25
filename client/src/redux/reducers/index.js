const initialState = {
    shop: '',
    product: '',
    counter: 0,
    // price: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SHOP': {
            return { ...state, shop: action.shop };
        }
        case 'ADD_PRODUCT': {
            return { ...state, product: action.product };
        }
        case 'INC': {
            return { ...state, counter: state.counter + 1 };
        }
        case 'DEC': {
            return { ...state, counter: state.counter - 1 };
        }
        default: {
            return state;
        }
    }
};
