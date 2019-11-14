import React from 'react';
import PropTypes from 'prop-types';

const LetterButton = ({
  isClicked, onClick, letterInWord, letter,
}) => (
  <button
    type="button"
    // eslint-disable-next-line no-nested-ternary
    className={isClicked ? (letterInWord ? 'inWordClicked alphabetButton inter' : 'notInWordClicked alphabetButton inter') : 'unclicked alphabetButton inter'}
    onClick={onClick}
    title="you can also type a letter on your keyboard"
  >
    {letter}
  </button>
);

LetterButton.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  letterInWord: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
};

// module.exports = LetterButton;
export default LetterButton;
