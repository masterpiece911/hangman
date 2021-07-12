import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Letter from "./letter";
import { hasRevealedLetter } from "./gameHelpers";

const LetterList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto 0.2vw;
`;

const LetterWrapper = styled.li`
  float: left;
  width: 4vw;
  height: 6vw;
  position: relative;
  text-align: center;

  @media (max-width: 1200px) {
    width: ${28 / 5}vw;
    height: ${42 / 5}vw;
  }

  @media (max-width: 480px) {
    width: ${36 / 5}vw;
    height: ${54 / 5}vw;
  }
`;

function Word({ word, revealed, isGameFinished }) {
  const lettersRevealed = hasRevealedLetter(revealed);

  const wordItems = [...word].map((char, inx) => (
    <TransitionGroup
      timeout={300}
      component={LetterWrapper}
      key={`${word + char + inx}`}
    >
      <CSSTransition
        key={`${word + char + inx}-${
          revealed.get(char) ? "revealed" : "hidden"
        }`}
        enter={lettersRevealed}
        exit={lettersRevealed}
        classNames="letter-transition"
        timeout={300}
      >
        <Letter
          isRevealed={isGameFinished || revealed.get(char)}
          value={char}
        />
      </CSSTransition>
    </TransitionGroup>
  ));

  return <LetterList>{wordItems}</LetterList>;
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  revealed: PropTypes.exact(
    new Map(
      [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((char) => [char, PropTypes.bool])
    )
  ).isRequired,
  isGameFinished: PropTypes.bool.isRequired,
};

export default Word;
