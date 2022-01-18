import logo from './logo.svg';
import './App.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import React from "react";
import keycloak from './configs/keycloak'

function App() {
    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={keycloak.login}
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ReactKeycloakProvider>
    );
}

export default App;