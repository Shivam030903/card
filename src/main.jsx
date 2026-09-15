import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FireBaseProvider from "./context/fireBaseContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FireBaseProvider>
        <App />
      </FireBaseProvider>
    </BrowserRouter>
  </StrictMode>,
);
