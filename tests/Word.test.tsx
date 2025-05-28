import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Word from "../src/Word";

describe("Word", () => {
  it("renders provided letters, mapping null to lowercases, in a list", async () => {
    const revealedWord = [null, "e", null, "i", null];
    render(<Word revealedWord={revealedWord} />);

    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();

    const listitems = await within(list).findAllByRole("listitem");
    expect(listitems).toHaveLength(5);

    const expectedOutput = ["_", "E", "_", "I", "_"];
    expect(listitems.map((i) => i.textContent)).toEqual(expectedOutput);
  });
});
