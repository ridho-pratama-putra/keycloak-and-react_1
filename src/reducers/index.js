import { combineReducers } from 'redux'
import todosReducer from './TodosSlice'
import filtersReducer from './FiltersSlice'
import progress from './Progress'
import notification from './Notification'

// Use the empty object as a default value
const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
    progress: progress,
    notification: notification
})

export default rootReducer;
