import { createBrowserRouter } from "react-router-dom";
import About from "./about/About";
import Home from "./app/home_cloud/Home";
import PhotoLocation from "./app/photopage/PhotoLocation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/:locationId",
    element: <PhotoLocation />,
  },
]);
