import { createSlice } from "@reduxjs/toolkit";

// combination of action and reducer (generate)

const initialState = {
  movie: [],
  topRated: [],
  searchMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

// createSlice - > actions , reducer

export const { setMovie, setTopRated, setSearchMovie } = movieSlice.actions;

export default movieSlice.reducer;
