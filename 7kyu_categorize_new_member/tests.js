const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Categorize New Member", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
      ["Open", "Senior", "Open", "Senior"]
    );
    assert.deepEqual(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
      ]),
      ["Open", "Open", "Open", "Open"]
    );
    assert.deepEqual(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
      ["Senior", "Open", "Open", "Open"]
    );
  });

  it("Edge cases:", () => {
    assert.deepEqual(openOrSenior([]), [], "Empty array");
    assert.deepEqual(
      openOrSenior([
        [54, 9],
        [55, 9],
      ]),
      ["Open", "Senior"],
      "age for 'Senior' should be > 54"
    );
    assert.deepEqual(
      openOrSenior([
        [55, 7],
        [55, 9],
      ]),
      ["Open", "Senior"],
      "handicap for 'Senior' should be > 7"
    );
  });

  it("Some random tests:", () => {
    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function ref(data) {
      return data.map((x) => (x[0] >= 55 && x[1] > 7 ? "Senior" : "Open"));
    }

    for (let t = 0; t < 100; t++) {
      let arr = Array.from({ length: randint(3, 8) }, (_, i) => [
        randint(10, 90),
        randint(-2, 26),
      ]);
      assert.deepEqual(
        openOrSenior(arr.slice()),
        ref(arr.slice()),
        `Testing for members = ${JSON.stringify(arr)}`
      );
    }
  });
});
