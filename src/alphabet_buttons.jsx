import React from 'react';
import PropTypes from 'prop-types';
import LetterButton from './letter_button';

function AlphabetButtons({ revealed, onLetterSelected, word }) {
  const alphabetItems = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => (
    <li key={char}>
      <LetterButton
        isClicked={revealed.get(char)}
        onClick={() => onLetterSelected(char)}
        letter={char}
        letterInWord={word.includes(char)}
      />
    </li>
  ));

  return (
    <ul>{alphabetItems}</ul>
  );
}

AlphabetButtons.propTypes = {
  revealed: PropTypes.exact(new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => [char, PropTypes.bool]))).isRequired,
  onLetterSelected: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
};

// module.exports = AlphabetButtons;
export default AlphabetButtons;
