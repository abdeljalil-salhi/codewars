function sumStrings(a, b) {
  // Convert to number, sum them up, convert back to string
  return (BigInt(a) + BigInt(b)).toString();
  // I don't know if this is a joke or not, this is too easy for 4kyu
}
