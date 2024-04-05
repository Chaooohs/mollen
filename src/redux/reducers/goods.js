// REDUX TOOLKIT
// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const setGoods = createAction("SET_GOODS")
// export const setGetCategory = createAction("SET_GET_CATEGORY")

// const initialState = {
//   items: [],
//   categories: ['electronic', 'house', 'men', 'women'],
//   isLoading: false,
// };

// export const goods = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setGoods, (state, action) => ({
//         ...state, 
//         items: action.payload
//     }))
//     .addCase(setGetCategory, (state, action) => ({
//         ...state, 
//         categories: action.payload
//     }))
// })


// REDUX
// const setGoods = (items) => ({
//   type: "SET_GOODS",
//   payload: items,
// });


// REDUX TOOLKIT
// export const setGoods = createAction("SET_GOODS")


// REDUX
// export const goods = (state = initialState, action) => {
//   if (action.type === "SET_GOODS") {
//     return {
//       ...state,
//       item: action.payload,
//       isLoading: true
//     };
//   }
//   return state;
// };


// REDUX TOOLKIT
// export const goods = createReducer(initialState, {
// ["SET_GOODS"]: (state, action) => [...state, action.payload]
// })
