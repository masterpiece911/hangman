import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatusDiv = styled.div`
  font-family: 'Fira Code';
  width: 90%;
  margin: 1.25vh auto;
  text-align: center;
  font-size: 4vw;
  font-weight: 700;

  @media(max-width: 1200px) {
    width: 100%;
    font-size: 4vw;
    margin: 0.4vh auto;
  }

  @media(max-width: 480px) {
    width: 100%;
    font-size: 6vw;
    margin: 0.4vh auto;
  }
`;

const Status = ({ tries, isGameFinished }) => (
  <StatusDiv>
    {
      // eslint-disable-next-line no-nested-ternary
      isGameFinished ? (tries > 0 ? 'you win! 🎉🎉🎉' : 'game over. you lose. 👎🏽👎🏻👎🏿') : (tries === 1 ? `${tries} attempt remaining.` : `${tries} attempts remaining.`)
  }
  </StatusDiv>
);

Status.propTypes = {
  tries: PropTypes.number.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
};

// module.exports = Status;
export default Status;
