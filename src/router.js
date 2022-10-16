import { createBrowserRouter } from "react-router-dom";
import About from "./about/About";
import Home from "./home_cloud/Home";
import PhotoLocation from "./photo_location/PhotoLocation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/:coordinate",
    element: <PhotoLocation />,
  },
]);
