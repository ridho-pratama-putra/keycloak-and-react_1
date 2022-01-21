const initialState = {
        status: 'All',
        colors: []
}
// Use the initialState as a default value
export default function filtersReducer(state = initialState, action) {
    switch (action.type) { // The reducer normally looks at the action type field to decide what happens
        case 'filters/statusFilterChanged': {
            return {
                    ...state,
                    status: action.payload // And replace the status field with the new value
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
