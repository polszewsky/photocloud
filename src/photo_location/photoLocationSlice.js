import { createSlice } from "@reduxjs/toolkit";

const photoLocationSlice = createSlice({
  name: "photoLocation",
  initialState: {
    helpShown: true,
    photoLocation: {},
  },
  reducers: {
    setPhotoLocationData: (state, action) => {
      state.photoLocation = action.payload;
    },
    hideHelpAlert: (state) => {
      state.helpShown = false;
    },
  },
});

export const { setPhotoLocationData, hideHelpAlert } =
  photoLocationSlice.actions;

export default photoLocationSlice.reducer;
