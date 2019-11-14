import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ onClick }) => (
  <button
    title="you can also press enter key to restart"
    className="resetButton inter"
    onClick={onClick}
    type="button"
  >
            NEW GAME
  </button>
);

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// module.exports = ResetButton;
export default ResetButton;
