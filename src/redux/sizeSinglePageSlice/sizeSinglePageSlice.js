import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: '',
};

export const sizeSinglePageSlice = createSlice({
  name: "sizeSinglePage",
  initialState,
  reducers: {
    setSizeSinglePage: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { setSizeSinglePage } = sizeSinglePageSlice.actions;
export default sizeSinglePageSlice.reducer;