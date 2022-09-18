function firstNonRepeatingLetter(s) {
  // Split the string into an array of lowercase characters
  let arr = s.toLowerCase().split("");
  // Loop through the array and check if the character is unique
  // If so, return the character from the original string
  for (let i = 0; i < arr.length; i++)
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return s[i];
  // Otherwise, return an empty string
  return "";
}
