import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import AlphabetButtons from '../alphabet_buttons';
import { resetRevealedMap } from '../gameHelpers';
import { randomAlphabetMap, alphabet } from '../utils/testHelper';


describe('Alphabet Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    render(<AlphabetButtons isGameFinished={false} word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);
  });

  describe('setup', () => {
    it('creates letter buttons for every letter in alphabet', () => {
      const { getByText } = render(<AlphabetButtons isGameFinished={false} word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);

      [...alphabet].forEach((letter) => {
        getByText(letter, (_, element) => element.tagName === 'BUTTON');
      });
    });
    it('creates unclicked buttons', () => {
      const { getByText } = render(<AlphabetButtons isGameFinished={false} word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);

      [...alphabet].forEach((letter) => {
        const button = getByText(letter, (_, element) => element.tagName === 'BUTTON');
        expect(button).toHaveStyle(`
          border-color: black;
          background: none;
          color: black;
        `);
      });
    });
    it('creates correct number of clicked buttons', () => {
      const alphabetMap = randomAlphabetMap();
      const { getByText } = render(
        <AlphabetButtons
          isGameFinished={false}
          word="TESTINGTON"
          onLetterSelected={jest.fn()}
          revealed={alphabetMap}
        />,
      );

      const predictedAmountOfClickedButtons = Array.from(
        alphabetMap.values(),
      ).reduce((counter, value) => {
        if (value) {
          return counter + 1;
        }
        return counter;
      }, 0);
      const actualAmountOfClickedButtons = Array.from(alphabetMap.entries()).reduce(
        (counter, [letter, revealed]) => {
          const element = getByText(letter);
          if (revealed) {
            expect(element).not.toHaveStyle(`
            border-color: black;
            background: none;
            color: black;
          `);
            return counter + 1;
          }
          expect(element).toHaveStyle(`
          border-color: black;
          background: none;
          color: black;
        `);
          return counter;
        }, 0,
      );
      expect(predictedAmountOfClickedButtons).toBe(actualAmountOfClickedButtons);
    });
  });

  describe('callback', () => {
    it('calls when a child button is pressed', () => {
      const callback = jest.fn();
      const { getByText } = render(<AlphabetButtons isGameFinished={false} word="TESTINGTON" onLetterSelected={callback} revealed={resetRevealedMap()} />);

      fireEvent.click(getByText('T'));

      fireEvent.click(getByText('E'));

      expect(callback).toHaveBeenCalled();
      expect(callback).toBeCalledWith('T');
      expect(callback).toBeCalledWith('E');
    });
  });
});
