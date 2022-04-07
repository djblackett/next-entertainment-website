import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "menu",
  initialState: { page: "home" },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
};

const menuSlice = createSlice(options);

export function selectPage(state) {
  return state.menu.page;
}

export const { setPage } = menuSlice.actions;
export default menuSlice.reducer;
