const stringCalculator = require("./stringCalcucator");

test("Addition of string '1,2,3' should be 6", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
});

test("Addition of string '-1,2,3,-6' should print the message like negative numbers not allowed -1, -6", () => {
    expect(stringCalculator("-1,2,3,-6")).toBe("negative numbers not allowed -1,-6");
});

test("Addition of string '//;\n1;2' should be 3", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
})