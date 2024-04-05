import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subTabsQuentity: 0,
};

export const subTabsQuentitySlice = createSlice({
  name: "subTabsQuentity",
  initialState,
  reducers: {
    setSubTabsQuentiry: (state, action) => {
      state.subTabsQuentity = action.payload;
    },
  },
});

export const { setSubTabsQuentiry } = subTabsQuentitySlice.actions;
export default subTabsQuentitySlice.reducer;
