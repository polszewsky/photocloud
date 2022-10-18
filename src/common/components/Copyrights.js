import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Copyrights() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 30,
        right: 100,
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: "#CCC", fontSize: "6pt", letterSpacing: "2px" }}
      >
        2022 PIOTR OLSZEWSKI
      </Typography>
    </Box>
  );
}
