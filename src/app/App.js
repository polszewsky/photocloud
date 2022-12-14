import { Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PhotocloudNav from "../common/components/PhotocloudNav";
import About from "./about/About";
import Home from "./home_cloud/Home";
import PhotoLocation from "./photopage/PhotoLocation";

export default function App() {
  return (
    <Container maxWidth={false}>
      <PhotocloudNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:locationId" element={<PhotoLocation />} />
      </Routes>
    </Container>
  );
}
