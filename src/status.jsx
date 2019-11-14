import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ tries, isGameFinished }) => (
  <div className="statusContainer fira status">
    {
      // eslint-disable-next-line no-nested-ternary
      isGameFinished ? (tries > 0 ? 'you win! 🎉🎉🎉' : 'game over. you lose. 👎🏽👎🏻👎🏿') : (tries === 1 ? `${tries} attempt remaining.` : `${tries} attempts remaining.`)
  }
  </div>
);

Status.propTypes = {
  tries: PropTypes.number.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
};

// module.exports = Status;
export default Status;
