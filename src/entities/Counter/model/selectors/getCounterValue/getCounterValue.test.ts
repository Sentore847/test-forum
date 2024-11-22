import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "utility-types";

describe("should return counter value", () => {
  test("TEST_NAME", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
