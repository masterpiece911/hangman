import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import LetterButton from '../letter_button';

describe('Letter Button', () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it('renders', () => {
    render(<LetterButton isClicked onClick={jest.fn()} letterInWord letter="A" />);
  });

  describe('clicks', () => {
    it('calls the provided onClick callback', () => {
      const callback = jest.fn();
      const { getByText } = render(
        <LetterButton
          isClicked={false}
          onClick={callback}
          letterInWord={false}
          letter="A"
        />,
      );

      fireEvent.click(getByText('A'));
      expect(callback).toHaveBeenCalled();
    });

    it('changes style class after first click', () => {
      const callback = jest.fn();
      const { getByText, rerender } = render(
        <LetterButton
          isClicked={false}
          onClick={callback}
          letterInWord={false}
          letter="A"
        />,
      );

      const firstStyle = getByText('A').className;

      fireEvent.click(getByText('A'));
      expect(callback).toHaveBeenCalled();

      rerender(<LetterButton
        isClicked
        onClick={callback}
        letterInWord
        letter="A"
      />);

      const secondStyle = getByText('A').className;

      expect(firstStyle).not.toBe(secondStyle);
    });

    it('have different styles depending whether letter is in word', () => {
      const callback = jest.fn();
      const { getByText, rerender } = render(
        <LetterButton
          isClicked={false}
          onClick={callback}
          letterInWord={false}
          letter="A"
        />,
      );

      const unclickedStyle = getByText('A').className;

      rerender(<LetterButton
        isClicked
        onClick={callback}
        letterInWord={false}
        letter="A"
      />);

      const clickedNotWord = getByText('A').className;

      rerender(<LetterButton
        isClicked
        onClick={callback}
        letterInWord
        letter="A"
      />);

      const clickedInWord = getByText('A').className;

      expect(unclickedStyle).not.toBe(clickedNotWord);
      expect(unclickedStyle).not.toBe(clickedInWord);
      expect(clickedNotWord).not.toBe(clickedInWord);
    });
  });
});
