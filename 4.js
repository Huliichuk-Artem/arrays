function rotate90ClockwiseInPlace(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

const squareMat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate90ClockwiseInPlace(squareMat);
console.log("Матриця повернута на 90°");
console.log(squareMat);
