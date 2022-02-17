const initialState = [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ];

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

// Use the initialState as a default value
export default function todosReducer(state = initialState, action) {
    switch (action.type) { // The reducer normally looks at the action type field to decide what happens
        case 'todos/todoAdded': {
            return [...state,
                    {
                        id: nextTodoId(state),// Use an auto-incrementing numeric ID for this example
                        text: action.payload,
                        completed: false
                    }
            ]
        }
        case 'todos/todoToggled': {
            return state.map(todo => { // This time, we need to make a copy of the old todos array
                    if (todo.id !== action.payload) { // If this isn't the todo item we're looking for, leave it alone
                        return todo
                    }
                    // We've found the todo that has to change. Return a copy:
                    return {
                        ...todo,
                        // Flip the completed flag
                        completed: !todo.completed
                    }
                })
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

