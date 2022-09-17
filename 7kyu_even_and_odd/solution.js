function evenAndOdd(num) {
  // Create an array to hold the even and odd numbers
  let NE = [],
    NO = [];
  // Convert the number to a string and split it into an array
  let arr = num.toString().split("");
  // Loop through the array and add the odd numbers to the array NO
  // and the even numbers to the array NE
  arr.map((N) => {
    let tmp = Number(N);
    if (!(tmp % 2)) NE = [...NE, tmp];
    else NO = [...NO, tmp];
  });
  // Join the array into a string and convert it to a number
  return [Number(NE.join("")), Number(NO.join(""))];
  // NOTE: Number() constructor is faster than parseInt() function (https://jsben.ch/)
}
