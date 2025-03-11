const stringCalculator = require("./stringCalcucator");

test("Addition of string '1,2,3' should be 6", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
});
