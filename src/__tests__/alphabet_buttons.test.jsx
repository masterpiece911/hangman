import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import AlphabetButtons from '../alphabet_buttons';
import { resetRevealedMap } from '../gameHelpers';

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
      expect(buttons.length).toBe([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].length);
    });
    it('creates unclicked buttons', () => {
      const { container } = render(<AlphabetButtons word="TESTINGTON" onLetterSelected={jest.fn()} revealed={resetRevealedMap()} />);

      const clickedButtonsA = container.getElementsByClassName('inWordClicked');
      const clickedButtonsB = container.getElementsByClassName('notInWordClicked');

      expect(clickedButtonsA.length).toBe(0);
      expect(clickedButtonsB.length).toBe(0);
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
