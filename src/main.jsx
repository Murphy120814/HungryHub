import ReactDOM from "react-dom/client";
import "./index.css";
import { appRouter } from "./components/App";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
