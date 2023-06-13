import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./about";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <About />
  </StrictMode>
);
