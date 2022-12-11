import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Copyrights from "../../common/components/Copyrights";
import LeviButton from "../../common/components/LeviButton";

export default function About() {
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
          sx={{ marginTop: "1vh" }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
              }}
              src={"https://i.imgur.com/KEfXsccl.jpg"}
              alt="chruch"
            />
          </Grid>
        </Grid>

        <Grid item sx={{ marginTop: "1rem" }}>
          <Typography variant="h4" sx={{ color: "#DF3C3C" }}>
            about me
          </Typography>
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
            <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
              Hi, name's Peter & I happen to be a (senior but small-scale) full
              stack dev with 7 years of experience in various web technologies.
              Graduated from univeristy with Masters in IT with Databases &
              Systems specialization. This small and basic app, codename
              `PHOTOCLOUD` is a vertical slice of my what I use in my work as a
              web developer{" "}
              <span style={{ fontStyle: "italic" }}>
                (combined with my love for photography)
              </span>
              . <br />
              <br />
              <b style={{ color: "#5F777D" }}>
                Made using: ReactJS + Redux, NodeJs, MaterialUI 5, Router6,
                Github, Docker, Figma
              </b>
              <br />
              <br />
              Comments created with jsonplaceholder.typicode.com
              <br />
              Homepage created with react-tagcloud by @madox2
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
