import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ isRevealed, value }) => (
  <span
    className="letter fira"
  >
    {isRevealed ? value : '_'}
  </span>
);

Letter.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

// module.exports = Letter;
export default Letter;
