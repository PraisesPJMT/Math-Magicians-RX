import React from 'react';
import PropTypes from 'prop-types';

const Numbers = ({ eventOperations }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberButtons = numbers.map((number, index) => (
    <React.Fragment key={number}>
      <button
        type="button"
        className={`number light number-${index}`}
        onClick={eventOperations}
      >
        { number }
      </button>
    </React.Fragment>
  ));
  return (
    <>
      { numberButtons }
    </>
  );
};

Numbers.propTypes = {
  eventOperations: PropTypes.func.isRequired,
};

export default Numbers;
