import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function CommentEntry({ comment, rest }) {
  return (
    <Grid item xs={12} {...rest}>
      <Typography sx={{ fontWeight: 600, fontSize: "10pt" }} gutterBottom>
        {comment?.email ?? "Annonymous"}
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ color: "#333" }}>
        {comment?.body ?? "-"}
      </Typography>
      <Divider />
    </Grid>
  );
}
