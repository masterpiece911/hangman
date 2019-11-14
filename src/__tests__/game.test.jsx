import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Game } from '../game';
import * as gameHelpers from '../gameHelpers';

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
      const { container } = render(<Game />);
      const statusText = container.getElementsByClassName('status').item(0).innerHTML;

      expect(statusText).toBe('8 attempts remaining.');
    });

    it('shows right amount of hidden letters', () => {
      const word = 'TESTINGTON';
      gameHelpers.randomWord.mockImplementationOnce(() => word);

      const { container } = render(<Game />);
      const letters = container.getElementsByClassName('letter');

      expect(letters.length).toBe(word.length);
    });

    it('has no revealed letters', () => {
      const { container } = render(<Game />);
      const letters = container.getElementsByClassName('letter');
      const revealedLetters = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML !== '_');
      expect(revealedLetters.length).toBe(0);
    });

    it('has no clicked alphabet buttons', () => {
      const { container } = render(<Game />);
      const clickedButtons = container.getElementsByClassName('unclicked');
      expect(clickedButtons.length).toBe(26);
    });

    it('fetched a random word', () => {
      render(<Game />);
      expect(gameHelpers.randomWord).toHaveBeenCalled();
    });
  });

  describe('after a user inputs a letter', () => {
    beforeEach(() => {
      gameHelpers.randomWord.mockImplementationOnce(() => 'TESTINGTON');
    });

    it('reveals letters when a correct letter was clicked', () => {
      const { container, getByText } = render(<Game />);
      let letters;

      fireEvent.click(getByText('T'));
      letters = container.getElementsByClassName('letter');
      const revealedT = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'T');

      expect(revealedT.length).toBe(3);

      fireEvent.click(getByText('G'));
      letters = container.getElementsByClassName('letter');
      const revealedG = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'G');

      expect(revealedG.length).toBe(1);
    });

    it('reveals letters when a correct letter was typed', () => {
      const { container } = render(<Game />);
      let letters;

      fireEvent.keyDown(container, {
        key: 'T',
        code: 84,
        keyCode: 84,
        charCode: 84,
      });
      letters = container.getElementsByClassName('letter');
      const revealedT = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'T');

      expect(revealedT.length).toBe(3);

      fireEvent.keyDown(container, {
        key: 'G',
        code: 71,
        keyCode: 71,
        charCode: 71,
      });
      letters = container.getElementsByClassName('letter');
      const revealedG = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'G');

      expect(revealedG.length).toBe(1);
    });

    it("doesn't reveal letters when an incorrect letter was input", () => {
      const { container, getByText } = render(<Game />);
      let letters;

      fireEvent.keyDown(container, {
        key: 'A',
        code: 65,
        keyCode: 65,
        charCode: 65,
      });
      letters = container.getElementsByClassName('letter');
      const revealedA = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'A');

      expect(revealedA.length).toBe(0);

      fireEvent.click(getByText('B'));
      letters = container.getElementsByClassName('letter');
      const revealedB = Array.prototype.filter.call(letters,
        (letter) => letter.innerHTML === 'B');

      expect(revealedB.length).toBe(0);
    });
  });

  describe('when game is finished', () => {
    const word = 'TESTINGTON';

    beforeEach(() => {
      gameHelpers.gameFinished.mockImplementation(() => true);
      gameHelpers.randomWord.mockImplementation(() => word);
    });

    afterEach(() => {
      cleanup();
    });

    it('typing of further letters changes nothing', () => {
      const { container } = render(<Game />);

      const lettersBefore = container.getElementsByClassName('letter');

      fireEvent.keyDown(container, {
        key: 'A',
        code: 65,
        keyCode: 65,
        charCode: 65,
      });

      const lettersAfter = container.getElementsByClassName('letter');

      expect(lettersBefore).toBe(lettersAfter);
    });

    it('alphabet buttons are hidden', () => {
      const { container } = render(<Game />);
      const alphaButtons = container.getElementsByClassName('alphabetContainer').item(0);

      expect(alphaButtons.style.visibility).toBe('hidden');
      expect(alphaButtons.style.display).toBe('none');
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
