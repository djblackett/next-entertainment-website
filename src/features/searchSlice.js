import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "search",
  initialState: { searchTerm: "" },
  reducers: {
    handleChange(state, action) {
      state.searchTerm = action.payload;
    },
  },
};

const searchSlice = createSlice(options);

export function selectSearchTerm(state) {
  return state.search.searchTerm;
}
export const { handleChange } = searchSlice.actions;
export default searchSlice.reducer;
