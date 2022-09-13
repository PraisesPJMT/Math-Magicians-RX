import React from 'react';
import Calculator from '../components/Calculator';
import MathIcon from '../assets/calculator.png';
import './styles/Calculator_Page.css';

const CalculatorPage = () => (
  <div className="calculator-page">
    <div className="math-info">
      <h2 className="subtitle">
        Let&apos;s do some math!
      </h2>
      <img
        className="math-icon"
        src={MathIcon}
        alt="Math Icon"
      />
    </div>
    <Calculator />
  </div>
);

export default CalculatorPage;
