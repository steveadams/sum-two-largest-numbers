import { run, bench, group } from 'mitata';

import {
  TwoOrMoreNumbers,
  sumTwoLargestNumbers,
  sumTwoLargestNumbersSort,
} from './index';

const randomNumber = () => Math.floor(Math.random() * 40);
const makeArrayOfLength = (length: number): TwoOrMoreNumbers => [
  1,
  2,
  ...Array.from({ length }, randomNumber),
];

const smallArray = makeArrayOfLength(3);
const mediumArray = makeArrayOfLength(100);
const largeArray = makeArrayOfLength(1000);

group('sumTwoLargestNumbers: Small arrays', () => {
  bench('for loop', () => sumTwoLargestNumbers(smallArray));
  bench('sort and pick', () => sumTwoLargestNumbersSort(smallArray));
});

group('sumTwoLargestNumbers: Medium arrays', () => {
  bench('for loop', () => sumTwoLargestNumbers(mediumArray));
  bench('sort and pick', () => sumTwoLargestNumbersSort(mediumArray));
});

group('sumTwoLargestNumbers: Large arrays', () => {
  bench('for loop', () => sumTwoLargestNumbers(largeArray));
  bench('sort and pick', () => sumTwoLargestNumbersSort(largeArray));
});

await run();
