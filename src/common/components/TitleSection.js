import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const TitleSx = styled(Typography)((props) => ({
  color: "#fefefe",
  letterSpacing: ".1rem",
  textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
  overflow: "hidden",
  textAlign: "center",

  // "&:before": {
  //   content: `"${props.subtitle}"`,
  //   width: "100vh",
  //   zIndex: "-1",
  //   position: "absolute",
  //   height: "100%",
  //   fontSize: "200pt",
  //   color: "#E5EBED",
  //   overflow: "hidden",
  //   top: "0px",
  //   left: "7px",
  //   textShadow:
  //     "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.3)",
  // },
}));

export default function TitleSection({ title = "", sub = "", rest }) {
  return (
    <TitleSx variant="h1" {...rest} subtitle={title}>
      {title}
      <span
        style={{
          marginLeft: "0.5rem",
          fontSize: "8pt",
          color: "#DF3C3C",
          textTransform: "uppercase",
        }}
      >
        {sub}
      </span>
    </TitleSx>
  );
}
