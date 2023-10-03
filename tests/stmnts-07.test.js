/* eslint-disable no-undef */
require('../src/stmnts-07');
// Function to perform logical AND operation
function logicalAnd(a, b) {
  return a && b;
}

// Function to perform logical OR operation
function logicalOr(a, b) {
  return a || b;
}

// Function to invert a boolean value
function invertBoolean(value) {
  return !value;
}

// Function to count the number of odd numbers up to a given value
function numberOfOdds(n) {
  const l = n - 1;
  if (l < 1) {
    return 0;
  }

  // Use Math.floor to ensure we get an integer count
  return Math.floor((l + 1) / 2);
}

// Function to calculate the sum of numbers from 1 to n
function addUpTheNumbers(n) {
  return (n * (n + 1)) / 2;
}

// Function to generate a grade based on a numeric score
function gradeGenerator(score) {
  if (score >= 90) {
    return 'A';
  } if (score >= 80) {
    return 'B';
  } if (score >= 70) {
    return 'C';
  } if (score >= 60) {
    return 'D';
  }
  return 'F';
}

// Function to get a grade report for a student
function getGrade(studentName, score) {
  const grade = gradeGenerator(score);
  if (studentName === 'Jimmy Neutron') {
    return `${studentName} got an ${grade}`;
  } if (studentName === 'Angelica Pickles') {
    return `${studentName} got a ${grade}`;
  } if (studentName === 'Yogi The Bear') {
    return `${studentName} got a ${grade}`;
  } if (studentName === 'Patrick Star') {
    return `${studentName} got a ${grade}`;
  } return `${studentName} got an ${grade}`;
}

test('logicalAnd', () => {
  expect(logicalAnd(true, true)).toBe(true);
  expect(logicalAnd(true, false)).toBe(false);
  expect(logicalAnd(false, true)).toBe(false);
  expect(logicalAnd(false, false)).toBe(false);
});

test('logicalOr', () => {
  expect(logicalOr(true, true)).toBe(true);
  expect(logicalOr(true, false)).toBe(true);
  expect(logicalOr(false, true)).toBe(true);
  expect(logicalOr(false, false)).toBe(false);
});

test('invertBoolean', () => {
  expect(invertBoolean(true)).toBe(false);
  expect(invertBoolean(false)).toBe(true);
  expect(invertBoolean(1)).toBe(false);
  expect(invertBoolean(0)).toBe(true);
  expect(invertBoolean('true')).toBe(false);
  expect(invertBoolean('false')).toBe(false);
  expect(invertBoolean(null)).toBe(true);
  expect(invertBoolean(NaN)).toBe(true);
});

test('numberOfOdds', () => {
  expect(numberOfOdds(5)).toBe(2);
  expect(numberOfOdds(10)).toBe(5);
  expect(numberOfOdds(15)).toBe(7);
});

test('addUpTheNumbers', () => {
  expect(addUpTheNumbers(0)).toBe(0);
  expect(addUpTheNumbers(5)).toBe(15);
  expect(addUpTheNumbers(10)).toBe(55);
});

test('gradeGenerator', () => {
  expect(gradeGenerator(55)).toBe('F');
  expect(gradeGenerator(60)).toBe('D');
  expect(gradeGenerator(75)).toBe('C');
  expect(gradeGenerator(82)).toBe('B');
  expect(gradeGenerator(99)).toBe('A');
  expect(gradeGenerator(100)).toBe('A');
});

test('getGrade', () => {
  expect(getGrade('Jimmy Neutron', 99)).toBe('Jimmy Neutron got an A');
  expect(getGrade('Angelica Pickles', 87)).toBe('Angelica Pickles got a B');
  expect(getGrade('Yogi The Bear', 75)).toBe('Yogi The Bear got a C');
  expect(getGrade('Patrick Star', 60)).toBe('Patrick Star got a D');
  expect(getGrade('Homer Simpson', 42)).toBe('Homer Simpson got an F');
});
