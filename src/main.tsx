import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("app");

if (rootElement === null) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
root.render(<App />);
