import styled from "@emotion/styled";
import {
  Alert,
  Button,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBack } from "@mui/icons-material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { fetchPhotoLocationObject } from "../common/PhotoArrayUtils";

const StyledImg = styled.img({
  boxShadow: "2px 2px 12px 0px rgba(1, 1, 1, 1)",
});

const TitleSx = styled(Typography)({
  color: "#111",
  letterSpacing: ".1rem",
  textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
});

export default function PhotoLocation() {
  let { coordinate } = useParams();
  const navigate = useNavigate();

  const photoObject = fetchPhotoLocationObject(coordinate);

  const [image, setImage] = useState(0);
  const [open, setOpen] = React.useState(true);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const mouseDownCoords = (e) => {
    e.preventDefault();
    let x = (window.checkForDrag = e.clientX);

    setIsDown(true);
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
                  startIcon={<KeyboardDoubleArrowLeftIcon />}
                  onClick={() => navigate(-1)}
                >
                  home
                </Button>
                <TitleSx variant="h1">{photoObject?.id}</TitleSx>
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
              <Grid
                item
                xs={12}
                sm={10}
                md={8}
                lg={6}
                sx={{ marginTop: "1rem" }}
              >
                <Typography align="justify">{photoObject?.que}</Typography>
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
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%" }}>
                <Collapse in={open}>
                  <Alert
                    variant="outlined"
                    severity="info"
                    sx={{ opacity: "0.6", color: "#FFF", border: "none" }}
                    icon={false}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    Swipe left or right to change photos
                  </Alert>
                </Collapse>
              </Box>
            </Grid>
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
                      filter: "blur(2px)",
                      borderRadius: "4px",
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
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    src={photoObject?.images[image]}
                    alt="chruch"
                    onMouseDown={(e) => mouseDownCoords(e)}
                    onMouseUp={(e) => clickOrDrag(e)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", marginTop: "5vh" }}>
              <Typography
                sx={{
                  fontSize: "21pt",
                  fontWeight: "600",
                  //color: "rgba(255,255,255,.3)",
                  color: "#DDD",
                  textShadow: "0 0 7px rgba(255,255,255,.5)",
                }}
              >
                <span style={{ fontSize: "28pt" }}>{image + 1}</span>
                {` / 5`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
