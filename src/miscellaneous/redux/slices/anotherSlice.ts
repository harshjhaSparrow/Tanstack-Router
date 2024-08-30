// src/redux/anotherSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AnotherState {
  items: string[];
}

const initialState: AnotherState = {
  items: [],
};

const anotherSlice = createSlice({
  name: 'another',
  initialState,
  reducers: {
    addItem: (state, action: { payload: string }) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: { payload: string }) => {
      state.items = state.items.filter(item => item !== action.payload);
    },
  },
});

export const { addItem, removeItem } = anotherSlice.actions;
export default anotherSlice.reducer;
