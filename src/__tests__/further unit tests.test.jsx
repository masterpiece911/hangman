import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { Game } from '../game';
import * as gameHelpers from '../gameHelpers';
import { alphabet } from '../utils/testHelper';

// THESE TESTS ARE ASSUMED TO BE IN THE '__tests__' DIRECTORY

describe('ALL TESTS', () => {
  beforeEach(() => {
    // spy on gameHelpers
    // NOTE: Ended up not using the spies, but meh.
    jest.spyOn(gameHelpers, 'gameFinished');
    jest.spyOn(gameHelpers, 'resetRevealedMap');
    jest.spyOn(gameHelpers, 'resetTries');
    jest.spyOn(gameHelpers, 'randomWord');
  });

  afterEach(() => {
    // cleanup after each test
    cleanup();
    jest.restoreAllMocks();
  });

  describe('UI-TEST Startbildschirm', () => {
    it('are all alphabet buttons enabled', () => {
      const { getByText } = render(<Game />);
      // iterate through alphabet
      [...alphabet].forEach((letter) => {
        // find button by button text (the letter)
        const letterButton = getByText(letter);
        // check if the button it finds isn't disabled
        expect(letterButton.attributes.getNamedItem('disabled')).toBeFalsy();
      });
    });

    it('has buttons for every alphabet letter', () => {
      const { getByText } = render(<Game />);

      // iterate through alphabet
      [...alphabet].forEach((letter) => {
        // find button by button text
        const letterButton = getByText(letter);
        // check if element it finds is a button
        expect(letterButton.nodeName).toBe('BUTTON');
      });
    });

    it('shows right amount of hidden letters', () => {
      // mock implementation, so I can access the word generated
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { container } = render(<Game />);
      const letters = container.getElementsByClassName('letter');

      expect(letters.length).toBe(word.length);
    });

    it('has eight tries', () => {
      const { container } = render(<Game />);
      // check innerHTML of the first (only) status element
      const statusText = container.getElementsByClassName('status').item(0).innerHTML;

      expect(statusText).toBe('8 attempts remaining.');
    });
  });
  describe('UI-Test Folgebildschirm', () => {
    it('color revealed and unrevealed letter buttons correctly', () => {
      // assuming my css works
      const inWordClicked = 'inWordClicked';
      const notInWordClicked = 'notInWordClicked';
      const unclicked = 'unclicked';
      const rest = ' alphabetButton inter';

      // mock implementation so I can access generated word
      const newWord = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => newWord);
      // list of unique letters in word
      const uniqueLettersInWord = Array.from(new Set([...newWord]));
      // list of letters not in the word
      const lettersNotInWord = [...alphabet].filter(
        (letter) => !uniqueLettersInWord.includes(letter),
      );
      // shuffle both lists, take about half of valid letters
      const validLetters = uniqueLettersInWord.sort(
        () => Math.random() - Math.random(),
      ).slice(0, Math.floor(uniqueLettersInWord.length / 2));
      const invalidLetters = lettersNotInWord.sort(
        () => Math.random() - Math.random(),
      ).slice(0, 4);

      const { getByText, getAllByText } = render(<Game />);

      // click about half the correct letters and some incorrect letters
      validLetters.concat(invalidLetters).forEach((letter) => {
        fireEvent.click(getByText(letter));
      });

      // iterate all buttons and check css class is as expected
      [...alphabet].forEach((letter) => {
        const { className } = getAllByText(letter).filter((el) => el.nodeName === 'BUTTON')[0];

        if (validLetters.includes(letter)) {
          expect(className).toBe(inWordClicked + rest);
        } else if (invalidLetters.includes(letter)) {
          expect(className).toBe(notInWordClicked + rest);
        } else {
          expect(className).toBe(unclicked + rest);
        }
      });
    });
    it('reveals letters correctly', () => {
      // mock implemenation so I can access the generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText, container } = render(
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

      const letters = container.getElementsByClassName('letter');

      // check if the guessed letters have been revealed
      [...word].forEach((letter, index) => {
        if (revealedLetters.includes(letter)) {
          expect(letters[index].innerHTML).toBe(letter);
        } else {
          expect(letters[index].innerHTML).toBe('_');
        }
      });
    });
    it('decreases tries on incorrect guess', () => {
      // mock implementation so I can access generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText, container } = render(<Game />);

      // make a list of letters not in word, and shuffle it
      const uniqueLettersInWord = Array.from(new Set([...word]));
      const lettersNotInWord = [...alphabet].filter(
        (letter) => !uniqueLettersInWord.includes(letter),
      );
      lettersNotInWord.sort(() => Math.random() - Math.random());

      // take eight letters that are not in the word, and guess them
      // check status changes accordingly
      const lettersToClick = lettersNotInWord.slice(0, 8);

      for (let tries = 8; tries > 0; tries -= 1) {
        const statusText = container.getElementsByClassName('status')[0].innerHTML;
        if (tries !== 1) {
          expect(statusText).toBe(`${tries} attempts remaining.`);
        } else {
          expect(statusText).toBe('1 attempt remaining.');
        }
        fireEvent.click(getByText(lettersToClick[8 - tries]));
      }
    });
    it('never decreases tries on correct guess', () => {
      // mock implementation so I can access generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText, container } = render(<Game />);

      // list of letters in the word
      const uniqueLettersInWord = Array.from(new Set([...word]));
      const { length } = uniqueLettersInWord;

      // guess all the correct unique letters in the word
      // check status does not change
      for (let tries = length; tries > 0; tries -= 1) {
        const statusText = container.getElementsByClassName('status')[0].innerHTML;
        expect(statusText).toBe('8 attempts remaining.');
        fireEvent.click(getByText(uniqueLettersInWord[length - tries]));
      }
    });
  });
  describe('UI-Test YOU WON', () => {
    const word = 'TESTINGTON';

    beforeEach(() => {
      // mocking gameFinished conditions and randomWord, so I can
      // force the game to be in GAME WON state
      gameHelpers.gameFinished.mockImplementation(() => true);
      gameHelpers.randomWord.mockImplementation(() => word);
    });

    afterEach(() => {
      // cleanup after each test
      jest.clearAllMocks();
      cleanup();
    });

    it('hides alphabet buttons', () => {
      const { container } = render(<Game />);
      const alphaButtons = container.getElementsByClassName('alphabetContainer').item(0);

      // check if the css of the alphabetcontainer has styles
      // so the elment doesn't show
      // A FUTURE IMPLEMENTATION OF THE ALPHABETCONTAINER
      // SHOULD JUST CHOOSE NOT TO RENDER THE ITEM.
      expect(alphaButtons.style.visibility).toBe('hidden');
      expect(alphaButtons.style.display).toBe('none');
    });

    it('shows you won in status', () => {
      const { container } = render(<Game />);
      const statusText = container.getElementsByClassName('status')[0].innerHTML;
      expect(statusText).toBe('you win! 🎉🎉🎉');
    });

    it('reset button is available', () => {
      const { getByText } = render(<Game />);
      const newGameButton = getByText('NEW GAME');
      expect(newGameButton.attributes.getNamedItem('disabled')).toBeFalsy();
      expect(newGameButton.nodeName).toBe('BUTTON');
    });
  });
  describe('UI-Test GAME OVER', () => {
    afterEach(() => {
      cleanup();
    });

    it('hides alphabet buttons', () => {
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
      const alphaButtons = container.getElementsByClassName('alphabetContainer').item(0);

      expect(alphaButtons.style.visibility).toBe('hidden');
      expect(alphaButtons.style.display).toBe('none');
    });

    it('shows you lose in status', () => {
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

      // check status displays correct message
      const statusText = container.getElementsByClassName('status')[0].innerHTML;
      expect(statusText).toBe('game over. you lose. 👎🏽👎🏻👎🏿');
    });

    it('reset button is available', () => {
      // mock implementation so I can access generated word
      const word = gameHelpers.randomWord();
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { getByText } = render(<Game />);

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

      // check if the new game button exists and isn't disabled
      const newGameButton = getByText('NEW GAME');
      expect(newGameButton.attributes.getNamedItem('disabled')).toBeFalsy();
      expect(newGameButton.nodeName).toBe('BUTTON');
    });
  });
});
