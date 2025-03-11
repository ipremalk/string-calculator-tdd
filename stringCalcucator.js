function stringCalcucator(str) {
    let strArr;
    if (str.includes(",")) {
        strArr = str.split(",");
    } else if (str.includes(";")) {
        strArr = str.split(";");
        for (let i=1; i<strArr.length; i++) {
            if (strArr[i].includes("\n")) {
                strArr[i].replace("\n", "");
            }
        }
    }
    const intArr = strArr.map((value) => {
        if (Number(parseInt(value, 10))) {
            return parseInt(value, 10);
        }
    }).filter((value) => value !== undefined);
    console.log("intArr", intArr);
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
