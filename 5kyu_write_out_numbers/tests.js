describe("Fixed Tests", () => {
  it("Ones Tests", () => {
    Test.assertEquals(number2words(0), "zero");
    Test.assertEquals(number2words(1), "one");
    Test.assertEquals(number2words(8), "eight");
    Test.assertEquals(number2words(5), "five");
    Test.assertEquals(number2words(9), "nine");
  });

  it("Tens Tests", () => {
    Test.assertEquals(number2words(10), "ten");
    Test.assertEquals(number2words(19), "nineteen");
    Test.assertEquals(number2words(20), "twenty");
    Test.assertEquals(number2words(22), "twenty-two");
    Test.assertEquals(number2words(54), "fifty-four");
    Test.assertEquals(number2words(80), "eighty");
    Test.assertEquals(number2words(98), "ninety-eight");
  });

  it("Hundreds Tests", () => {
    Test.assertEquals(number2words(100), "one hundred");
    Test.assertEquals(number2words(301), "three hundred one");
    Test.assertEquals(number2words(793), "seven hundred ninety-three");
    Test.assertEquals(number2words(800), "eight hundred");
    Test.assertEquals(number2words(650), "six hundred fifty");
  });

  it("Thousands Tests", () => {
    Test.assertEquals(number2words(1000), "one thousand");
    Test.assertEquals(number2words(1003), "one thousand three");
    Test.assertEquals(number2words(3052), "three thousand fifty-two");
    Test.assertEquals(number2words(7300), "seven thousand three hundred");
    Test.assertEquals(
      number2words(7217),
      "seven thousand two hundred seventeen"
    );
    Test.assertEquals(number2words(8340), "eight thousand three hundred forty");
    Test.assertEquals(
      number2words(99997),
      "ninety-nine thousand nine hundred ninety-seven"
    );
    Test.assertEquals(
      number2words(888887),
      "eight hundred eighty-eight thousand eight hundred eighty-seven"
    );
  });
});

describe("Random Tests", () => {
  it("Tests", () => {
    let tests = (function () {
      let n2w = (n) => {
        let strnumarr = [
          "zero",
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
        let dstrnumarr = [
          "zero",
          "ten",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety",
        ];

        let s = n.toString();
        let narr = s.split("").map(Number);
        if (n < 20) return strnumarr[n];
        let l = narr.length;
        if (l == 2) {
          if (narr[1] == 0) {
            return dstrnumarr[narr[0]];
          }

          return dstrnumarr[narr[0]] + "-" + strnumarr[narr[1]];
        }
        if (l == 3) {
          if (narr[1] == 0 && narr[2] == 0) {
            return strnumarr[narr[0]] + " hundred";
          }
          let rem = n - 100 * narr[0];
          return strnumarr[narr[0]] + " hundred " + n2w(rem);
        }
        if (l <= 6) {
          let th = Math.floor(n / 1000);
          let rem = n - th * 1000;
          let wth = n2w(th);
          let wrem = n2w(rem);
          if (wrem == "zero") {
            return wth + " thousand";
          }
          return wth + " thousand " + wrem;
        }
        return "";
      };
      const rand = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
      let tests = [];

      for (let i = 0; i < 100; i++) {
        let test = {};
        let num = rand(0, 999999);
        test.test = num;
        test.ans = n2w(num);

        test.desc = `Testing for the number ${test.test}, should be ${test.ans}`;

        tests.push(test);
      }

      return tests;
    })();
    for (let key in tests)
      Test.assertEquals(
        number2words(tests[key].test),
        tests[key].ans,
        tests[key].desc
      );
  });
});
