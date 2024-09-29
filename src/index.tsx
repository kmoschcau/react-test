import { createRoot } from "react-dom/client";

const appElement = document.getElementById("app");
if (!(appElement instanceof HTMLElement))
  throw new Error("Could not get the app element");

function PointsTracker() {
  return <h1>Hello from updated React!</h1>;
}

const root = createRoot(appElement);
root.render(<PointsTracker />);
appElement.className = "";
