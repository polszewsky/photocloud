import { Typography } from "@mui/material";
import React from "react";

export default function GlowyTypography({ children }) {
  return (
    <Typography
      sx={{
        fontSize: "21pt",
        fontWeight: "600",
        color: "#334145",
        textShadow: "0 0 7px rgba(132,141,143,.5)",
      }}
    >
      {children}
    </Typography>
  );
}
