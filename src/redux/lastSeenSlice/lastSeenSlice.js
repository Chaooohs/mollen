import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastSeen: [],
};

export const lastSeenSlice = createSlice({
  name: "lastSeen",
  initialState,
  reducers: {
    setLastSeen: (state, action) => {

      const item = {
        id: action.payload.id,
        title: action.payload.title,
        thumbnail: action.payload.thumbnail,
      }

      const found = state.lastSeen.find(el => el.id === item.id)

      if (!found) {
        // state.lastSeen.push({...item})
        return {
          ...state,
          lastSeen: [...state.lastSeen, item]
        }
      }
    },
    setSLastSeenShift: (state, {payload}) => {
      if(payload) {
        state.lastSeen = state.lastSeen.slice(1)
      }
    }
  }
})

export const { setLastSeen, setSLastSeenShift } = lastSeenSlice.actions;
export default lastSeenSlice.reducer;