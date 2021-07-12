import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LetterSpan = styled.span`
  font-family: "Fira Code";

  border: none;
  background: none;
  position: absolute;
  left: 0;
  right: 0;
  /* padding: 0 0.5vw; */

  font-size: 5vw;

  @media (max-width: 1200px) {
    font-size: 7vw;
  }

  @media (max-width: 480px) {
    font-size: 9vw;
  }

  &.letter-transition-enter {
    opacity: 0;
    transform: translateY(20%);
  }

  &.letter-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease-out;
  }

  &.letter-transition-exit {
    opacity: 1;
  }

  &.letter-transition-exit-active {
    opacity: 0;
    transition: all 0.3s ease-in;
  }
`;

const Letter = ({ isRevealed, value }) => (
  <LetterSpan>{isRevealed ? value : "_"}</LetterSpan>
);

Letter.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

// module.exports = Letter;
export default Letter;
