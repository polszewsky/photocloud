import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeviButton from "../common/components/LeviButton";

import { fetchPhotoLocationObject } from "../common/photoUtils";
import Copyrights from "../common/components/Copyrights";
import { useDispatch } from "react-redux";
import { fetchFakeComments } from "./comments/commentSectionSlice";
import CommentSection from "./comments/CommentSection";
import QuotesStructure from "./quotes/QuotesStructure";
import ImageSection from "./images/ImageSection";
import { setPhotoLocationData } from "./photoLocationSlice";

export default function PhotoLocation() {
  let { locationId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (() => dispatch(fetchFakeComments()))();
    (() =>
      dispatch(setPhotoLocationData(fetchPhotoLocationObject(locationId))))();
  }, [dispatch, locationId]);

  return (
    <Container maxWidth="false" sx={{ height: "100vh" }}>
      <Grid container direction="row">
        {/* quote parts */}
        <Grid item xs={12} sm={4} md={6}>
          <QuotesStructure />
        </Grid>

        {/* photo parts */}
        <Grid item xs={12} sm={8} md={6} sx={{ paddingTop: "10vh" }}>
          <ImageSection />
        </Grid>
      </Grid>

      {/* comments */}
      <CommentSection />

      {/* addons */}
      <Grid container item direction="row">
        <Copyrights />
        <LeviButton />
      </Grid>
    </Container>
  );
}
