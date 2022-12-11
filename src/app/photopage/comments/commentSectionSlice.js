import { createSlice } from "@reduxjs/toolkit";
import { fetchWrapper, getResponseTemplate } from "../../../common/urlUtils";

const commentSectionSlice = createSlice({
  name: "commentSection",
  initialState: {
    comments: [],
    commentsLoading: false,
  },
  reducers: {
    startCommentsFetch: (state) => {
      state.commentsLoading = true;
    },
    startCommentsFetchCompleted: (state, action) => {
      state.comments = action.payload;
      state.commentsLoading = false;
    },
  },
});

const { startCommentsFetch, startCommentsFetchCompleted } =
  commentSectionSlice.actions;

export const fetchFakeComments = () => async (dispatch) => {
  dispatch(startCommentsFetch());

  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  const response = await fetchWrapper(url, getResponseTemplate);

  if (response.ok) {
    dispatch(startCommentsFetchCompleted(await response.json()));
  } else {
    dispatch(startCommentsFetchCompleted([]));
    console.log("Error: Cannot fetch comments.");
  }
};

export default commentSectionSlice.reducer;
