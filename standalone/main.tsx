import React from "react";
import ReactDOM from "react-dom/client";

import "../app/root.css";
import { UpgradePrototypePage, type UpgradeVariant } from "../app/prototypes/UpgradePrototypePage.tsx";

const variant = document.body.dataset.variant as UpgradeVariant | undefined;

if (!variant) {
  throw new Error("Missing standalone variant");
}

document.documentElement.dataset.theme = "light";
document.body.dataset.theme = "light";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UpgradePrototypePage variant={variant} />
  </React.StrictMode>,
);
