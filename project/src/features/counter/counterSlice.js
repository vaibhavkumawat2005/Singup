import { createSlice } from "@reduxjs/toolkit";

const loadCount = () => {
  try {
    const count = localStorage.getItem('count');
    return count ? parseInt(count) : 0;
  } catch (err) {
    return 0;
  }
};

const saveCount = (count) => {
  localStorage.setItem('count', count.toString());
};

const initialState = {
  value: loadCount(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveCount(state.value);
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        saveCount(state.value);
      }
    },
    reset: (state) => {
      state.value = 0;
      saveCount(state.value);
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;