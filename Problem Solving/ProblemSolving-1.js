function findMinMax(data) {
    var min = data[0];
    var max = data[0];
    for (var i = 1; i < data.length; i++) {
        var current = data[i];
        if (current < min) {
            min = current;
        }
        if (current > max) {
            max = current;
        }
    }
    return { min: min, max: max };
}
function minMaxSum(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var sum = 0;
        for (var j = 0; j < data.length; j++) {
            if (j !== i) {
                sum += data[j];
            }
        }
        result.push(sum);
    }
    var _a = findMinMax(result), min = _a.min, max = _a.max;
    console.log("min: ", min, "max: ", max);
    return { min: min, max: max };
}
console.log(minMaxSum([1, 3, 5, 7, 9]));
console.log(minMaxSum([1, 2, 3, 4, 5]));
