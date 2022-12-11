import { createSlice } from "@reduxjs/toolkit";

const filterOriginalPhoto = (imageUrl) => {
  if (imageUrl === null || imageUrl === "" || imageUrl === undefined) {
    return;
  }

  const urlArray = imageUrl.split(".jpg");

  return `${urlArray[0].slice(0, -1)}.jpg`;
};

const photoLocationSlice = createSlice({
  name: "photoLocation",
  initialState: {
    helpShown: true,
    photoLocation: {},

    photoDialogOpen: false,
    photoSelected: "",
  },
  reducers: {
    setPhotoLocationData: (state, action) => {
      state.photoLocation = action.payload;
    },
    hideHelpAlert: (state) => {
      state.helpShown = false;
    },

    setPhotoDialogOpen: (state, action) => {
      const photoUrlRaw = action.payload;

      state.photoSelected = filterOriginalPhoto(photoUrlRaw);
      state.photoDialogOpen = true;
    },
    setPhotoDialogClose: (state) => {
      state.photoDialogOpen = false;
      state.photoSelected = "";
    },
  },
});

export const {
  setPhotoLocationData,
  hideHelpAlert,
  setPhotoDialogOpen,
  setPhotoDialogClose,
} = photoLocationSlice.actions;

export default photoLocationSlice.reducer;
