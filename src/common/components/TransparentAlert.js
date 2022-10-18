import { Close } from "@mui/icons-material";
import { Alert, IconButton } from "@mui/material";
import React from "react";

export default function TransparentAlert({ children, action }) {
  return (
    <Alert
      variant="outlined"
      severity="info"
      sx={{ opacity: "0.6", color: "#FFF", border: "none" }}
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
      {children}
    </Alert>
  );
}
