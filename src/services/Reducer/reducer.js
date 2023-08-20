import { ADD_TO_CART } from "../Constants"


const initialState = {
    cartData: []
}
const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...StaticRange,
                cartData: action.type
            }
            break;

        default:
            return state
    }
}

export default cartItems;