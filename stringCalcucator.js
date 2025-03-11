function stringCalcucator(str) {
    const strArr = str.split(",");
    let total = 0;
    for (let i=0; i<strArr.length; i++) {
        total += parseInt(strArr[i], 10);
    }
    return total;
};

module.exports = stringCalcucator;
