import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AboutButton from "./AboutButton";

export default function PhotocloudNav() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "21pt",
              flexGrow: 1,
              fontWeight: 200,
              fontFamily: "Josefin Sans",
              cursor: "pointer",
              color: "#DF3C3C",
            }}
            onClick={() => navigate("/")}
          >
            PHOTOCLOUD
          </Typography>
          <AboutButton onClick={() => navigate("/about")}>About Me</AboutButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
