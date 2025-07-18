import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ButtonHover from "./ButtonHover.tsx";
import Card from "./Card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ButtonHover /> */}
    <Card />
  </StrictMode>
);
