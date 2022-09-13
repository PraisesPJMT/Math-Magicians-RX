import React from 'react';
import PropTypes from 'prop-types';

const Operators = ({ eventOperations }) => {
  const operators = [
    {
      value: '+', color: 'orange', name: 'plus', key: 1,
    },
    {
      value: '-', color: 'orange', name: 'minus', key: 2,
    },
    {
      value: '÷', color: 'orange', name: 'divide', key: 3,
    },
    {
      value: '×', color: 'orange', name: 'times', key: 4,
    },
    {
      value: '=', color: 'orange', name: 'equal', key: 5,
    },
    {
      value: '%', color: 'light', name: 'modulus', key: 6,
    },
    {
      value: '+/-', color: 'light', name: 'plus-minus', key: 7,
    },
    {
      value: '.', color: 'light', name: 'dot', key: 8,
    },
    {
      value: 'AC', color: 'light', name: 'clear', key: 9,
    },
  ];
  const operatorButtons = operators.map((operator) => (
    <React.Fragment key={operator.key}>
      <button
        type="button"
        className={`operator ${operator.color} ${operator.name}`}
        onClick={eventOperations}
      >
        { operator.value }
      </button>
    </React.Fragment>
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
