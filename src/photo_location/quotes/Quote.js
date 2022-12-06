import { FormatQuote } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Quote(props) {
  const { comment = "", time = "", ...rest } = props;
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={10}
      lg={8}
      sx={{
        marginTop: "1rem",
        borderLeft: "5px solid #75949b",
        //backgroundColor: "rgba(230,230,230,.2)",
        background: "#F1F1F1",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        boxShadow: "4px 4px 6px -4px rgba(1,1,1,.1)",
      }}
      {...rest}
    >
      <Typography>
        <FormatQuote sx={{ color: "#75949b" }} />
      </Typography>
      <Typography align="justify" sx={{ color: "#232C2F", fontSize: "14pt" }}>
        {comment}
      </Typography>
      <br />
      <Typography
        align="right"
        sx={{ color: "#75949b", letterSpacing: "3px" }}
        variant="overline"
      >
        {time}
      </Typography>
    </Grid>
  );
}
