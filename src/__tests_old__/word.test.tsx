import React from "react";
import { render, cleanup } from "@testing-library/react";
import Word from "../Word";
import { resetRevealedMap, randomWord } from "../gameHelpers";
import { randomAlphabetMap } from "../utils/testHelper";

describe("Word", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders", () => {
    render(
      <Word
        word="TESTINGTON"
        revealed={resetRevealedMap()}
        isGameFinished={false}
      />
    );
  });

  describe("setup", () => {
    it("creates correct number of letters", () => {
      const word = randomWord();
      const { container } = render(
        <Word
          word={word}
          revealed={resetRevealedMap()}
          isGameFinished={false}
        />
      );

      const letters = container.getElementsByTagName("SPAN");

      expect(letters.length).toBe(word.length);
    });

    it("letters are unrevealed", () => {
      const word = randomWord();
      const { container } = render(
        <Word
          word={word}
          revealed={resetRevealedMap()}
          isGameFinished={false}
        />
      );

      const letters = container.getElementsByTagName("SPAN");
      const unrevealedLetters = Array.prototype.filter.call(
        letters,
        (letter) => letter.innerHTML !== "_"
      );

      expect(unrevealedLetters.length).toBe(0);
    });
  });

  describe("random input", () => {
    it("reveals letters correctly", () => {
      const word = randomWord();
      const revealedMap = randomAlphabetMap();

      const { container } = render(
        <Word word={word} revealed={revealedMap} isGameFinished={false} />
      );

      const letters = container.getElementsByTagName("span");

      [...word].forEach((letter, index) => {
        const output = letters[index].innerHTML;
        if (revealedMap.get(letter)) {
          expect(output).toBe(letter);
        } else {
          expect(output).toBe("_");
        }
      });
    });
  });
});
