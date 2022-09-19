function getPINs(observed) {
  // Declare the possible digits for each key pressed on the observed keypad
  const map = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
    0: ["8", "0"],
  };

  // Split the observed string into an array of digits
  let arr = observed.split("");
  let tmp = [];

  // Store the possible digits for each key pressed in an array
  for (i = 0; i < arr.length; i++) {
    tmp = [...tmp, map[arr[i]]];
  }

  // ----------------------------------------------------------------
  // Declare a function to generate all possible combinations of the
  // digits for each key pressed on the observed keypad
  const getCombination = (arr) => {
    // If there is only one digit in the array,
    // return the possible combinations directly from the map array
    if (arr.length === 1) return arr[0];

    // If there are more than one digits in the array,
    // generate all possible combinations of the digits

    // Declare a variable to store the combinations
    let result = [];

    // Declare a variable to store the combinations of the rest digits
    let next = getCombination(arr.slice(1));

    // Generate all possible combinations of the digits
    for (i = 0; i < arr[0].length; i++)
      for (j = 0; j < next.length; j++)
        result = [...result, arr[0][i] + next[j]];

    // Return the combinations
    return result;
  };
  // Return the result of the function
  return getCombination(tmp);
}
