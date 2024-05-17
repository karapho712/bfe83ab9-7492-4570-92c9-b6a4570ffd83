type MinMax = {
  min: number;
  max: number;
};

function findMinMax(data: number[]): MinMax {
  let min = data[0];
  let max = data[0];

  for (let i = 1; i < data.length; i++) {
    const current = data[i];
    if (current < min) {
      min = current;
    }
    if (current > max) {
      max = current;
    }
  }

  return { min, max };
}

function minMaxSum(data: number[]): {
  min: number;
  max: number;
} {
  const result: number[] = [];

  for (let i = 0; i < data.length; i++) {
    let sum = 0;
    for (let j = 0; j < data.length; j++) {
      if (j !== i) {
        sum += data[j];
      }
    }
    result.push(sum);
  }

  const { min, max } = findMinMax(result);
  console.log("min: ", min, "max: ", max);
  return { min, max };
}

console.log(minMaxSum([1, 3, 5, 7, 9]));
console.log(minMaxSum([1, 2, 3, 4, 5]));
