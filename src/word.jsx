import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Letter from './letter';

const LetterList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;

  li {
    float: left;
  }
`;

function Word({ word, revealed, isGameFinished }) {
  const wordItems = [...word].map((char, inx) => (
    <li key={`${char + inx}`}>
      <Letter
        isRevealed={isGameFinished || revealed.get(char)}
        value={char}
      />
    </li>
  ));

  return (
    <LetterList>{wordItems}</LetterList>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  revealed: PropTypes.exact(new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => [char, PropTypes.bool]))).isRequired,
  isGameFinished: PropTypes.bool.isRequired,
};

export default Word;
