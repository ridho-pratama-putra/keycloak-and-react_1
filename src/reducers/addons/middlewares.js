// Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
// Middleware form a pipeline around the store's dispatch method
// Log something to the console
// Set timeouts
// Make asynchronous API calls
// Modify the action
// Pause the action or even stop it entirely
export const print1 = (storeAPI) => (next) => (action) => {
    console.log('1')
    return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
    console.log('2')
    return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
    console.log('simple middleware')
    return next(action)
}

export const delayedMessageMiddleware = (storeAPI) => next => dispatchedAction => {
    const { action: { type } } = dispatchedAction;
    if (type === "todos/todoAdded") {
        setTimeout(() => {
            console.log('Added a new todo: ', dispatchedAction.action.payload)
        }, 1000)
    }

    return next(dispatchedAction)
}
