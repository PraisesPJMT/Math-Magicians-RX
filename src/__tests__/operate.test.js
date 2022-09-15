import operate from '../logic/operate';

describe('Test on operate operation', () => {
  /* Tests for valid operations */

  test('Test - add 20 and 30 to get 50', () => {
    const sum = operate(20, 30, '+');
    expect(sum).toBe('50');
  });

  test('Test - subtract 20 and 30 to get 50', () => {
    const sum = operate(50, 30, '-');
    expect(sum).toBe('20');
  });

  test('Test - multiply 11 by 4 to get 44', () => {
    const mul = operate(11, 4, '×');
    expect(mul).toBe('44');
  });

  test('Test - divide 66 by 6 to get 11', () => {
    const div = operate(66, 6, '÷');
    expect(div).toBe('11');
  });

  test('Test - 5 modulus 3 to get 2', () => {
    const mod = operate(5, 3, '%');
    expect(mod).toBe('2');
  });

  /* Tests for invalid operations */

  test('Test - divide 7 by 0 to throw error', () => {
    const nullDiv = operate(7, 0, '÷');
    expect(nullDiv).toEqual('Can\'t divide by 0.');
  });

  test('Test 9 mod 0 to throw error', () => {
    const nullDiv = operate(9, 0, '%');
    expect(nullDiv).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
});
