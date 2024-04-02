import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slice/movieSlice";

const store = configureStore({
  reducer: {
    movieSlice,
  },
});

export default store;
