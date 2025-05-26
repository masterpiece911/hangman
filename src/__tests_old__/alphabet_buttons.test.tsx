import { describe, afterEach, it, vi, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Keyboard from "../Keyboard";
import { resetRevealedMap } from "../gameHelpers";
import { alphabet } from "../utils/testHelper";

describe("Alphabet Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders", () => {
    render(
      <Keyboard
        isGameFinished={false}
        word="TESTINGTON"
        onLetterSelected={vi.fn()}
        revealed={resetRevealedMap()}
      />
    );
  });

  describe("setup", () => {
    it("creates letter buttons for every letter in alphabet", () => {
      render(
        <Keyboard
          isGameFinished={false}
          word="TESTINGTON"
          onLetterSelected={vi.fn()}
          revealed={resetRevealedMap()}
        />
      );

      [...alphabet].forEach((letter) => {
        getByText(letter, (_, element) => element.tagName === "BUTTON");
      });
    });
  });

  describe("callback", () => {
    it("calls when a child button is pressed", () => {
      const callback = vi.fn();
      const { getByText } = render(
        <Keyboard
          isGameFinished={false}
          word="TESTINGTON"
          onLetterSelected={callback}
          revealed={resetRevealedMap()}
        />
      );

      fireEvent.click(getByText("T"));

      fireEvent.click(getByText("E"));

      expect(callback).toHaveBeenCalled();
      expect(callback).toBeCalledWith("T");
      expect(callback).toBeCalledWith("E");
    });
  });
});
