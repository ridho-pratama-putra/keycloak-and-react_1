import { combineReducers } from 'redux'
import todosReducer from './reducers/TodosSlice'
import filtersReducer from './reducers/FiltersSlice'
import progress from './reducers/Progress'
import notification from './reducers/Notification'

// Use the empty object as a default value
const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
    progress: progress,
    notification: notification
})

export default rootReducer;
