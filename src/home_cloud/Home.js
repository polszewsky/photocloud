import {
  Container,
  Grid,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TagCloud } from "react-tagcloud";

const data = [
  { value: "Helsinki", count: 38, key: "1" },
  { value: "Tallinn", count: 30 },
  { value: "Oslo", count: 28 },
  { value: "Nantes", count: 25 },
  { value: "Paris", count: 33 },
  { value: "Montpelliere", count: 18 },
  { value: "Normandy", count: 20 },
  { value: "Gdańsk", count: 20 },
  { value: "Karkonosze", count: 20 },
  { value: "Łódź", count: 20 },
  { value: "Greece", count: 20 },
  { value: "Bulgary", count: 20 },
  { value: "Marocco", count: 20 },
];

const actions = [
  { icon: <SpeedDialIcon />, name: "Home" },
  { icon: <SpeedDialIcon />, name: "About" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "auto",
          marginBottom: "auto",
          height: "100vh",
        }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <TagCloud
              disableRandomColor
              minSize={12}
              maxSize={35}
              tags={data}
              randomSeed="11"
              onClick={(tag) => navigate(`/${tag.value}`)}
            />
          </Grid>
        </Grid>
      </Grid>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        FabProps={{
          sx: {
            bgcolor: "white",
            "&:hover": {
              bgcolor: "white",
            },
          },
        }}
        icon={<SpeedDialIcon sx={{ color: "black" }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}
