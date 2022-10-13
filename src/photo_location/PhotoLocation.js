import styled from "@emotion/styled";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";

const StyledImg = styled.img({
  //color: "red",
  width: "100%",
  height: "auto",
});

export default function PhotoLocation() {
  let { location } = useParams();

  return (
    <Container maxWidth="false" sx={{ height: "100vh" }}>
      <Grid container direction="row">
        <Grid item xs={12} sm={4} md={6}>
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
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography sx={{ color: "red" }} variant="body2">
                  Powrót
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1">{location}</Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={6} sx={{ marginTop: "1rem" }}>
                <Typography align="justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived no only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} sx={{ paddingTop: "10vh" }}>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box sx={{ position: "relative", top: "0", left: "0" }}>
                <StyledImg src="https://i.imgur.com/Vwya5M5.png" alt="chruch" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
