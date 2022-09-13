import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Numbers from './cal_numbers';
import Operators from './cal_operators';
import './styles/Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;

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
      <span className="display">
        { (next === null && total === null) ? 0 : `${total || ''} ${operation || ''} ${next || ''}` }
      </span>
      <Numbers eventOperations={eventOperations} />
      <Operators eventOperations={eventOperations} />
    </div>
  );
};

export default Calculator;
