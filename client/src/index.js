import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
