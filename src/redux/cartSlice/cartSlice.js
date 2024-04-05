import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const found = state.items.find(el => el.id === action.payload.id)
      
      if(!found) {
        return {
          ...state,
          items: [...state.items, action.payload],
        }
      }
    },
    setIncrement: (state, action) => {
      state.items.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count++,
          }
          : el;
      });
    },
    setDecrement: (state, action) => {
      state.items.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count > 1 ? el.count-- : 1,
          }
          : el;
      });
    },
    setCartCount: (state, action) => {
      state.items.map((el) => {
        return el.id === action.payload.id
          ? {
            ...el,
            count: el.count = action.payload.value,
          }
          : el;
      });
    },
    setRemoveCartItem: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    setClearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setCartItems, setIncrement, setDecrement, setRemoveCartItem, setClearCart, setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
