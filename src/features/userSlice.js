import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "user",
  initialState: { isAuthenticated: false },
  reducers: {
    authenticate(state, action) {
      state.isAuthenticated = true;
    },
  },
};

const userSlice = createSlice(options);

export function selectIsAuthenticated(state) {
  return state.user.isAuthenticated;
}

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
