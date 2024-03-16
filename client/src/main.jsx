import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from 'axios'

import { store } from "./app/store.jsx";
import App from "./App.jsx";
import "./index.css";

// defaults
axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
