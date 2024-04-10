import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: {},
  data: {},
  errorModal: false,
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.status = action.payload.status;
      state.data = action.payload.data;
    },
    setErrorModal: (state, action) => {
      state.errorModal = action.payload;
    },
  },
});

export const { setError, setErrorModal } = errorSlice.actions;

export default errorSlice.reducer;
