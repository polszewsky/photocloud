import styled from "@emotion/styled";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StyledImg = styled.img({
  boxShadow: "8px 8px 24px 0px rgba(255, 255, 255, 1)",
});

const immageArray = [
  "https://i.imgur.com/8F6B5K0.png",
  "https://i.imgur.com/Vwya5M5.png",
  "https://i.imgur.com/CDRudpF.png",
  "https://i.imgur.com/NJTNu9H.png",
  "https://i.imgur.com/9stH0JF.png",
];

export default function PhotoLocation() {
  let { location } = useParams();

  const [image, setImage] = useState(0);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);

  const mouseDownCoords = (e) => {
    e.preventDefault();
    let x = (window.checkForDrag = e.clientX);
    console.log(x);

    setIsDown(true);
    setStartX(x);
  };

  const next = () => {
    let temp = image;
    temp++;

    setImage(temp % 5);
  };

  const mouseUpHandler = (e) => {
    e.preventDefault();
    console.log("upped");
    setIsDown(false);
  };

  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;

    const distance = mouseUp - startX;

    if (
      mouseUp < window.checkForDrag + 6 &&
      mouseUp > window.checkForDrag - 6
    ) {
      console.log("clicked!");
    }

    if (Math.abs(distance) < 75) {
      console.log("no drag!");
    }

    if (distance !== 0) {
      next();
    }
  };

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
              <Box
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    top: "0px",
                    left: "0px",
                  }}
                >
                  <img
                    style={{
                      width: "95%",
                      height: "auto",
                    }}
                    src={immageArray[(image + 1) % 5]}
                    alt="chruch"
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "1rem",
                    marginTop: "1rem",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                  }}
                >
                  <StyledImg
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={immageArray[image]}
                    alt="chruch"
                    onMouseDown={(e) => mouseDownCoords(e)}
                    onMouseUp={(e) => clickOrDrag(e)}
                  />
                </Box>

                {/* <img
                  style={{
                    float: "left",
                    //position: "relative",
                    top: "0",
                    left: "0",
                    zIndex: 1,
                  }}
                  src="https://i.imgur.com/Vwya5M5.png"
                  alt="chruch"
                />
                <img
                  style={{
                    //position: "absolute",
                    top: "30",
                    float: "left",
                    left: "30",
                    border: "1px solid red",
                    zIndex: 2,
                  }}
                  src="https://i.imgur.com/Vwya5M5.png"
                  alt="chruch"
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
