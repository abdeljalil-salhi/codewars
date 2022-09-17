var uniqueInOrder = function (iterable) {
  // If the iterable is empty, return an empty array
  if (iterable.length === 0) return [];

  // Take the first element of the iterable as granted result (it is always unique)
  // And store it in the result array that will be returned
  let result = [iterable[0]];
  // Iterate through the iterable and check if it is unique
  // If so, add it to the result array
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result = [...result, iterable[i]];
    }
  }
  // Return our array
  return result;
};
