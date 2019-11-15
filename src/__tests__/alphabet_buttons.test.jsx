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
    render(<AlphabetButtons word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);
  });

  describe('setup', () => {
    it('creates 26 letter buttons', () => {
      const { container } = render(<AlphabetButtons word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);

      const buttons = container.getElementsByClassName('alphabetButton');
      expect(buttons.length).toBe([...alphabet].length);
    });
    it('creates unclicked buttons', () => {
      const { container } = render(<AlphabetButtons word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);

      const clickedButtonsA = container.getElementsByClassName('inWordClicked');
      const clickedButtonsB = container.getElementsByClassName('notInWordClicked');

      expect(clickedButtonsA.length).toBe(0);
      expect(clickedButtonsB.length).toBe(0);
    });
    it('creates correct number of clicked buttons', () => {
      const alphabetMap = randomAlphabetMap();
      const { getByText } = render(
        <AlphabetButtons
          word="TESTINGTON"
          onLetterSelected={jest.fn()}
          revealed={alphabetMap}
        />,
      );

      const actualClickedButtons = Array.from(alphabetMap.values()).reduce((counter, value) => {
        if (value) {
          return counter + 1;
        }
        return counter;
      }, 0);
      const clickedButtons = Array.from(alphabetMap.entries()).reduce((counter, value) => {
        const { className } = getByText(value[0]);
        if (value[1]) {
          expect(className).not.toBe('unclicked alphabetButton inter');
          return counter + 1;
        }
        expect(className).toBe('unclicked alphabetButton inter');
        return counter;
      }, 0);
      expect(actualClickedButtons).toBe(clickedButtons);
    });
  });

  describe('callback', () => {
    it('calls when a child button is pressed', () => {
      const callback = jest.fn();
      const { getByText } = render(<AlphabetButtons word="TESTINGTON" onLetterSelected={callback} revealed={resetRevealedMap()} />);

      fireEvent.click(getByText('T'));

      fireEvent.click(getByText('E'));

      expect(callback).toHaveBeenCalled();
      expect(callback).toBeCalledWith('T');
      expect(callback).toBeCalledWith('E');
    });
  });
});
