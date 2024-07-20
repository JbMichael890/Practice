import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";

export const mainRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);
