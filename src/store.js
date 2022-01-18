import { createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import {
    sayHiOnDispatch,
    includeMeaningOfLife
} from './reducers/addons/enhancers';
import { print3, delayedMessageMiddleware } from './reducers/addons/middlewares'

const middlewareEnhancer = applyMiddleware(print3, delayedMessageMiddleware)

const store = createStore(rootReducer, compose(sayHiOnDispatch, includeMeaningOfLife, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middlewareEnhancer))

export default store
