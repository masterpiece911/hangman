import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ResetButton from '../reset_button';

describe('ResetButton', () => {
  afterEach(() => {
    cleanup();
  });

  describe('callback', () => {
    it('fires on click', () => {
      const callback = jest.fn();
      const { getByText } = render(<ResetButton onClick={callback} />);

      fireEvent.click(getByText('NEW GAME'));

      expect(callback).toHaveBeenCalled();

    });
  });
});
