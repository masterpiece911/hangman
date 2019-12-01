import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Inter';
  height: 1.5em;
  width: 1.5em;
  border: 0.6vw solid;
  margin: 0.3vw;
  font-weight: 900;
  padding: 0;
  font-size: 3.4vw;
  text-align: center;
  transition-duration: 0.5s;

  &:focus {
    outline:0;
  }
  
  ${(props) => !props.isClicked && css`
  border-color: black;
  background: none;
  color: black;
  
  &:hover {
    color: white;
    background: black;
    border-color: transparent;
    transition-duration: 0.2s;
  }
  `}
  
  ${(props) => props.isClicked && props.letterInWord && css`
  border-color: transparent;
  background: green;
  color: white;
  `}
  
  ${(props) => props.isClicked && !props.letterInWord && css`
  border-color: transparent;
  background: red;
  color: white;
  `}

  @media(max-width: 1200px) {
    border: 0.9vw solid black;
    ${(props) => props.isClicked && css`
    border-color: transparent;
    `}
    margin: 0.45vw;
    font-size: 5vw;
  }
  @media(max-width: 480px) {
    border: 1.6vw solid black;
    ${(props) => props.isClicked && css`
    border-color: transparent;
    `}
    margin: 0.8vw;
    font-size: 9vw;
  }
`;

const LetterButton = ({
  isClicked, onClick, letterInWord, letter,
}) => (
  <Button
    type="button"
    isClicked={isClicked}
    letterInWord={letterInWord}
    onClick={onClick}
    title="you can also type a letter on your keyboard"
  >
    {letter}
  </Button>
);

LetterButton.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  letterInWord: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
};

// module.exports = LetterButton;
export default LetterButton;
