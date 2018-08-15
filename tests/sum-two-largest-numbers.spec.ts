/* tslint:disable:no-magic-numbers */

import sumTwoLargestNumbers from '../src/sum-two-largest-numbers';

it('Sums small arrays: [1, 1]', () => {
  expect(sumTwoLargestNumbers([1, 1])).toBe(2);
});

it('Sums longer arrays: [1, 4, 15, 13, 20]', () => {
  expect(sumTwoLargestNumbers([1, 4, 15, 13, 20])).toBe(35);
});

it('Sums negative and positive numbers properly: [0, -5, 5, 2, 5]', () => {
  expect(sumTwoLargestNumbers([0, -5, 5, 2, 5])).toBe(10);
});

it('Sums negative numbers properly: [-10, -5, -1, -3]', () => {
  expect(sumTwoLargestNumbers([-10, -5, -1, -3])).toBe(-4);
});

it('Fails to sum [5]', () => {
  try {
    // Defining [5] as any to silence "not assignable to ... 'ArrayOfTwoOrMore<number>'"
    sumTwoLargestNumbers([5] as any);
  } catch (error) {
    expect(error.message).toMatch(/1 given/);
  }
});
