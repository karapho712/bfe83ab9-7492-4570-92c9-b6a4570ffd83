function convertToMilitary(inputTime) {
    var _a = inputTime.split(":"), hour = _a[0], minutes = _a[1], secondWithMark = _a[2];
    var timeMark = inputTime.substring(inputTime.length - 2);
    var second = secondWithMark.slice(0, 2);
    var militaryHour = parseInt(hour);
    if (timeMark === "PM") {
        militaryHour = militaryHour + 12;
    }
    return "".concat(militaryHour, ":").concat(minutes, ":").concat(second);
}
console.log(convertToMilitary("09:05:12PM"));
console.log(convertToMilitary("1:25:19AM"));
console.log(convertToMilitary("4:15:05AM"));
console.log(convertToMilitary("5:15:05PM"));
