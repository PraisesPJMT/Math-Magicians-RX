import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './cal_display';
import Numbers from './cal_numbers';
import Operators from './cal_operators';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const calculatorDisplay = () => {
    const { total, next, operation } = state;
    if (next === null && total === null) {
      return 0;
    }
    return `${total || ''} ${operation || ''} ${next || ''}`;
  };

  const eventOperations = (button) => {
    const {
      target: {
        textContent: buttonName,
      },
    } = button;
    setState((state) => (
      calculate(state, buttonName)
    ));
  };

  return (
    <div className="calculator">
      <Display result={calculatorDisplay} />
      <Numbers eventOperations={eventOperations} />
      <Operators eventOperations={eventOperations} />
    </div>
  );
};

export default Calculator;
