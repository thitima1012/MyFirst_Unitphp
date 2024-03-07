const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);
    // assert
    expect(result).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("subtracting 1 - 2 should return -1", () => {
    // arrange and act
    var result = mathOperations.diff(1, 2);
    // assert
    expect(result).toBe(-1);
  });
});

describe("Calculator tests", () => {
  test("producting 1 * 2 should return 2", () => {
    // arrange and act
    var result = mathOperations.product(1, 2);
    // assert
    expect(result).toBe(2);
  });
});