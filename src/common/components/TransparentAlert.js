import { Close } from "@mui/icons-material";
import { Alert, IconButton, Typography } from "@mui/material";
import React from "react";

export default function TransparentAlert({ children, action }) {
  return (
    <Alert
      variant="outlined"
      severity="error"
      sx={{ opacity: "1", border: "none", color: "#DF3C3C" }}
      icon={false}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={action}
        >
          <Close fontSize="inherit" />
        </IconButton>
      }
    >
      <Typography sx={{ color: "#DF3C3C" }}>{children}</Typography>
    </Alert>
  );
}
