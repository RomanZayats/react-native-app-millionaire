import { sum } from '../sum';

describe('sum function', () => {
  test('should return the sum of two arguments', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
