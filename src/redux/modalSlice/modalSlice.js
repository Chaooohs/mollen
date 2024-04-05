import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModalOpen: false,
  cartItemModalOpen: false,
  limitGoodsModal: false,
  id: '',
  title: '',
  stock: '',
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCartModalOpen: (state, action) => {
      state.cartModalOpen = action.payload;
    },
    setCartItemModalOpen: (state, action) => {
      state.cartItemModalOpen = action.payload.open;
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
    setLimitGoodsModalOpen: (state, action) => {
      state.limitGoodsModal = action.payload.open;
      state.stock = action.payload.stock;
    },
  },
});

export const { setCartModalOpen, setCartItemModalOpen, setLimitGoodsModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
