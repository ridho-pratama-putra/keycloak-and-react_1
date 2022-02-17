// called on every dispatch call
export const sayHiOnDispatch = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers)

        function newDispatch(action) {
            const result = store.dispatch(action)
            console.log('Hi!')
            return result
        }

        return { ...store, dispatch: newDispatch }
    }
}

// called once
export const includeMeaningOfLife = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers)
        function newGetState() {
            return {
                ...store.getState(),
                meaningOfLife: 42,
            }
        }

        return { ...store, getState: newGetState }
    }
}
