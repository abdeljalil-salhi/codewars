function solution(string) {
  // If the string is empty, return an empty string
  if (string.length === 0) return "";

  // Declare an empty variable of type string that will be returned
  let result = "";
  // Iterate through the string and check if the current character is uppercase
  // If so, add a space before it and add it to the result string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase())
      result = `${result} ${string[i]}`;
    else result = `${result}${string[i]}`;
  }
  // Return our array
  return result;

  // @oneliner: (Regex)
  // return string.replace(/([A-Z])/g, " $1");
}