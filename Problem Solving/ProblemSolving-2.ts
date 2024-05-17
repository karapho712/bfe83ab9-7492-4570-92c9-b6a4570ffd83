function ratioPositiveNegativeZero(data: number[]): {
  calculatePositive: number;
  calculateNegative: number;
  calculateZero: number;
} {
  const length = data.length;

  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;

  for (let i = 0; i < length; i++) {
    const current = data[i];
    if (current > 0) {
      positiveNumber++;
    } else if (current < 0) {
      negativeNumber++;
    } else {
      zeroNumber++;
    }
  }

  const calculatePositive = parseFloat(
    (positiveNumber / length).toFixed(6)
  );
  const calculateNegative = parseFloat(
    (negativeNumber / length).toFixed(6)
  );
  const calculateZero = parseFloat(
    (zeroNumber / length).toFixed(6)
  );

  return {
    calculatePositive,
    calculateNegative,
    calculateZero,
  };
}

console.log(
  ratioPositiveNegativeZero([-4, 3, -9, 0, 4, 1])
);
console.log(
  ratioPositiveNegativeZero([3, -1, -9, -2, -5, 1, 0, 0, 3])
);
