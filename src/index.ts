import getTwoLargestNumbers from './get-two-largest-numbers';
import sum from './sum';

const numberToSum = 2;

/**
 * Sums the two largest numbers in an array of numbers.
 */
const sumTwoLargestNumbers = (numbers: ArrayOfTwoOrMore<number>): number => {
  const initialNumbers = numbers.slice(0, numberToSum) as Tuple<number>;
  const restOfNumbers = numbers.slice(numberToSum);

  return restOfNumbers
    .reduce(getTwoLargestNumbers, initialNumbers)
    .reduce(sum, 0);
};

export default sumTwoLargestNumbers;
