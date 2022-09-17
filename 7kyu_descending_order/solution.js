function descendingOrder(n) {
  // Convert the number to string
  let nb = n.toString();

  // Split the string into an array
  let arr = nb.split("");
  // Sort the array in descending order
  arr.sort(function (a, b) {
    return b - a;
  });

  // Join the array into a string
  let str = arr.join("");
  // Convert the string into a number
  let num = Number(str);
  // NOTE: Number() constructor is faster than parseInt() function (https://jsben.ch/)

  // Return the sorted number
  return num;

  // @oneliner:
  // return Number(n.toString().split("").sort().reverse().join(""));
  // OR
  // return Number(n.toString().split("").sort((a, b) => b - a).join(""));
}
