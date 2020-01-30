import swapInLargerNumbers from './swap-in-larger-numbers';

/**
 * Sums the two largest numbers in an array of numbers.
 */
export default function sumTwoLargestNumbers(
  numbers: ArrayOfTwoOrMore<number>
): number {
  if (numbers.length < 2) {
    throw new TypeError('Expected an Array of 2 numbers or more.');
  }

  const [first, second, ...rest] = numbers;

  return rest
    .reduce(swapInLargerNumbers, [first, second].sort())
    .reduce((a, b) => a + b, 0);
}
