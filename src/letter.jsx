import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LetterSpan = styled.span`
  font-family: 'Fira Code';

  border: none;
  background: none;
  padding: 0 0.5vw;

  font-size: 5vw;

  @media(max-width: 1200px) {
    font-size: 7vw;
  }

  @media(max-width: 480px) {
    font-size: 9vw;
  }
`;

const Letter = ({ isRevealed, value }) => (
  <LetterSpan>
    {isRevealed ? value : '_'}
  </LetterSpan>
);

Letter.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

// module.exports = Letter;
export default Letter;
