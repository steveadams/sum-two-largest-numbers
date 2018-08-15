import getTwoLargestNumbers from './get-two-largest-numbers';
import sum from './sum';

/**
 * Sums the two largest numbers in an array of numbers.
 */
const sumTwoLargestNumbers = (numbers: ArrayOfTwoOrMore<number>): number => {
  const initialNumbers = [numbers[0], numbers[1]] as [number, number];
  const restOfNumbers = numbers.slice(2);

  return restOfNumbers
    .reduce(getTwoLargestNumbers, initialNumbers)
    .reduce(sum, 0);
};

export default sumTwoLargestNumbers;
