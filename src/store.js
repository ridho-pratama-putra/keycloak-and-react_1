import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import {
    sayHiOnDispatch,
    includeMeaningOfLife
} from './reducers/addons/enhancers';

const store = createStore(rootReducer, compose(sayHiOnDispatch, includeMeaningOfLife, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
