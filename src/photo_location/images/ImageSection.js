import styled from "@emotion/styled";
import { Box, Collapse, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlowyTypography from "../../common/components/GlowyTypography";
import TransparentAlert from "../../common/components/TransparentAlert";
import { hideHelpAlert } from "../photoLocationSlice";

const StyledImg = styled.img({
  boxShadow: "2px 2px 12px 0px rgba(1, 1, 1, 1)",
  width: "100%",
  height: "auto",
  cursor: "pointer",
  borderRadius: "2px",
});

export default function ImageSection() {
  const dispatch = useDispatch();
  const { photoLocation, helpShown } = useSelector(
    (store) => store.photoLocation
  );
  const disabled = photoLocation?.title === "unknown";

  const [image, setImage] = useState(0);
  const [startX, setStartX] = useState(0);

  const backImageOnDown = (e) => {
    if (e.button === 2) {
      alert("Sorry, content protected.");
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const mouseDownCoords = (e) => {
    if (e.button === 2) {
      alert("Sorry, content protected.");
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (disabled) return;

    e.preventDefault();
    let x = (window.checkForDrag = e.clientX);
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
    <Grid
      item
      container
      direction="row"
      justifyContent="flex-left"
      alignItems="center"
    >
      {!disabled && (
        <Grid item xs={8} sx={{ textAlign: "flex-left" }}>
          <Box sx={{ width: "100%" }}>
            <Collapse in={helpShown}>
              <TransparentAlert
                action={() => {
                  dispatch(hideHelpAlert());
                }}
              >
                Swipe left or right to change photos
              </TransparentAlert>
            </Collapse>
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <Box
          sx={{
            position: "relative",
            top: "0px",
            left: "0px",
          }}
        >
          {
            <Box
              sx={{
                position: "relative",
                top: "0px",
                left: "0px",
                filter: "grayscale(85%)",
              }}
            >
              <img
                style={{
                  width: "auto",
                  height: "auto",
                  filter: "blur(2px)",
                  borderRadius: "2px",
                }}
                src={
                  photoLocation?.images &&
                  photoLocation?.images[(image + 1) % 5]
                }
                alt="chruch"
                onMouseDown={(e) => backImageOnDown(e)}
              />
            </Box>
          }
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
              src={photoLocation?.images && photoLocation?.images[image]}
              alt="chruch"
              onMouseDown={(e) => mouseDownCoords(e)}
              onMouseUp={(e) => !disabled && clickOrDrag(e)}
            />
          </Box>
        </Box>
      </Grid>
      {!disabled && (
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "5vh" }}>
          <GlowyTypography>
            <span style={{ fontSize: "28pt" }}>{image + 1}</span>
            {` / 5`}
          </GlowyTypography>
        </Grid>
      )}
    </Grid>
  );
}
