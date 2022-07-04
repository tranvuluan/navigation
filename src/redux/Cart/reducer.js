import { actionTypes } from "./actionTypes";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
    
        default:
            return state;
    }
} 

export default cartReducer;