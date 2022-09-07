import React from 'react';
import PropTypes from 'prop-types';

const Operators = ({ eventOperations }) => {
  const operators = [
    { value: '+', color: 'orange', name: 'plus' },
    { value: '-', color: 'orange', name: 'minus' },
    { value: '÷', color: 'orange', name: 'divide' },
    { value: 'x', color: 'orange', name: 'times' },
    { value: '=', color: 'orange', name: 'equal' },
    { value: '%', color: 'light', name: 'modulus' },
    { value: '+/-', color: 'light', name: 'plus-minus' },
    { value: '.', color: 'light', name: 'dot' },
    { value: 'AC', color: 'light', name: 'clear' },
  ];
  const operatorButtons = operators.map((operator) => (
    <>
      <button
        type="button"
        className={`operator ${operator.color} ${operator.name}`}
        onClick={eventOperations}
      >
        { operator.value }
      </button>
    </>
  ));
  return (
    <>
      { operatorButtons }
    </>
  );
};

Operators.propTypes = {
  eventOperations: PropTypes.func.isRequired,
};

export default Operators;
