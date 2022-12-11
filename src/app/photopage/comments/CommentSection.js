import { Collapse, Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CommentEntry from "../../../common/components/CommentEntry";
import CommentsButton from "../../../common/components/CommentsButton";

export default function CommentSection() {
  const { comments = [] } = useSelector((store) => store.commentSection);
  const [open, setOpen] = useState(false);

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "2rem", padding: "0 0 1rem 0" }}
    >
      <Grid item xs={10}>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item>
            <Grid container item direction="row">
              <Grid item xs={12}>
                <CommentsButton onClick={() => setOpen(!open)}>
                  Show/Hide Comments
                </CommentsButton>
              </Grid>
            </Grid>
          </Grid>
          <Collapse in={open}>
            <Fragment>
              {/* <Grid item sx={{ marginTop: "1rem" }}>
                <Grid container item direction="row">
                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        color: "#888",
                        letterSpacing: "2px",
                        fontWeight: 300,
                        fontSize: "10pt",
                      }}
                    >
                      log in to comment...
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> */}
              <Grid item sx={{ marginTop: "1rem" }}>
                <Grid container item direction="row" spacing={2}>
                  {comments.map((comment, index) => (
                    <CommentEntry comment={comment} key={index} />
                  ))}
                </Grid>
              </Grid>
            </Fragment>
          </Collapse>
        </Grid>
      </Grid>
    </Grid>
  );
}
