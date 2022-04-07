import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const options = {
  name: "movies",
  initialState: { data: data },
  reducers: {
    toggleBookmarked(state, action) {
      let movie = state.data.find((item) => item.title === action.payload);
      movie.isBookmarked = !movie.isBookmarked;
    },
  },
};

const moviesSlice = createSlice(options);

export function selectMovies(state) {
  return state.movies.data;
}

export const { toggleBookmarked } = moviesSlice.actions;
export default moviesSlice.reducer;
