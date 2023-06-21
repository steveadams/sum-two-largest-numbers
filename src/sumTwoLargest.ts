export type TwoOrMoreNumbers = [number, number, ...number[]];

/**
 * Sums the two largest numbers in an array of numbers.
 */
export const sumTwoLargestNumbers = (numbers: TwoOrMoreNumbers): number => {
  let largest: number, secondLargest: number;
  const length = numbers.length;

  if (length < 2) {
    throw new Error('Expected an array with at least 2 elements.');
  }

  // Assign our starting values
  largest = numbers[0];
  secondLargest = numbers[1];

  // Ensure we're starting with largest and secondLargest properly arranged
  if (largest < secondLargest) {
    largest = numbers[1];
    secondLargest = numbers[0];
  }

  // Loop through the numbers
  for (let i = 2; i < length; i++) {
    // If the new number is greater than largest, assign it to largest and
    // pass largest's value to secondLargest.
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    }
    // If the new number isn't greater than largest, check if it's still
    // greater than secondLargest.
    else if (numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }

  return largest + secondLargest;
};

/**
 * Sums the two largest numbers in an array of numbers.
 */
export const sumTwoLargestNumbersSort = (numbers: TwoOrMoreNumbers): number => {
  // Is the array long enough to sum?
  if (numbers.length < 2) {
    throw new TypeError('Expected an array with at least 2 elements.');
  }

  // Sort the array large -> small
  numbers = numbers.sort(function (a, b) {
    return b - a;
  });

  return numbers[0] + numbers[1];
};
