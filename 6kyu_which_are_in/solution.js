function inArray(array1, array2) {
  // Declare an empty array that will be returned
  let result = [];

  // Loop through the first array and check if the element is in the second array
  // If it is, push it to the result array
  // Otherwise, do nothing
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array2[j].indexOf(array1[i]) !== -1) {
        result = [...result, array1[i]];
        break;
      }
    }
  }
  // Return the result array sorted alphabetically
  return result.sort();

  // @oneliner:
  // return array1.filter((word) => array2.some((str) => str.includes(word))).sort();
  // OR
  // return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}
