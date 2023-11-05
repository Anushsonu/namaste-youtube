import { createSlice } from "@reduxjs/toolkit";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    searchTerm: "",
    searchVideosList: [],
  },
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addSearchVideos: (state, action) => {
      state.searchVideosList = action.payload;
    },
  },
});

export const { addSearchTerm, addSearchVideos } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;
