function shiftMatrix(matrix, k) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;

  const shiftRight = ((k % n) + n) % n;
  const shiftUp = ((k % m) + m) % m;

  const shiftedRight = matrix.map(row => {
    return [...row.slice(n - shiftRight), ...row.slice(0, n - shiftRight)];
  });

  const shiftedUpAndRight = [
    ...shiftedRight.slice(shiftUp),
    ...shiftedRight.slice(0, shiftUp)
  ];

  return shiftedUpAndRight;
}

const mat2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Матриця після зсуву на k=1 (вправо і догори):");
console.log(shiftMatrix(mat2, 1));