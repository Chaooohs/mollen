import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  burger: false,
};

export const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.sidebar = action.payload;
    },
    setBurgerOpen: (state, action) => {
      state.burger = action.payload;
    },
  },
});

export const { setSidebarOpen,setBurgerOpen } = openSlice.actions;
export default openSlice.reducer;