import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subcategory: "",
  page: "",
  color: "",
  search: "",
  size: "",
  sortby: "",
  order: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subcategory = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortby = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setFilters: (state, action) => {
      state.category = action.payload.category;
      state.subcategory = action.payload.subcategory;
      state.page = action.payload.page;
      state.color = action.payload.color;
      state.search = action.payload.search;
      state.size = action.payload.size;
      state.sortby = action.payload.sortby;
      state.order = action.payload.order;
    },
  },
});

export const { setCategory, setSubCategory, setPage, setColor, setSearch, setFilters, setSize, setSortBy, setOrder } = filtersSlice.actions;
export default filtersSlice.reducer;
