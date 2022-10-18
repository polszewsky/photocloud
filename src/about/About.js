import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Copyrights from "../common/components/Copyrights";
import LeviButton from "../common/components/LeviButton";
import QuoteSection from "../common/components/QuoteSection";
import TitleSection from "../common/components/TitleSection";

export default function About() {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "10vh" }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
              }}
              src={"https://i.imgur.com/9stH0JF.png"}
              alt="chruch"
            />
          </Grid>
        </Grid>

        <Grid item sx={{ marginTop: "1rem" }}>
          <Typography variant="h4">about me</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "1rem" }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="subtitle1">
              Hi, I'm Peter & I happen to be a web developer. This small and
              basic app with codename `PHOTOCLOUD` is a demonstration of
              knowlege about web technologies. It's a vertical slice of my
              interests combined with my work as full stack web developer.{" "}
              <br />
              <br />
              Front: ReactJS, Redux, TypeScript, MUI5, Router6, Git, Docker,
              Figma
              <br />
              <br />
              Homepage created with react-tagcloud by @madox2
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Copyrights />
      <LeviButton />
    </Container>
  );
}
