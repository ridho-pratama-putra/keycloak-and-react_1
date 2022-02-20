import {PRODUCT} from "../constant";

export default (state = [], action) => {
    switch (action.type) {
        case PRODUCT.CREATE_PRODUCTS :
            return [...state, action.payload];
        case PRODUCT.FETCH_ALL_PRODUCTS :
            return action.payload;
        case PRODUCT.CURRENT_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};
