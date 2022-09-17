const { assert } = require("chai");

describe("Fixed tests", function () {
  it("Examples", function () {
    assert.deepEqual(evenAndOdd(126453), [264, 153], `For input 126453`);
    assert.deepEqual(evenAndOdd(3012), [2, 31], `For input 3012`);
    assert.deepEqual(evenAndOdd(4628), [4628, 0], `For input 4628`);
  });

  it("More fixed tests", function () {
    assert.deepEqual(evenAndOdd(2134563), [246, 1353], `For input 2134563`);
    assert.deepEqual(
      evenAndOdd(513513515),
      [0, 513513515],
      `For input 513513515`
    );
    assert.deepEqual(
      evenAndOdd(1326459980031245),
      [26480024, 13599315],
      `For input 1326459980031245`
    );
    assert.deepEqual(
      evenAndOdd(1111111359),
      [0, 1111111359],
      `For input 1111111359`
    );
    assert.deepEqual(evenAndOdd(22220468), [22220468, 0], `For input 22220468`);
    assert.deepEqual(
      evenAndOdd(1032469007531245),
      [2460024, 13975315],
      `For input 1032469007531245`
    );
    assert.deepEqual(evenAndOdd(0), [0, 0], `For input 0`);
    assert.deepEqual(evenAndOdd(1), [0, 1], `For input 1`);
    assert.deepEqual(evenAndOdd(2), [2, 0], `For input 2`);
  });
});

describe("Random tests", function () {
  const sol = (num) => [
    +num.toString().replace(/[13579]/g, ""),
    +num.toString().replace(/[02468]/g, ""),
  ];
  it("Testing random numbers", function () {
    for (let i = 0; i < 100; i++) {
      const num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      assert.deepEqual(evenAndOdd(num), sol(num), `For input ${num}`);
    }
  });
});
