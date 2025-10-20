import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import LoiChucPage from "./pages/LoiChuc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chuc-mung-2010-Hanh-hap",
    element: <LoiChucPage />,
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
