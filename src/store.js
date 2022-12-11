import { configureStore } from "@reduxjs/toolkit";
import commentSectionReducer from "./app/photopage/comments/commentSectionSlice";
import photoLocationReducer from "./app/photopage/photoLocationSlice";

export default configureStore({
  reducer: {
    commentSection: commentSectionReducer,
    photoLocation: photoLocationReducer,
  },
});
