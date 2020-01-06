import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Game } from '../game';
import * as gameHelpers from '../gameHelpers';
import { alphabet } from '../utils/testHelper';

describe('Game', () => {
  beforeEach(() => {
    jest.spyOn(gameHelpers, 'gameFinished');
    jest.spyOn(gameHelpers, 'resetRevealedMap');
    jest.spyOn(gameHelpers, 'resetTries');
    jest.spyOn(gameHelpers, 'randomWord');
  });

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it('renders', () => {
    render(<Game />);
  });

  describe('when launching', () => {
    it('has eight tries', () => {
      const { getByText } = render(<Game />);
      const statusText = getByText(/attempts/).innerHTML;

      expect(statusText).toBe('8 attempts remaining.');
    });

    it('shows right amount of hidden letters', () => {
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getAllByText } = render(<Game />);
      const letters = getAllByText('_');

      expect(letters.length).toBe(word.length);
    });

    it('has no revealed letters', () => {
      const { container } = render(<Game />);
      const letters = container.getElementsByTagName('span');
      const revealedLetters = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML !== '_');
      expect(revealedLetters.length).toBe(0);
    });

    it('has no clicked alphabet buttons', () => {
      const { getByText } = render(<Game />);

      [...alphabet].forEach((letter) => {
        const elem = getByText(letter, (content, element) => element.tagName.toLowerCase() === 'button');
        expect(elem).toHaveStyle(`
          border-color: black;
          background: none;
          color: black;
        `);
      });
    });

    it('fetched a random word', () => {
      render(<Game />);
      expect(gameHelpers.randomWord).toHaveBeenCalled();
    });
  });

  describe('after a user inputs a letter', () => {
    it('reveals letters when a correct letter was clicked', () => {
      // mock implemenation so I can access the generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText, getAllByText } = render(
        <Game />,
      );
      // list of unique letters in word
      const uniqueLettersInWord = Array.from(new Set([...word]));
      // take about half of the unique letters and shuffle
      const revealedLetters = uniqueLettersInWord.sort(
        () => Math.random() - Math.random(),
      ).slice(0, Math.floor(uniqueLettersInWord.length / 2));

      // guess about half of the correct letters
      revealedLetters.forEach((letter) => {
        fireEvent.click(getByText(letter));
      });


      // check if the guessed letters have been revealed
      [...alphabet].forEach((letter) => {
        const revealedLetterElems = getAllByText(letter).filter((el) => el.nodeName === 'SPAN');
        if (revealedLetters.includes(letter)) {
          expect(revealedLetterElems.length > 0).toBeTruthy();
        } else {
          expect(revealedLetterElems.length).toEqual(0);
        }
      });
    });

    it('reveals letters when a correct letter was typed', () => {
      // mock implemenation so I can access the generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getAllByText, container } = render(
        <Game />,
      );
      // list of unique letters in word
      const uniqueLettersInWord = Array.from(new Set([...word]));
      // take about half of the unique letters and shuffle
      const revealedLetters = uniqueLettersInWord.sort(
        () => Math.random() - Math.random(),
      ).slice(0, Math.floor(uniqueLettersInWord.length / 2));

      // guess about half of the correct letters
      revealedLetters.forEach((letter) => {
        fireEvent.keyDown(container, {
          key: letter,
          code: letter.charCodeAt(0),
          charCode: letter.charCodeAt(0),
          keyCode: letter.charCodeAt(0),
        });
      });

      // check if the guessed letters have been revealed
      [...alphabet].forEach((letter) => {
        const revealedLetterElems = getAllByText(letter).filter((el) => el.nodeName === 'SPAN');
        if (revealedLetters.includes(letter)) {
          expect(revealedLetterElems.length > 0).toBeTruthy();
        } else {
          expect(revealedLetterElems.length).toEqual(0);
        }
      });
    });

    it("doesn't reveal letters when an incorrect letter was input", () => {
      // mock implemenation so I can access the generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getAllByText, container } = render(
        <Game />,
      );
      // list of letters not in word
      const uniqueLettersInWord = Array.from(new Set([...word]));
      const lettersNotInWord = [...alphabet].filter((elem) => !uniqueLettersInWord.includes(elem));

      // take four letters that are not in the word
      const lettersToInput = lettersNotInWord.sort(
        () => Math.random() - Math.random(),
      ).slice(0, 4);

      // input the incorrect letters
      lettersToInput.forEach((letter) => {
        fireEvent.keyDown(container, {
          key: letter,
          code: letter.charCodeAt(0),
          charCode: letter.charCodeAt(0),
          keyCode: letter.charCodeAt(0),
        });
      });

      // check if the guessed letters have been revealed
      [...alphabet].forEach((letter) => {
        const revealedLetterElems = getAllByText(letter).filter((el) => el.nodeName === 'SPAN');
        if (lettersToInput.includes(letter)) {
          expect(revealedLetterElems.length).toEqual(0);
        }
      });
    });
  });

  describe('when game is finished', () => {
    afterEach(() => {
      cleanup();
    });

    it('typing of further letters changes nothing', () => {
      const word = gameHelpers.randomWord();

      gameHelpers.gameFinished.mockImplementation(() => true);
      gameHelpers.randomWord.mockImplementation(() => word);
      gameHelpers.resetTries.mockImplementation(() => 0);

      const { queryAllByText, container } = render(<Game />);

      const lettersBefore = queryAllByText('_').filter((el) => el.nodeName === 'SPAN');

      fireEvent.keyDown(container, {
        key: [...word][0],
        code: word.charCodeAt(0),
        keyCode: word.charCodeAt(0),
        charCode: word.charCodeAt(0),
      });

      const lettersAfter = queryAllByText('_').filter((el) => el.nodeName === 'SPAN');

      expect(lettersBefore).toStrictEqual(lettersAfter);
    });

    it('alphabet buttons are hidden', () => {
      // mock implementation so I can access generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText, container } = render(<Game />);

      // long sequence of code to force a game over event
      const uniqueLettersInWord = Array.from(new Set([...word]));
      const lettersNotInWord = [...alphabet].filter(
        (letter) => !uniqueLettersInWord.includes(letter),
      );
      lettersNotInWord.sort(() => Math.random() - Math.random());

      const lettersToClick = lettersNotInWord.slice(0, 8);

      for (let tries = 7; tries >= 0; tries -= 1) {
        fireEvent.click(getByText(lettersToClick[tries]));
      }

      // check if the alphabet container is hidden thorugh css
      const buttons = container.getElementsByTagName('button');
      expect(buttons.length).toBe(1);
    });
  });

  it('reset button resets game', () => {
    const { container, getByText } = render(<Game />);
    fireEvent.click(getByText('NEW GAME'));
    expect(gameHelpers.randomWord).toHaveBeenCalled();
    expect(gameHelpers.resetRevealedMap).toHaveBeenCalled();
    expect(gameHelpers.resetTries).toHaveBeenCalled();
    const letters = container.getElementsByClassName('letter');
    const revealedLetters = Array.prototype.filter.call(letters,
      (letter) => letter.innerHTML !== '_');
    expect(revealedLetters.length).toBe(0);
  });

  it('pressing enter resets game', () => {
    const { container } = render(<Game />);
    fireEvent.keyDown(container, {
      key: 'Enter',
      code: 13,
      keyCode: 13,
    });
    expect(gameHelpers.randomWord).toHaveBeenCalled();
    expect(gameHelpers.resetRevealedMap).toHaveBeenCalled();
    expect(gameHelpers.resetTries).toHaveBeenCalled();
    const letters = container.getElementsByClassName('letter');
    const revealedLetters = Array.prototype.filter.call(letters,
      (letter) => letter.innerHTML !== '_');
    expect(revealedLetters.length).toBe(0);
  });
});
