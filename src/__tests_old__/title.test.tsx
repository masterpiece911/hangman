import React from 'react';
import { render } from '@testing-library/react';
import Title from '../title';

describe('Title', () => {
  it('renders', () => {
    render(<Title gameStarted tries={8} isGameFinished={false} />);
  });
});
