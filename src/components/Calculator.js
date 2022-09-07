import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.eventOperations = this.eventOperations.bind(this);
  }

  get display() {
    const { total, next, operation } = this.state;
    if (next === null && total === null) {
      return 0;
    }
    return `${total || ''} ${operation || ''} ${next || ''}`;
  }

  eventOperations(button) {
    const {
      target: {
        textContent: buttonName,
      },
    } = button;
    this.setState((state) => (
      calculate(state, buttonName)
    ));
  }

  render() {
    return (
      <div className="calculator">
        <button
          type="button"
          className="number light number-0"
          onClick={this.eventOperations}
        >
          0
        </button>
        <button
          type="button"
          className="number light number-1"
          onClick={this.eventOperations}
        >
          1
        </button>
        <button
          type="button"
          className="number light number-2"
          onClick={this.eventOperations}
        >
          2
        </button>
        <button
          type="button"
          className="number light number-3"
          onClick={this.eventOperations}
        >
          3
        </button>
        <button
          type="button"
          className="number light number-4"
          onClick={this.eventOperations}
        >
          4
        </button>
        <button
          type="button"
          className="number light number-5"
          onClick={this.eventOperations}
        >
          5
        </button>
        <button
          type="button"
          className="number light number-6"
          onClick={this.eventOperations}
        >
          6
        </button>
        <button
          type="button"
          className="number light number-7"
          onClick={this.eventOperations}
        >
          7
        </button>
        <button
          type="button"
          className="number light number-8"
          onClick={this.eventOperations}
        >
          8
        </button>
        <button
          type="button"
          className="number light number-9"
          onClick={this.eventOperations}
        >
          9
        </button>
        <button
          type="button"
          className="operator orange plus"
          onClick={this.eventOperations}
        >
          +
        </button>
        <button
          type="button"
          className="operator orange minus"
          onClick={this.eventOperations}
        >
          -
        </button>
        <button
          type="button"
          className="operator orange divide"
          onClick={this.eventOperations}
        >
          ÷
        </button>
        <button
          type="button"
          className="operator orange times"
          onClick={this.eventOperations}
        >
          x
        </button>
        <button
          type="button"
          className="operator orange equal"
          onClick={this.eventOperations}
        >
          =
        </button>
        <button
          type="button"
          className="operator light modulus"
          onClick={this.eventOperations}
        >
          %
        </button>
        <button
          type="button"
          className="operator light plus-minus"
          onClick={this.eventOperations}
        >
          +/-
        </button>
        <span className="display">
          { this.display }
        </span>
        <button
          type="button"
          className="operator light dot"
          onClick={this.eventOperations}
        >
          .
        </button>
        <button
          type="button"
          className="operator light clear"
          onClick={this.eventOperations}
        >
          AC
        </button>
      </div>
    );
  }
}

export default Calculator;
