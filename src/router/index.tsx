import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeAnime from "../pages/anime/Home";
import Navigator from "../layouts/Navigator";
import { NavigatorProvider } from "../contexts/NavigatorContext";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <NavigatorProvider><Navigator /></NavigatorProvider>,
    children: [
      {
        path: "/",
        element: <Navigate to="/anime/home" replace />
      },
      {
        path: "/anime",
        element: <HomeAnime />
      },
      {
        path: "*",
        element: <span>Khoong tim thay</span>
      }
    ]
  }
]);
export default routes;