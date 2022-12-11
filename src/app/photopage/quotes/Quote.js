import { FormatQuote } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Quote(props) {
  const { comment = "", time = "", ...rest } = props;
  return (
    <Grid
      item
      xs={10}
      sx={{
        marginTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        //boxShadow: "4px 12px 21px -4px rgba(100,100,100,.1)",
      }}
      {...rest}
    >
      <Typography>
        <FormatQuote sx={{ color: "silver", fontSize: "30pt" }} />
      </Typography>
      <Typography
        align="justify"
        sx={{
          color: "#fefefe",
          fontSize: "27pt",
          fontFamily: "Bad Script",
          letterSpacing: "1px",
        }}
      >
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
