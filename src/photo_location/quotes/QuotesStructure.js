import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../common/components/TitleSection";
import Quote from "./Quote";

export default function QuotesStructure() {
  const navigate = useNavigate();

  const { photoLocation } = useSelector((store) => store.photoLocation);

  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "10vh" }}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ paddingLeft: "2vw" }}
      >
        <Grid item xs={12}>
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={() => navigate(-1)}
          >
            <KeyboardDoubleArrowLeft />
          </Button>
          <TitleSection
            title={
              photoLocation?.locale?.toUpperCase() ??
              photoLocation?.title?.toUpperCase()
            }
            sub={photoLocation?.subt}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "10vh" }}
      >
        <Quote comment={photoLocation?.que} time={photoLocation?.time} />
      </Grid>
    </Grid>
  );
}
