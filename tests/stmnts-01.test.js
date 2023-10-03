/* eslint-disable no-undef */
require('../src/stmnts-01');

function nextInteger(num) {
  // Add 1 to the input number to get the next integer.
  return num + 1;
}
function times(a, b) {
  return a * b;
}
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
function convertHoursToSeconds(hours) {
  return hours * 3600;
}

test('nextInteger', () => {
  expect(nextInteger(1)).toBe(2);
  expect(nextInteger(2)).toBe(3);
  expect(nextInteger(13)).toBe(14);
  expect(nextInteger(-14)).toBe(-13);
});

test('times', () => {
  expect(times(2, 3)).toBe(6);
  expect(times(3, 3)).toBe(9);
  expect(times(0, 3)).toBe(0);
  expect(times(-5, 4)).toBe(-20);
});

test('convertMinutesToSeconds', () => {
  expect(convertMinutesToSeconds(1)).toBe(60);
  expect(convertMinutesToSeconds(2)).toBe(120);
  expect(convertMinutesToSeconds(1.5)).toBe(90);
  expect(convertMinutesToSeconds(0)).toBe(0);
  //
  expect(convertMinutesToSeconds(2.13456)).toBeTypeOf('number');
  expect(convertMinutesToSeconds(2.13456)).toBeCloseTo(128.0736, 4);
});

test('convertHoursToSeconds', () => {
  expect(convertHoursToSeconds(1)).toBe(3600);
  expect(convertHoursToSeconds(2)).toBe(7200);
  expect(convertHoursToSeconds(1.5)).toBe(5400);
  expect(convertHoursToSeconds(0)).toBe(0);
});
