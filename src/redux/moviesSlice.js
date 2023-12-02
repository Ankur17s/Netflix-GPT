import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerBackground: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieBackground: (state, action) => {
      state.trailerBackground = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieBackground } = moviesSlice.actions;

export default moviesSlice.reducer;
