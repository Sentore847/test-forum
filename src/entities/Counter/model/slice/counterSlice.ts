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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    increment(state: CounterSchema) {
      state.value++;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decrement(state: CounterSchema) {
      state.value--;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    incrementByAmount(state: CounterSchema, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
