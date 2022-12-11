import { Dialog } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoDialogClose } from "../photoLocationSlice";

export default function ImageFullDialog() {
  const dispatch = useDispatch();
  const { photoDialogOpen, photoSelected } = useSelector(
    (store) => store.photoLocation
  );
  return (
    <Dialog
      maxWidth="xl"
      onClose={() => dispatch(setPhotoDialogClose())}
      open={photoDialogOpen}
      PaperProps={{
        style: {
          borderRadius: "0px",
        },
      }}
    >
      <img
        src={photoSelected}
        alt="vacation"
        style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}
      />
    </Dialog>
  );
}
