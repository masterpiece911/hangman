import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LetterButton from "../src/LetterButton";

describe("LetterButton", () => {
  it("calls provided callback on click when unplayed", async () => {
    const callback = vi.fn();
    render(
      <LetterButton letterState="UNPLAYED" onClick={callback} letter="a" />,
    );

    await userEvent.click(await screen.findByRole("button", { name: /a/ }));

    expect(callback).toHaveBeenCalledOnce();
  });

  it.each(["VALID", "INVALID"] as const)(
    "does not call provided callback on click when played and %s",
    async (letterState) => {
      const callback = vi.fn();
      render(
        <LetterButton
          letterState={letterState}
          onClick={callback}
          letter="a"
        />,
      );

      await userEvent.click(await screen.findByRole("button", { name: /a/ }));

      expect(callback).not.toHaveBeenCalled();
    },
  );
});
