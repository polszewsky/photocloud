import { Container, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TagCloud } from "react-tagcloud";
import Copyrights from "../common/components/Copyrights";
import LeviButton from "../common/components/LeviButton";
import { CLOUD_DATA } from "../common/photoUtils";
import { removeDialect } from "../common/stringUtils";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  const switchToLocation = (tag) => navigate(`/${removeDialect(tag)}`);

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
          <Grid item xs={8} sx={{ textAlign: "center" }}>
            <TagCloud
              minSize={22}
              maxSize={38}
              tags={CLOUD_DATA}
              randomSeed="11"
              colorOptions={{ luminosity: "dark", hue: "blue" }}
              disableRandomColor={false}
              onClick={(tag) => switchToLocation(tag.value)}
              style={{
                cursor: "pointer",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Copyrights />
      <LeviButton />
    </Container>
  );
}
