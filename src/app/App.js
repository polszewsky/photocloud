import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import PhotocloudNav from "../common/components/PhotocloudNav";
import About from "./about/About";
import Home from "./home_cloud/Home";
import PhotoLocation from "./photopage/PhotoLocation";

export default function App() {
  return (
    <Fragment>
      <PhotocloudNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:locationId" element={<PhotoLocation />} />
      </Routes>
    </Fragment>
  );
}
