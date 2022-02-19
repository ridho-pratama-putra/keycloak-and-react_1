export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_PRODUCTS' :
            return [...state, action.payload];
        case 'FETCH_ALL_PRODUCTS' :
            return action.payload;
        default:
            return state;
    }
};
