import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import searchReducer from "./features/searchSlice";
import menuReducer from "./features/menuSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
    menu: menuReducer,
  },
});
