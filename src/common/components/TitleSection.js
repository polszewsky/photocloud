import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const TitleSx = styled(Typography)({
  color: "#334145",
  letterSpacing: ".1rem",
  textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
});

export default function TitleSection({ title = "", sub = "", ...rest }) {
  return (
    <TitleSx variant="h1">
      {title}
      <span
        style={{
          fontSize: "8pt",
          color: "#75949B",
          textTransform: "uppercase",
        }}
      >
        {sub}
      </span>
    </TitleSx>
  );
}
