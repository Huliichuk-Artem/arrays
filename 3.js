function removeMaxRowsAndCols(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  let maxVal = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxVal) {
        maxVal = matrix[i][j];
      }
    }
  }

  const rowsToDelete = new Set();
  const colsToDelete = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === maxVal) {
        rowsToDelete.add(i);
        colsToDelete.add(j);
      }
    }
  }

  return matrix
    .filter((_, rowIdx) => !rowsToDelete.has(rowIdx))
    .map(row => row.filter((_, colIdx) => !colsToDelete.has(colIdx)));
}

const mat3 = [
  [1, 2, 9],
  [4, 5, 6],
  [7, 8, 3]
];
console.log("Матриця після видалення рядків і стовпців з максимумом:");
console.log(removeMaxRowsAndCols(mat3)); // Видалиться рядок 0 і стовпець 2