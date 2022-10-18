import styled from "@emotion/styled";
import { Button, Collapse, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import QuoteSection from "../common/components/QuoteSection";
import TitleSection from "../common/components/TitleSection";
import LeviButton from "../common/components/LeviButton";
import GlowyTypography from "../common/components/GlowyTypography";
import TransparentAlert from "../common/components/TransparentAlert";
import { fetchPhotoLocationObject } from "../common/photoUtils";
import Copyrights from "../common/components/Copyrights";

const StyledImg = styled.img({
  boxShadow: "2px 2px 12px 0px rgba(1, 1, 1, 1)",
  width: "100%",
  height: "auto",
  cursor: "pointer",
  borderRadius: "2px",
  filter: "grayscale(100%)",
});

export default function PhotoLocation() {
  let { coordinate } = useParams();
  const navigate = useNavigate();

  const photoObject = fetchPhotoLocationObject(coordinate);

  const [image, setImage] = useState(0);
  const [open, setOpen] = React.useState(true);
  //const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const mouseDownCoords = (e) => {
    e.preventDefault();
    let x = (window.checkForDrag = e.clientX);

    //setIsDown(true);
    setStartX(x);
  };

  const next = () => {
    let temp = image;
    temp++;
    setImage(Math.abs(temp) % 5);
  };

  const prev = () => {
    let temp = image;
    temp--;

    if (temp === -1) {
      temp = 4;
    }

    setImage(Math.abs(temp) % 5);
  };

  // const mouseUpHandler = (e) => {
  //   e.preventDefault();

  //   setIsDown(false);
  // };

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

    if (distance > 0) {
      next();
    } else if (distance < 0) {
      prev();
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
              justifyContent="flex-start"
              alignItems="center"
              sx={{ paddingLeft: "2vw" }}
            >
              <Grid item xs={"auto"}>
                <Button
                  variant="text"
                  color="error"
                  size="small"
                  onClick={() => navigate(-1)}
                >
                  <KeyboardDoubleArrowLeftIcon />
                </Button>
                <TitleSection
                  title={photoObject?.title.toUpperCase()}
                  sub={photoObject?.subt}
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
              <QuoteSection
                comment={photoObject?.que}
                time={photoObject?.time}
              />
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
            {/* <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%" }}>
                <Collapse in={open}>
                  <TransparentAlert
                    action={() => {
                      setOpen(false);
                    }}
                  >
                    Swipe left or right to change photos
                  </TransparentAlert>
                </Collapse>
              </Box>
            </Grid> */}
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
                    filter: "grayscale(85%)",
                  }}
                >
                  <img
                    style={{
                      width: "95%",
                      height: "auto",
                      filter: "blur(2px)",
                      borderRadius: "2px",
                    }}
                    src={photoObject?.images[(image + 1) % 5]}
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
                    src={photoObject?.images[image]}
                    alt="chruch"
                    onMouseDown={(e) => mouseDownCoords(e)}
                    onMouseUp={(e) => clickOrDrag(e)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", marginTop: "5vh" }}>
              <GlowyTypography>
                <span style={{ fontSize: "28pt" }}>{image + 1}</span>
                {` / 5`}
              </GlowyTypography>
            </Grid>
          </Grid>
        </Grid>
        <Copyrights />
        <LeviButton />
      </Grid>
    </Container>
  );
}
