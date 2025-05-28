import { describe, it, expect, vi, afterEach } from "vitest";
import type { Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useGame from "../src/useGame";
import { generate } from "random-words";

vi.mock("random-words", () => ({
  generate: vi.fn().mockReturnValue("TESTINGTON"),
}));

describe("useGame", () => {
  afterEach(() => {
    (generate as Mock).mockClear();
  });
  it("uses random-words to generate the played word", () => {
    renderHook(() => useGame({}));

    expect(generate).toHaveBeenCalled();
  });

  it("passes parameters to random-words", () => {
    renderHook(() => useGame({ maxLength: 99, minLength: 2 }));

    expect(generate).toHaveBeenCalledWith({ maxLength: 99, minLength: 2 });
  });

  it("sets remaining tries to value provided as option", () => {
    const { result } = renderHook(() => useGame({ maxTries: 2 }));

    expect(result.current.remainingTries).toBe(2);
  });
  it("reveals only matching letters when a valid guess is made", () => {
    const { result } = renderHook(() => useGame({ maxTries: 5 }));
    expect(result.current.revealedWord).toEqual(Array(10).fill(null));

    act(() => {
      result.current.onLetter("t");
    });

    expect(result.current.remainingTries).toBe(5);
    expect(result.current.revealedWord).toEqual([
      "t",
      null,
      null,
      "t",
      null,
      null,
      null,
      "t",
      null,
      null,
    ]);
    expect(result.current.play).toBe("PLAYING");
  });

  it("decreases remaining tries on an invalid guess once", () => {
    const { result, rerender } = renderHook(() => useGame({ maxTries: 3 }));

    act(() => {
      result.current.onLetter("z");
    });
    expect(result.current.remainingTries).toBe(2);

    act(() => {
      result.current.onLetter("z");
    });
    expect(result.current.remainingTries).toBe(2);
  });

  it("transitions to LOSE when tries reach zero", () => {
    const { result } = renderHook(() => useGame({ maxTries: 2 }));

    act(() => {
      result.current.onLetter("x");
      result.current.onLetter("y");
    });
    expect(result.current.remainingTries).toBe(0);
    expect(result.current.play).toBe("LOSE");
    expect(result.current.revealedWord).toEqual(Array.from("testington"));
  });

  it("transitions to WIN when all unique letters are guessed", () => {
    const uniqueLetters = Array.from(new Set("testington".toLowerCase()));
    const { result } = renderHook(() => useGame({ maxTries: 8 }));

    act(() => {
      for (const l of uniqueLetters) {
        result.current.onLetter(l);
      }
    });

    expect(result.current.play).toBe("WIN");
    expect(result.current.revealedWord).toEqual(Array.from("testington"));
    expect(result.current.remainingTries).toBe(8);
  });

  it("resetGame clears played letters and restores tries", () => {
    const { result } = renderHook(() => useGame({ maxTries: 4 }));
    act(() => {
      result.current.onLetter("x");
      result.current.onLetter("y");
    });
    expect(result.current.remainingTries).toBe(2);
    expect(result.current.play).toBe("PLAYING");

    act(() => {
      result.current.resetGame();
    });

    expect(result.current.remainingTries).toBe(4);
    expect(result.current.revealedWord).toEqual(Array(10).fill(null));
    expect(result.current.play).toBe("START");
  });

  it("starts in START state with no letters revealed", () => {
    const { result } = renderHook(() => useGame({ maxTries: 5 }));
    expect(result.current.play).toBe("START");
    expect(result.current.revealedWord).toEqual(Array(10).fill(null));
  });

  it("normalizes uppercase guesses to lowercase", () => {
    const { result } = renderHook(() => useGame({ maxTries: 5 }));
    act(() => result.current.onLetter("T"));
    expect(
      result.current.revealedWord.filter((c) => c !== null).length
    ).toBeGreaterThan(0);
    expect(result.current.remainingTries).toBe(5);
    expect(result.current.play).toBe("PLAYING");
  });

  it("does not decrement tries when guessing the same valid letter twice", () => {
    const { result } = renderHook(() => useGame({ maxTries: 3 }));
    act(() => result.current.onLetter("E"));
    expect(result.current.remainingTries).toBe(3);
    act(() => result.current.onLetter("e"));
    expect(result.current.remainingTries).toBe(3);
  });

  it("remains in PLAYING after a single wrong guess", () => {
    const { result } = renderHook(() => useGame({ maxTries: 3 }));
    act(() => result.current.onLetter("z"));
    expect(result.current.remainingTries).toBe(2);
    expect(result.current.play).toBe("PLAYING");
  });

  it("records letter states in playedLetters map", () => {
    const { result } = renderHook(() => useGame({ maxTries: 3 }));
    act(() => {
      result.current.onLetter("t");
      result.current.onLetter("x");
    });
    const map = result.current.playedLetters;
    expect(map.get("t")).toBe("VALID");
    expect(map.get("x")).toBe("INVALID");
  });

  it("does nothing once you've won", () => {
    const { result } = renderHook(() => useGame({}));

    const uniques = Array.from(new Set("testington"));
    act(() => uniques.forEach((l) => result.current.onLetter(l)));
    expect(result.current.play).toBe("WIN");
    const before = {
      tries: result.current.remainingTries,
      revealed: [...result.current.revealedWord] as any[],
    };
    act(() => result.current.onLetter("z"));
    expect(result.current.remainingTries).toBe(before.tries);
    expect(result.current.revealedWord).toEqual(before.revealed);
  });

  it("resetGame fetches a brand-new word", () => {
    (generate as Mock).mockReturnValueOnce("ALPHA").mockReturnValueOnce("BETA");

    const { result } = renderHook(() => useGame({}));

    expect(generate).toHaveBeenCalled();

    (generate as Mock).mockClear();

    act(() => result.current.resetGame());
    expect(generate).toHaveBeenCalled();

    const mask = result.current.revealedWord
      .map((c) => (c === null ? "_" : c))
      .join("");
    expect(mask).toBe("____");

    act(() => result.current.onLetter("b"));
    expect(result.current.revealedWord[0]).toBe("b");
  });
});
