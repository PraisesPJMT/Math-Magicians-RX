import calculate from '../logic/calculate';

describe('Test on calculate.js calculate functions', () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

  /* Recognising Input Numbers */

  test('Recognise input of one (1) number', () => {
    calculate(state, 'AC');
    expect(calculate(state, '1').next).toBe('1');
  });

  test('Recognise input of two (2) number', () => {
    calculate(state, 'AC');
    const doubleNumber = calculate(calculate(state, '3'), '6');
    expect(doubleNumber.next).toBe('36');
  });

  /* Test for Operations */

  test('Use the add (+) operator', () => {
    const addOperation = calculate(state, '+');
    expect(addOperation.operation).toBe('+');
  });

  test('Use the subtract (-) operator', () => {
    const subOperation = calculate(state, '-');
    expect(subOperation.operation).toBe('-');
  });

  test('Use the divide (÷) operator', () => {
    const divOperation = calculate(state, '÷');
    expect(divOperation.operation).toBe('÷');
  });

  test('Use the multiplication (x) operator', () => {
    const mulOperation = calculate(state, '×');
    expect(mulOperation.operation).toBe('×');
  });

  test('Use the modulus (%) operator', () => {
    const modOperation = calculate(state, '%');
    expect(modOperation.operation).toBe('%');
  });

  /* Perform AC Operation */

  test('Perform \'AC\' operation', () => {
    const ACOps = calculate(state, 'AC');
    expect(ACOps.next && ACOps.total && ACOps.operation).toBe(null);
  });

  /* Perform +/- Operation */

  test('Perform \'+/-\' operation', () => {
    calculate(state, 'AC');
    const signInversion = calculate(calculate(state, '5'), '+/-');
    expect(signInversion.next).toBe('-5');
  });

  /* Present right result using equal (=) button */

  test('Present right result using equal (=) button', () => {
    calculate(state, 'AC');
    const equal = calculate(calculate(calculate(calculate(state, '5'), '+'), '5'), '=');
    expect(equal.total).toBe('10');
  });

  /* Perform Complete operation */

  test('Perform complete operation (-18 + 6 = -12)', () => {
    calculate(state, 'AC');
    const simulateAddition = calculate(calculate(calculate(calculate(state, '-18'), '+'), '6'), '=');
    expect(simulateAddition.total).toBe('-12');
  });
});
