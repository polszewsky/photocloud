import { SpeedDial, SpeedDialAction } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

export default function LeviButton() {
  const navigate = useNavigate();

  const actions = [
    { icon: <HomeMaxIcon />, name: "Home", path: "/" },
    { icon: <PersonIcon />, name: "About Me", path: "/about" },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      FabProps={{
        sx: {
          bgcolor: "rgba(1,1,1,0)",
          "&:hover": {
            bgcolor: "rgba(255,255,255,.1)",
          },
        },
      }}
      icon={<QuestionMarkIcon sx={{ color: "#AAA" }} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => navigate(action.path)}
        />
      ))}
    </SpeedDial>
  );
}
