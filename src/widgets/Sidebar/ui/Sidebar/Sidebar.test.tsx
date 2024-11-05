import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { act } from "react";

describe("Sidebar", () => {
  test("renders sidebar component", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggles sidebar on button click", () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    act(() => {
      fireEvent.click(toggleBtn);
    });

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
