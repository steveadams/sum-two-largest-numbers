import * as getTwoLargestNumbers from './get-two-largest-numbers';
import * as sum from './sum';

const numberToSum = 2;

/**
 * Sums the two largest numbers in an array of numbers.
 */
const sumTwoLargestNumbers = (numbers: ArrayOfTwoOrMore<number>): number => {
  const firstNumbers = numbers
    .slice(0, numberToSum)
    .sort((a: number, b: number) => b - a) as Tuple<number>;
  const restOfNumbers = numbers.slice(numberToSum);

  return restOfNumbers
    .reduce(getTwoLargestNumbers, firstNumbers)
    .reduce(sum, 0);
};

export = sumTwoLargestNumbers;
