import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import {TokenProvider} from "./context/TokenProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <TokenProvider>
          <App />

      </TokenProvider>

  </React.StrictMode>,
);
