import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App1 from "./App1.tsx";
import { Provider } from "react-redux";
import { store } from "./redux.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  </StrictMode>
);
