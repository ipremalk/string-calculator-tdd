function stringCalcucator(str) {
    const strArr = str.split(",");
    const intArr = strArr.map((value) => parseInt(value, 10));
    const negatives = intArr.filter((value) => value < 0);
    if (negatives?.length) {
        return `negative numbers not allowed ${negatives?.join(",")}`
    }
    let total = 0;
    for (let i=0; i<intArr.length; i++) {
        total += intArr[i];
    }
    return total;
};

module.exports = stringCalcucator;
