import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Word from '../word';
import { resetRevealedMap, randomWord } from '../gameHelpers';

describe('Word', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    render(<Word word="TESTINGTON" revealed={resetRevealedMap()} isGameFinished={false} />);
  });

  describe('setup', () => {
    it('creates correct number of letters', () => {
      const word = randomWord();
      const { container } = render(
        <Word word={word} revealed={resetRevealedMap()} isGameFinished={false} />,
      );

      const letter = container.getElementsByClassName('letter');

      expect(letter.length).toBe(word.length);
    });

    it('letters are unrevealed', () => {
      const word = randomWord();
      const { container } = render(
        <Word word={word} revealed={resetRevealedMap()} isGameFinished={false} />,
      );

      const letters = container.getElementsByClassName('letter');
      const unrevealedLetters = Array.prototype.filter.call(letters, (letter) => letter.innerHTML !== '_');

      expect(unrevealedLetters.length).toBe(0);
    });
  });
});
