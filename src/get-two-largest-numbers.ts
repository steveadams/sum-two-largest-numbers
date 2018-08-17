/**
 * Get the two largest numbers in an array.
 * Suitable for use with Array.prototype.reduce. e.g:
 *
 * ```
 * const sample = [1, 2, 3, 4, 5];
 * sample.reduce(getTwoLargestNumbers, sample.slice(0, 2))
 * ```
 * >> [5, 4]
 *
 * Providing an initial 2-number array (`largest`) is required.
 */
const getTwoLargestNumbers = (largest: Tuple<number>, current: number): Tuple<number> => {
  if (current > largest[0]) {
    return [current, largest[0]];
  } else if (current > largest[1]) {
    return [largest[0], current];
  }

  return largest;
};

export = getTwoLargestNumbers;
