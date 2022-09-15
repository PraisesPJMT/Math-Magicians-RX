import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

require('@testing-library/jest-dom');

describe('Tests for Calculator component', () => {
  test('Renders the Calculator component', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  test('Simulate user pressing numbers to display right numbers', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const number4 = screen.getByRole('button', { name: '4' });
    const number0 = screen.getByRole('button', { name: '0' });
    const number1 = screen.getByRole('button', { name: '1' });
    fireEvent.click(number4);
    fireEvent.click(number0);
    fireEvent.click(number1);
    fireEvent.click(number0);
    expect(calculatorDisplay.textContent).toBe('  4010');
  });

  /* User performing pressing operations */

  test('Simulate user pressing the plus operator to display \'+\'', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusOp);
    expect(calculatorDisplay.textContent).toBe(' + ');
  });

  test('Simulate user pressing the minus operator to display \'-\'', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '-' });
    fireEvent.click(plusOp);
    expect(calculatorDisplay.textContent).toBe(' - ');
  });

  test('Simulate user pressing the multiply operator to display \'×\'', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '×' });
    fireEvent.click(plusOp);
    expect(calculatorDisplay.textContent).toBe(' × ');
  });

  test('Simulate user pressing the divide operator to display \'÷\'', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '÷' });
    fireEvent.click(plusOp);
    expect(calculatorDisplay.textContent).toBe(' ÷ ');
  });

  test('Simulate user pressing the modulus operator to display \'%\'', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '%' });
    fireEvent.click(plusOp);
    expect(calculatorDisplay.textContent).toBe(' % ');
  });

  /* User performing valid operations */

  test('Simulate user performing addition (2 + 7)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const plusOp = screen.getByRole('button', { name: '+' });
    const number2 = screen.getByRole('button', { name: '2' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number2);
    fireEvent.click(plusOp);
    fireEvent.click(number7);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('9  ');
  });

  test('Simulate user performing subtraction (2 - 7)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const minusOp = screen.getByRole('button', { name: '-' });
    const number2 = screen.getByRole('button', { name: '2' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number2);
    fireEvent.click(minusOp);
    fireEvent.click(number7);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('-5  ');
  });

  test('Simulate user performing multiplication (2 × 7)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const multOp = screen.getByRole('button', { name: '×' });
    const number2 = screen.getByRole('button', { name: '2' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number2);
    fireEvent.click(multOp);
    fireEvent.click(number7);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('14  ');
  });

  test('Simulate user performing division (14 ÷ 7)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const divOp = screen.getByRole('button', { name: '÷' });
    const number1 = screen.getByRole('button', { name: '1' });
    const number4 = screen.getByRole('button', { name: '4' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number1);
    fireEvent.click(number4);
    fireEvent.click(divOp);
    fireEvent.click(number7);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('2  ');
  });

  test('Simulate user performing modulus (7 % 2)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const modOp = screen.getByRole('button', { name: '%' });
    const number2 = screen.getByRole('button', { name: '2' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number7);
    fireEvent.click(modOp);
    fireEvent.click(number2);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('1  ');
  });

  /* User performing invalid operations */

  test('Simulate user performing invalid division (14 ÷ 0)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const divOp = screen.getByRole('button', { name: '÷' });
    const number1 = screen.getByRole('button', { name: '1' });
    const number4 = screen.getByRole('button', { name: '4' });
    const number0 = screen.getByRole('button', { name: '0' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number1);
    fireEvent.click(number4);
    fireEvent.click(divOp);
    fireEvent.click(number0);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('Can\'t divide by 0.  ');
  });

  test('Simulate user performing invalid modulus (7 % 0)', () => {
    render(<Calculator />);
    const calculatorDisplay = document.querySelector('.display');
    const modOp = screen.getByRole('button', { name: '%' });
    const number0 = screen.getByRole('button', { name: '0' });
    const number7 = screen.getByRole('button', { name: '7' });
    const equal = screen.getByRole('button', { name: '=' });
    fireEvent.click(number7);
    fireEvent.click(modOp);
    fireEvent.click(number0);
    fireEvent.click(equal);
    expect(calculatorDisplay.textContent).toBe('Can\'t find modulo as can\'t divide by 0.  ');
  });
});
