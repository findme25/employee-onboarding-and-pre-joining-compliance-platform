import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ThemeWrapper } from "./theme";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </BrowserRouter>
);