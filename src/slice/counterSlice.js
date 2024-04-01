import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  passValue: 0,
};

const counterSlice = createSlice({
  name: "geekster",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    updatePassValue: (state, action) => {
      state.passValue = action.payload;
    },
    incrementByValue: (state) => {
      state.value += state.passValue;
    },
  },
});

export const { increment, decrement, incrementByValue, updatePassValue } =
  counterSlice.actions;

export default counterSlice.reducer;
