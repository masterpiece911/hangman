import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 1.5vw 0;
`;

const Button = styled.button`
  font-family: 'Inter';
  width: 100%;
  background: #00000022;
  color: black;
  border: none;
  font-size: 2.7vw;
  font-weight: 900;
  transition: 5s;
  transition-timing-function: ease;
  transition-property: background, color;

  &:focus{
    outline:0;
  }

  &:hover{
    background: #000000cc;
    color: white;
    transition: 0.4s;
    transition-property: background, color;
  }

  @media(max-width: 1200px) {
    font-size: 4vw;
  }
  @media(max-width: 480px) {
    font-size: 8vw;
  }
`;


const ResetButton = ({ onClick }) => (
  <ButtonContainer>
    <Button
      title="you can also press enter key to restart"
      onClick={onClick}
      type="button"
    >
      NEW GAME
    </Button>
  </ButtonContainer>
);

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// module.exports = ResetButton;
export default ResetButton;
