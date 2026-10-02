import React from "react";
import { createRoot } from "react-dom/client";
import TerrainApp from "./TerrainApp.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TerrainApp />
  </React.StrictMode>
);

