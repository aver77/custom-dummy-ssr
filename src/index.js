import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import {BrowserRouter} from "react-router-dom";

window.addEventListener('load', () => {
    const domNode = document.getElementById('root');

    ReactDOM.hydrateRoot(
        domNode,
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
})