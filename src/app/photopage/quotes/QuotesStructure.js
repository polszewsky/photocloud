import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../../common/components/TitleSection";
import Quote from "./Quote";

export default function QuotesStructure() {
  const navigate = useNavigate();

  const { photoLocation } = useSelector((store) => store.photoLocation);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "1rem" }}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        // sx={{ paddingLeft: "2vw" }}
      >
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => navigate(-1)}
            sx={{ minWidth: "90px", marginLeft: "1rem" }}
          >
            <KeyboardDoubleArrowLeft />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TitleSection
            isMobile={isMobile}
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
        sx={{ marginTop: "1rem" }}
      >
        <Quote
          comment={photoLocation?.que}
          time={photoLocation?.time}
          isMobile={isMobile}
        />
      </Grid>
    </Grid>
  );
}
