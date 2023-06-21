import { run, bench, group } from 'mitata';

import { TwoOrMoreNumbers, sumTwoLargestNumbers } from './index';

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
  bench('Small arrays', () => sumTwoLargestNumbers(smallArray));
  bench('Medium arrays', () => sumTwoLargestNumbers(mediumArray));
  bench('Large arrays', () => sumTwoLargestNumbers(largeArray));
});

await run();
