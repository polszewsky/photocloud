import { Container, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TagCloud } from "react-tagcloud";
import { CLOUD_DATA } from "../../common/photoUtils";
import { removeDialect } from "../../common/stringUtils";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  const switchToLocation = (tag) => navigate(`/${removeDialect(tag)}`);

  return (
    <Container sx={{ height: "90vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "auto",
          marginBottom: "auto",
          height: "90vh",
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
              minSize={30}
              maxSize={48}
              tags={CLOUD_DATA}
              randomSeed="11"
              colorOptions={{ luminosity: "light", hue: "monochrome" }}
              disableRandomColor={false}
              onClick={(tag) => switchToLocation(tag.value)}
              style={{
                cursor: "pointer",
                margin: "1rem",
                fontFamily: "Josefin Sans",
                letterSpacing: "1px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
