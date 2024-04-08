import { Route, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Setting from "./Pages/Settings.jsx";
import Task from "./Pages/Task.jsx";
import Dashboard from "./components/Desktop14/Dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/settings" element={<Setting />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Task />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
