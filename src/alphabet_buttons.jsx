import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LetterButton from './letter_button';

const AlphabetContainer = styled.div`
  margin-top: 1.5vh;

  ul{
    list-style-type: none;;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
  }
  ul li{
    float: left;
  }

  @media (max-width: 1200px) {
    margin-top: 0.7vh;
  }
`;

function AlphabetButtons({
  isGameFinished, revealed, onLetterSelected, word,
}) {
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
    <AlphabetContainer>
      {!isGameFinished
        && <ul>{alphabetItems}</ul>}
    </AlphabetContainer>
  );
}

AlphabetButtons.propTypes = {
  isGameFinished: PropTypes.bool.isRequired,
  revealed: PropTypes.exact(new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => [char, PropTypes.bool]))).isRequired,
  onLetterSelected: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
};

// module.exports = AlphabetButtons;
export default AlphabetButtons;
