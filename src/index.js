import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import App from "./app/App";
import GlobalStyle from "./app/GlobalStyles";
import store from "./app/configureStore";

Chart.register(ArcElement, Tooltip, Legend);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
