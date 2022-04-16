import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import searchReducer from "./features/searchSlice";
import menuReducer from "./features/menuSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
    menu: menuReducer,
    user: userReducer,
  },
});
