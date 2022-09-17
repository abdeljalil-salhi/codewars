describe("lets test it", function () {
  it("should work with empty array", function () {
    Test.assertSimilar(uniqueInOrder(""), []);
  });
  it("should work with one element", function () {
    Test.assertSimilar(uniqueInOrder("A"), ["A"]);
  });
  it("should reduce duplicates", function () {
    Test.assertSimilar(uniqueInOrder("AA"), ["A"]);
    Test.assertSimilar(uniqueInOrder("AAAABBBCCDAABBB"), [
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
    Test.assertSimilar(uniqueInOrder("AADD"), ["A", "D"]);
    Test.assertSimilar(uniqueInOrder("AAD"), ["A", "D"]);
    Test.assertSimilar(uniqueInOrder("ADD"), ["A", "D"]);
  });
  it("and treat lowercase as different from uppercase", function () {
    Test.assertSimilar(uniqueInOrder("ABBCcAD"), [
      "A",
      "B",
      "C",
      "c",
      "A",
      "D",
    ]);
  });
  it("and work with int arrays", function () {
    Test.assertSimilar(uniqueInOrder([1, 2, 3, 3]), [1, 2, 3]);
  });
  it("and work with char arrays", function () {
    Test.assertSimilar(uniqueInOrder(["a", "b", "b"]), ["a", "b"]);
  });
});
