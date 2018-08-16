import getTwoLargestNumbers from './get-two-largest-numbers';
import sum from './sum';

const numberToSum = 2;

/**
 * Sums the two largest numbers in an array of numbers.
 */
const sumTwoLargestNumbers = (numbers: ArrayOfTwoOrMore<number>): number => {
  const firstNumbers = numbers.slice(0, numberToSum);
  const sortedFirstNumbers = [
    Math.max(...firstNumbers),
    Math.min(...firstNumbers),
  ] as Tuple<number>;
  const restOfNumbers = numbers.slice(numberToSum);

  return restOfNumbers
    .reduce(getTwoLargestNumbers, sortedFirstNumbers)
    .reduce(sum, 0);
};

export default sumTwoLargestNumbers;
