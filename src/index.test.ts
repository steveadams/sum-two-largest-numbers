import { describe, it } from 'vitest';

import { sumTwoLargestNumbers, sumTwoLargestNumbersSort } from './index';

describe('sumTwoLargestNumbers', () => {
  it('Fails to sum array with too few values', ({ expect }) => {
    // @ts-expect-error - Testing error handling
    expect(() => sumTwoLargestNumbers([5])).toThrowError(Error);
    // @ts-expect-error - Testing error handling
    expect(() => sumTwoLargestNumbersSort([5])).toThrowError(Error);
  });

  it('Sums small arrays', ({ expect }) => {
    expect(sumTwoLargestNumbers([1, 1])).toBe(2);
    expect(sumTwoLargestNumbersSort([1, 1])).toBe(2);
  });

  it('Sums negative and positive numbers properly', ({ expect }) => {
    expect(sumTwoLargestNumbers([0, -5, 5, 2, 5])).toBe(10);
    expect(sumTwoLargestNumbersSort([0, -5, 5, 2, 5])).toBe(10);
  });

  it('Sums negative numbers properly', ({ expect }) => {
    expect(sumTwoLargestNumbers([-10, -5, -1, -3])).toBe(-4);
    expect(sumTwoLargestNumbersSort([-10, -5, -1, -3])).toBe(-4);
  });
});
