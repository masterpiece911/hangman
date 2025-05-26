import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { resetRevealedMap, randomWord } from "../gameHelpers";
import { randomAlphabetMap } from "../utils/testHelper";
import Word from "../Word";

describe("Word", () => {
  it("renders", () => {
    render(
      <Word
        word="TESTINGTON"
        revealed={resetRevealedMap()}
        isGameFinished={false}
      />
    );
  });
});
