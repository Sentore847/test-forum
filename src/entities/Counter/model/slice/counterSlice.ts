import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state: CounterSchema) {
      state.value++;
    },

    decrement(state: CounterSchema) {
      state.value--;
    },

    incrementByAmount(state: CounterSchema, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
