// @oneliner
function openOrSenior(data) {
  // Iterate through the array,
  // looking for members who are at least 55 years old and have a handicap greater than 7
  // If so, return the string "Senior" for that member, otherwise return "Open"
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}
