import "./index.css";

import { createRoot } from "react-dom/client";

import App from "./App";

import RootProvider from "@components/providers";

createRoot(document.getElementById("root")!).render(
  <RootProvider>
    <App />
  </RootProvider>
);
