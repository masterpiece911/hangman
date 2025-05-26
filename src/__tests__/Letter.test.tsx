import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Letter from "../Letter";

describe("Letter", () => {
  it("renders a letter when it is revealed", () => {
    render(<Letter value="A" />);

    expect(screen.findByText("A")).toBeDefined();
  });

  it("renders an underscore when the letter was not revealed", () => {
    render(<Letter />);

    expect(screen.findByText("_")).toBeDefined();
  });
});
