import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    setGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});

export const { setGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
