import { configureStore } from "@reduxjs/toolkit";
import { goodsAPI } from "./goodsAPI";
import filtersReducer from "./filtersSlice/filtersSlice";
import cartReducer from "./cartSlice/cartSlice"
import modalReducer from "./modalSlice/modalSlice"
import errorReduser from './errorSlice/errorSlice'
import subTabsQuentityReducer from "./subTabsQuentity/subTabsQuentity";
import openSliceReducer from "./openSlice/openSlice";
import lastSeenReducer from "./lastSeenSlice/lastSeenSlice"
import sizeSinglePageReducer from './sizeSinglePageSlice/sizeSinglePageSlice'

export const store = configureStore({
  reducer: {
    [goodsAPI.reducerPath]: goodsAPI.reducer,
    filters: filtersReducer,
    cart: cartReducer, 
    modal: modalReducer, 
    subQuentity: subTabsQuentityReducer,
    open: openSliceReducer,
    lastSeen: lastSeenReducer,
    sizeSinglePage: sizeSinglePageReducer,
    error: errorReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([goodsAPI.middleware]),
});
