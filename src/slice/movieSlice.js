import { createSlice } from "@reduxjs/toolkit";

// combination of action and reducer (generate)

const initialState = {
  movie: [
    {
      id: 1,
      name: "marvel",
      type: "action",
      rating: "5",
    },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

console.log(movieSlice);

// createSlice - > actions , reducer

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
