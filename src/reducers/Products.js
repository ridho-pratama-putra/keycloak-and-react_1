import {PRODUCT} from "../constant";

export default (state = [], action) => {
    switch (action.type) {
        case PRODUCT.CREATE_PRODUCTS :
            return [...state, action.payload];
        case PRODUCT.FETCH_ALL_PRODUCTS :
            return action.payload;
        case PRODUCT.CURRENT_PRODUCT:
            return action.payload;
        case PRODUCT.ON_CURRENT_PRODUCT_CHANGED:
            const updatedProduct = {...state[0], [action.payload.key]: action.payload.value};
            return [updatedProduct];
        default:
            return state;
    }
};
