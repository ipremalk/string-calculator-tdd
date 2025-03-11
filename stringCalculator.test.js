const stringCalculator = require("./stringCalcucator");

test("Addition of 1 and 2 should be 3", () => {
    expect(stringCalculator(1, 2)).toBe(3);
});
