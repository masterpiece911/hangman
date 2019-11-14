import * as GameHelpers from '../gameHelpers';

describe('GameHelpers', () => {
  describe('resetTries', () => {
    it('returns 8', () => {
      expect(GameHelpers.resetTries()).toBe(8);
    });
    it('returns a number', () => {
      expect(typeof GameHelpers.resetTries()).toBe('number');
    });
  });
  describe('randomWord', () => {
    it('returns a string', () => {
      expect(typeof GameHelpers.randomWord()).toBe('string');
    });
    it('returns a string of length >= 5', () => {
      expect(GameHelpers.randomWord().length >= 5).toBeTruthy();
    });
  });
  describe('resetRevealedMap', () => {
    it('returns type map', () => {
      expect(typeof GameHelpers.resetRevealedMap()).toBe('object');
    });
    it('returns a map of booleans', () => {
      let foundNonBoolean = false;

      for (let index = 0; index < GameHelpers.resetRevealedMap().values.length; index += 1) {
        const element = GameHelpers.resetRevealedMap().values[index];
        if (typeof element[1] !== 'boolean') {
          foundNonBoolean = true;
          break;
        }
      }
      expect(foundNonBoolean).not.toBeTruthy();
    });
    it('returns a map of false booleans', () => {
      let foundNonFalse = false;
      for (let index = 0; index < GameHelpers.resetRevealedMap().values.length; index += 1) {
        const element = GameHelpers.resetRevealedMap().values[index];
        if (!element) {
          foundNonFalse = true;
          break;
        }
      }
      expect(foundNonFalse).not.toBeTruthy();
    });
  });
  describe('gameFinished', () => {
    it('returns true if turns == 0', () => {
      expect(GameHelpers.gameFinished(0, [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'])).toBeTruthy();
      expect(GameHelpers.gameFinished(0, [])).toBeTruthy();
      expect(GameHelpers.gameFinished(0, ['a'])).toBeTruthy();
    });
    it('returns true if letters array empty', () => {
      expect(GameHelpers.gameFinished(1, [])).toBeTruthy();
      expect(GameHelpers.gameFinished(0, [])).toBeTruthy();
      expect(GameHelpers.gameFinished(2000, [])).toBeTruthy();
    });
    it('returns false otherwise', () => {
      expect(GameHelpers.gameFinished(1, ['a'])).not.toBeTruthy();
      expect(GameHelpers.gameFinished(8, [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'])).not.toBeTruthy();
    });
  });
});
