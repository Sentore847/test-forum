import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test("increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment())
    ).toEqual({ value: 11 });
  });

  test("increment", () => {
    expect(
      counterReducer(undefined as CounterSchema, counterActions.increment())
    ).toEqual({ value: 1 });
  });
});
