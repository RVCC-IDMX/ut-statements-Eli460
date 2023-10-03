/* eslint-disable no-undef */
require('../src/stmnts-05');

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

// Function to check if a number is negative
function isNegative(number) {
  return number < 0;
}

test('isEven', () => {
  expect(isEven(32)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(-1)).toBe(false);
});

test('isOdd', () => {
  expect(isOdd(13)).toBe(true);
  expect(isOdd(0)).toBe(false);
  expect(isOdd(1)).toBe(true);
  expect(isOdd(-1)).toBe(true);
});

test('isNegative', () => {
  expect(isNegative(-1)).toBe(true);
  expect(isNegative(-100.5)).toBe(true);
  expect(isNegative(0)).toBe(false);
  expect(isNegative(1)).toBe(false);
  expect(isNegative(32)).toBe(false);
});
