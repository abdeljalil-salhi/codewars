function duplicateEncode(word) {
  // Declare an empty variable of type string that will be returned
  let result = "";

  // Convert the string passed as argument to lowercase
  word = word.toLowerCase();
  // Iterate through the string looking for duplicated letters
  // If found any, replace them with a ) in the result string
  // If not, replace them with a ( in the result string
  for (let i = 0; i < word.length; i++) {
    // @Array.prototype.indexOf()
    // The indexOf() method returns the first index at which a given element can be found in the array
    // If the element is not present, it returns -1
    // @String.prototype.lastIndexOf()
    // The lastIndexOf() method, given one argument: a substring to search for,
    // searches the entire calling string,
    // and returns the index of the last occurrence of the specified substring.
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i]))
      result = `${result}(`;
    else result = `${result})`;
  }
  // Return our string
  return result;
}