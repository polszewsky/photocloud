import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotoLocationObject } from "../../common/photoUtils";
import { useDispatch } from "react-redux";
import { fetchFakeComments } from "./comments/commentSectionSlice";
import CommentSection from "./comments/CommentSection";
import QuotesStructure from "./quotes/QuotesStructure";
import ImageSection from "./images/ImageSection";
import {
  setPhotoDialogClose,
  setPhotoLocationData,
} from "./photoLocationSlice";
import ImageFullDialog from "./images/ImageFullDialog";

export default function PhotoLocation() {
  let { locationId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (() => dispatch(setPhotoDialogClose()))();
    (() => dispatch(fetchFakeComments()))();
    (() =>
      dispatch(setPhotoLocationData(fetchPhotoLocationObject(locationId))))();
  }, [dispatch, locationId]);

  return (
    <Container maxWidth="false" sx={{ height: "100vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* quote parts */}
        <Grid item xs={12}>
          <QuotesStructure />
        </Grid>

        {/* photo parts */}
        <Grid item xs={12}>
          <ImageSection />
        </Grid>
      </Grid>

      {/* comments */}
      <CommentSection />
      <ImageFullDialog />
    </Container>
  );
}
