/* eslint-disable no-undef */
require('../src/stmnts-06');
/// Function to check if a value is a string
function isString(value) {
  return typeof value === 'string';
}

// Function to check if a string is blank (contains only whitespace characters or is empty)
function isBlank(str) {
  return str === '';
}
// Function to say hello or bye based on a condition
function sayHelloOrBye(name, condition) {
  return condition === 0 ? `Hello ${name}` : `Bye ${name}`;
}

// Function to compare two strings case-insensitively
function compareStrings(str1, str2) {
  return str1 === str2;
}
test('isString', () => {
  expect(isString('hello')).toBe(true);
  expect(isString('1')).toBe(true);
  expect(isString('')).toBe(true);
  expect(isString(1)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});

test('isBlank', () => {
  expect(isBlank('')).toBe(true);
  expect(isBlank(' ')).toBe(false);
  expect(isBlank(32)).toBe(false);
});

test('sayHelloOrBye', () => {
  expect(sayHelloOrBye('Woody', 0)).toBe('Hello Woody');
  expect(sayHelloOrBye('Buzz Lightyear', 1)).toBe('Bye Buzz Lightyear');
});

test('compareStrings', () => {
  expect(compareStrings('hello', 'hello')).toBe(true);
  expect(compareStrings('hello', 'world')).toBe(false);
  expect(compareStrings('hello', 'hello world')).toBe(false);
  expect(compareStrings('Hello', 'hello')).toBe(false);
});
