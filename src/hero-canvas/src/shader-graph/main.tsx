import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "three-shader-graph/style.css";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
