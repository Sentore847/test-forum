import { screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId("increment-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
  });

  test("increment", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId("decrement-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
  });
});
