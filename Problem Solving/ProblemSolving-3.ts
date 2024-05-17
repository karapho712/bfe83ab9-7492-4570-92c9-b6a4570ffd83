function convertToMilitary(inputTime: string) {
  const [hour, minutes, secondWithMark] =
    inputTime.split(":");
  const timeMark = inputTime.substring(
    inputTime.length - 2
  );
  const second = secondWithMark.slice(0, 2);

  let militaryHour = parseInt(hour);

  if (timeMark === "PM") {
    militaryHour = militaryHour + 12;
  }
  return `${militaryHour}:${minutes}:${second}`;
}

console.log(convertToMilitary("09:05:12PM"));
console.log(convertToMilitary("1:25:19AM"));
console.log(convertToMilitary("4:15:05AM"));
console.log(convertToMilitary("5:15:05PM"));
