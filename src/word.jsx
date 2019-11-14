import React from 'react';
import PropTypes from 'prop-types';
import Letter from './letter';

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
    <ul>{wordItems}</ul>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  revealed: PropTypes.exact(new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => [char, PropTypes.bool]))).isRequired,
  isGameFinished: PropTypes.bool.isRequired,
};

export default Word;
