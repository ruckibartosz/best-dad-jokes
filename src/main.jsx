import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { JokesStateProvider } from "@contexts/JokesStateContext.jsx";
import { JokesActionProvider } from "./contexts/JokesActionContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <JokesStateProvider>
            <JokesActionProvider>
                <App />
            </JokesActionProvider>
        </JokesStateProvider>
    </React.StrictMode>
);
