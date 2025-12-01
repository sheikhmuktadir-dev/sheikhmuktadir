import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.css";
import "./Style/root.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Home from "./Pages/Home/Home.jsx";
import ThemeContextPropvider from "./Context/ThemeContentProvider.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextPropvider>
      <RouterProvider router={routes} />
    </ThemeContextPropvider>
  </StrictMode>
);
