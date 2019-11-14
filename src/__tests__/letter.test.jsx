import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Letter from '../letter';

describe('Letter', () => {
  afterEach(() => {
    cleanup();
  });

  describe('renders', () => {
    it('a letter when it was revealed', () => {
      const { container } = render(<Letter isRevealed value="A" />);

      expect(container.firstChild.innerHTML).toBe('A');
      expect(container.firstChild.innerHTML).not.toBe('_');
    });
    it('an underscore if it was not revealed', () => {
      const { container } = render(<Letter isRevealed={false} value="A" />);

      expect(container.firstChild.innerHTML).toBe('_');
      expect(container.firstChild.innerHTML).not.toBe('A');
    });
  });
});
