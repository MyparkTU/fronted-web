import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
ReactDOM.render(
    <Router>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </Router>,
    document.getElementById("root")
);
