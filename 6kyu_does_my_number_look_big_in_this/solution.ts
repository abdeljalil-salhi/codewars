export function narcissistic(value: number): boolean {
  // Store the number as an array of numbers (digits)
  const digits = value.toString().split("").map(Number);
  // Get the highest power of the number by getting the length of the array
  const power = digits.length;
  // Get the sum of the digits raised to the power
  const sum = digits.reduce((acc, curr) => acc + Math.pow(curr, power), 0);
  // Return whether the sum is equal to the original number or not
  return sum === value;
}
