import React from 'react';
import calculate from '../logic/calculate';
import Display from './cal_display';
import Numbers from './cal_numbers';
import Operators from './cal_operators';

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

  get calculatorDisplay() {
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
        <Display result={this.calculatorDisplay} />
        <Numbers eventOperations={this.eventOperations} />
        <Operators eventOperations={this.eventOperations} />
      </div>
    );
  }
}

export default Calculator;
