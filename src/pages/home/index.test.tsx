import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from ".";

describe("Random Component", () => {
  it("renders correctly", () => {
    render(<HomePage />);
    screen.debug(); // Logs the DOM structure
    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
