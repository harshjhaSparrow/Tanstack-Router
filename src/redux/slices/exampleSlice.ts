// src/redux/exampleSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
  value: number;
  collapsed: any;
}

const initialState: ExampleState = {
  value: 0,
  collapsed: false,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggle: (state, value) => {
      state.collapsed = value.payload;
    },
  },
});

export const { increment, decrement, toggle } = exampleSlice.actions;
export default exampleSlice.reducer;
