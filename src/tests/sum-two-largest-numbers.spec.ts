import sumTwoLargestNumbers from '..';

it('Sums small arrays: [1, 1]', () => {
  expect(sumTwoLargestNumbers([1, 1])).toBe(2);
});

it('Sums negative and positive numbers properly: [0, -5, 5, 2, 5]', () => {
  expect(sumTwoLargestNumbers([0, -5, 5, 2, 5])).toBe(10);
});

it('Sums negative numbers properly: [-10, -5, -1, -3]', () => {
  expect(sumTwoLargestNumbers([-10, -5, -1, -3])).toBe(-4);
});

it('Fails to sum array with too few values: [5]', () => {
  // @ts-ignore
  expect(() => sumTwoLargestNumbers([5])).toThrowError(TypeError);
});
