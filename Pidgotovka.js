function generateMatrix(m, n, min, max) {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    console.log("Матриця порожня.");
    return;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let header = "\t";
  for (let j = 0; j < n; j++) {
    header += `стовпець ${j + 1}\t`;
  }
  console.log(header);

  for (let i = 0; i < m; i++) {
    let rowStr = `рядок ${i + 1}\t`;
    for (let j = 0; j < n; j++) {
      const val = typeof matrix[i][j] === "number" ? Number(matrix[i][j].toFixed(2)) : matrix[i][j];
      rowStr += `${val}\t\t`;
    }
    console.log(rowStr);
  }
}

const sample = generateMatrix(3, 4, 1, 10);
printMatrix(sample);