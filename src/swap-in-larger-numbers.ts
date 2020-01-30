/**
 * Compare a given number to numbers in a tuple, and return an ordered tuple
 * containing the number if it's larger than either in the original tuple.
 *
 * ```
 * const sample = [1, 2, 3, 4, 5];
 * sample.reduce(getTwoLargestNumbers, sample.slice(0, 2))
 * ```
 * >> [5, 4]
 *
 * Providing an initial 2-number array (`largest`) is required.
 */
export default function swapInLargerNumbers(
  [larger, smaller]: Tuple<number>,
  next: number
): Tuple<number> {
  if (next > smaller) {
    if (next > larger) {
      return [next, larger];
    }
    return [larger, next];
  }
  return [larger, smaller];
}
