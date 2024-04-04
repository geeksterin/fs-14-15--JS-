import { createSlice } from "@reduxjs/toolkit";

// combination of action and reducer (generate)

const initialState = {
  movie: [],
  topRated: [],
  searchMovie: [],
  genres: [],
  tvShow: [],
  similar: [],
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
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setSimilar: (state, action) => {
      state.similar = action.payload;
    },
  },
});

// createSlice - > actions , reducer

export const { setMovie, setTopRated, setSearchMovie, setGenres, setSimilar } =
  movieSlice.actions;

export default movieSlice.reducer;
