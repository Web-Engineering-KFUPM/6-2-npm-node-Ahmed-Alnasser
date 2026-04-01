// TODO 4.1
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// TODO 4.2
export function subtract(numbers) {
  return numbers.reduce((diff, num, i) => (i === 0 ? num : diff - num), 0);
}

// TODO 4.3
export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// TODO 4.4
export function divide(numbers) {
  return numbers.reduce((quotient, num, i) => {
    if (i === 0) return num;
    if (num === 0) return NaN;
    return quotient / num;
  }, 0);
}
