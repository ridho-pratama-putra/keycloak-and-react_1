import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from './configs/keycloak';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactKeycloakProvider authClient={keycloak}>
                <App/>
            </ReactKeycloakProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// Log the initial state
// console.log('Initial state: ', store.getState())
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => {
//     console.log('State after dispatch: ', store.getState())
//     }
// )

// Now, dispatch some actions

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })
//
// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })
//
// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })
//
// store.dispatch({
//     type: 'filters/colorFilterChanged',
//     payload: { color: 'red', changeType: 'added' }
// })
//
// // Stop listening to state updates
// // unsubscribe()
//
// // Dispatch one more action to see what happens
//
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
