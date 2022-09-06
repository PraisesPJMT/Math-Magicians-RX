import React from 'react';

const Numbers = () => (
  <>
    <span className="number light number-0">
      0
    </span>
    <span className="number light number-1">
      1
    </span>
    <span className="number light number-2">
      2
    </span>
    <span className="number light number-3">
      3
    </span>
    <span className="number light number-4">
      4
    </span>
    <span className="number light number-5">
      5
    </span>
    <span className="number light number-6">
      6
    </span>
    <span className="number light number-7">
      7
    </span>
    <span className="number light number-8">
      8
    </span>
    <span className="number light number-9">
      9
    </span>
  </>
);

const Operators = () => (
  <>
    <span className="operator orange plus">
      +
    </span>
    <span className="operator orange minus">
      &minus;
    </span>
    <span className="operator orange divide">
      &divide;
    </span>
    <span className="operator orange times">
      &times;
    </span>
    <span className="operator orange equal">
      =
    </span>
    <span className="operator light modulus">
      %
    </span>
    <span className="operator light plus-minus">
      +/&minus;
    </span>
  </>
);

const SpecialOperators = () => (
  <>
    <span className="display">
      0
    </span>
    <span className="operator light dot">
      .
    </span>
    <span className="operator light clear">
      AC
    </span>
  </>
);

const Calculator = () => (
  <div className="calculator">
    <SpecialOperators />
    <Numbers />
    <Operators />
  </div>
);

export default Calculator;
