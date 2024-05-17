function ratioPositiveNegativeZero(data) {
    var length = data.length;
    var positiveNumber = 0;
    var negativeNumber = 0;
    var zeroNumber = 0;
    for (var i = 0; i < length; i++) {
        var current = data[i];
        if (current > 0) {
            positiveNumber++;
        }
        else if (current < 0) {
            negativeNumber++;
        }
        else {
            zeroNumber++;
        }
    }
    var calculatePositive = parseFloat((positiveNumber / length).toFixed(6));
    var calculateNegative = parseFloat((negativeNumber / length).toFixed(6));
    var calculateZero = parseFloat((zeroNumber / length).toFixed(6));
    return {
        calculatePositive: calculatePositive,
        calculateNegative: calculateNegative,
        calculateZero: calculateZero
    };
}
console.log(ratioPositiveNegativeZero([-4, 3, -9, 0, 4, 1]));
console.log(ratioPositiveNegativeZero([3, -1, -9, -2, -5, 1, 0, 0, 3]));
