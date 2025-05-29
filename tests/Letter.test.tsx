import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Letter from "../src/Letter";

describe("Letter", () => {
  it("renders an underscore if letter = null", async () => {
    render(<Letter animate={false} letter={null} />);

    expect(await screen.findByText("_")).toBeInTheDocument();
  });

  it.each(["abcdefghijklmnopqrstuvwxyz"])(
    "renders the letter in uppercase if provided one",
    async (letter) => {
      render(<Letter animate={false} letter={letter} />);

      expect(await screen.findByText(letter.toUpperCase())).toBeInTheDocument();
    },
  );
});
