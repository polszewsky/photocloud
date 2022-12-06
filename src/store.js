import { configureStore } from "@reduxjs/toolkit";
import commentSectionReducer from "./photo_location/comments/commentSectionSlice";
import photoLocationReducer from "./photo_location/photoLocationSlice";

export default configureStore({
  reducer: {
    commentSection: commentSectionReducer,
    photoLocation: photoLocationReducer,
  },
});
