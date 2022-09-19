function number2words(n) {
  // Array of numbers from 0 to 19
  let a = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  // Array of numbers from 20 to 90
  let b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  // Array of numbers from 1000 to 10^30
  let g = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
  ];

  // You'll notice these require next to no documentation because their intents are immediately clear.
  // chunk might be the only one that takes a moment to digest, but it's really not too bad.
  // Plus the function name gives us a pretty good indication what it does,
  // and it's probably a function we've encountered before.
  const arr = (x) => Array.from(x);
  const num = (x) => Number(x) || 0;
  const isEmpty = (xs) => xs.length === 0;
  const take = (n) => (xs) => xs.slice(0, n);
  const drop = (n) => (xs) => xs.slice(n);
  const reverse = (xs) => xs.slice(0).reverse();
  const comp = (f) => (g) => (x) => f(g(x));
  const not = (x) => !x;
  const chunk = (n) => (xs) =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

  // This part is really nasty still, but it's at least a bit more readable.
  // The main thing to take away is that it's just a bunch of nested ternary operators.
  let makeGroup = ([ones, tens, huns]) => {
    return [
      num(huns) === 0 ? "" : a[huns] + " hundred ",
      num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + "-") || "",
      a[tens + ones] || a[ones],
    ].join("");
  };
  // "thousands" constructor; no real good names for this, i guess.
  let thousand = (group, i) => (group === "" ? group : `${group} ${g[i]}`);
  // And then we execute !
  if (typeof n === "number") return number2words(String(n));
  if (n === "0") return "zero";
  return comp(chunk(3))(reverse)(arr(n))
    .map(makeGroup)
    .map(thousand)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  // OLD CODE
  //   let grp = (n) => ("000" + n).substr(-3);
  //   let rem = (n) => n.substr(0, n.length - 3);
  //   let cons = (xs) => (x) => (g) =>
  //     x ? [x, (g && " " + g) || "", " ", xs].join("") : xs;
  //   let iter = (str) => (i) => (x) => (r) => {
  //     if (x === "000" && r.length === 0) return str;
  //     return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
  //   };
  //   return iter("")(0)(grp(String(n)))(rem(String(n)));
}
