function isPrime(num) {
  // Only checking the odd numbers because even numbers are not prime
  // except 2 which is handled in the if statement
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (!(num % i)) return false;
  // Return true if num is greater than 1 after the for loop is done
  return num > 1;
}
