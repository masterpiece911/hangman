import React from 'react';
import { render } from '@testing-library/react';
import Title from '../title';

describe('Title', () => {
  it('renders', () => {
    render(<Title tries={8} isGameFinished={false} />);
  });
});
