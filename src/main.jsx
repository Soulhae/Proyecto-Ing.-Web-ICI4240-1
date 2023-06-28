import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './components/AppContext.jsx';

import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ScrollToTop />
        <AppProvider>
        <App />
        </AppProvider>
    </BrowserRouter>
);
