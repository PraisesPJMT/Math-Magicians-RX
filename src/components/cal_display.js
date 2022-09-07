import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <span className="display">
    { result }
  </span>
);

Display.propTypes = {
  result: PropTypes.func.isRequired,
};

export default Display;
