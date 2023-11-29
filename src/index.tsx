import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./lib/app";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
