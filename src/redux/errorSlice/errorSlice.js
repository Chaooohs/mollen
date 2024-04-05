import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: {},
  data: {},
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.status = action.payload.status;
      state.data = action.payload.data;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
