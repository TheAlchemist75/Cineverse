import React from "react";
// import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));  // ReactDOM.render is deprecated in React18

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
