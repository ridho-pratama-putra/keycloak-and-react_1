import { createStore
    , compose
    // , applyMiddleware
} from 'redux'
import rootReducer from './reducer'
import {
    sayHiOnDispatch,
    // includeMeaningOfLife
} from './reducers/addons/enhancers';
// import {print3, print1} from './reducers/addons/middlewares'

// const middlewareEnhancer = applyMiddleware(print1,print3)

const store = createStore(rootReducer, compose(sayHiOnDispatch, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
