import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as HangmanStart } from './svg/hangman.svg';
import { ReactComponent as HangmanWin } from './svg/hangmanWon.svg';
import { ReactComponent as Hangman0 } from './svg/hangman0.svg';
import { ReactComponent as Hangman1 } from './svg/hangman1.svg';
import { ReactComponent as Hangman2 } from './svg/hangman2.svg';
import { ReactComponent as Hangman3 } from './svg/hangman3.svg';
import { ReactComponent as Hangman4 } from './svg/hangman4.svg';
import { ReactComponent as Hangman5 } from './svg/hangman5.svg';
import { ReactComponent as Hangman6 } from './svg/hangman6.svg';
import { ReactComponent as Hangman7 } from './svg/hangman7.svg';
import { ReactComponent as HangmanDead } from './svg/hangmanDead.svg';

const TitleContainer = styled.div`
  font-family: 'Fira Code';

  width: 100%;
  justify-content: center;

  padding: 2rem 0 0 0;
  text-align: center;
  font-size: 6vw;
  font-weight: 900;

  svg{
    width: 8vw;
    height: 8vw;
  }

  @media (max-width: 1200px) {
    padding: 0.5rem 0 0.2rem 0;
    font-size: 6vw;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`;

const Title = ({ tries, isGameFinished, gameStarted }) => {
  const titleA = '==> hangman';
  const titleB = '<==';

  const getHangman = (fTries, fGameFinished) => {
    if (fGameFinished) {
      if (fTries === 0) {
        return <HangmanDead />;
      }
      return <HangmanWin />;
    } if (fTries === 8 && !gameStarted) {
      return <HangmanStart />;
    } if (fTries === 8) {
      return <Hangman0 />;
    } if (fTries === 7) {
      return <Hangman1 />;
    } if (fTries === 6) {
      return <Hangman2 />;
    } if (fTries === 5) {
      return <Hangman3 />;
    } if (fTries === 4) {
      return <Hangman4 />;
    } if (fTries === 3) {
      return <Hangman5 />;
    } if (fTries === 2) {
      return <Hangman6 />;
    } return <Hangman7 />;
  };

  return (
    <TitleContainer>
      {titleA}
      {getHangman(tries, isGameFinished)}
      {titleB}
    </TitleContainer>
  );
};

Title.propTypes = {
  tries: PropTypes.number.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
  gameStarted: PropTypes.bool.isRequired,
};

export default Title;
