// @input: How can mirrors be real if our eyes aren't real
String.prototype.toJadenCase = function () {
  // Split the string to multiple array elements, the separator is the whitespace
  words = this.split(" "); // ["How", "can", "mirrors", ..., "real"]
  // Change the first letter of each array element to upper case
  // Change the rest of the letters of the element to lower case
  for (i = 0; i < words.length; i++)
    words[i] =
      words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
  // ["How", "Can", "Mirrors", ..., "Real"]
  // Join the array elements by whitespace
  return words.join(" ");
  // @output: How Can Mirrors Be Real If Our Eyes Aren't Real
};
