import React from "react";
// import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));  // ReactDOM.render is deprecated in React18

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
