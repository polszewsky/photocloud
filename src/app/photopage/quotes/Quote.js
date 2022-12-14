import { Grid, Typography } from "@mui/material";
import React from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

export default function Quote(props) {
  const { comment = "", time = "", isMobile = false, ...rest } = props;
  return (
    <Grid item xs={10} {...rest}>
      <Typography
        align="justify"
        sx={{
          color: "#fefefe",
          fontSize: isMobile ? "16pt" : "27pt",
          fontFamily: "Bad Script",
          letterSpacing: "1px",
          display: "inline-block",
        }}
      >
        <FormatQuoteOutlinedIcon sx={{ color: "#1F1F1F", fontSize: "48pt" }} />
        {comment}
      </Typography>
      <br />
      <Typography
        align="right"
        sx={{ color: "#DF3C3C ", letterSpacing: "3px" }}
        variant="overline"
      >
        {time}
      </Typography>
    </Grid>
  );
}
