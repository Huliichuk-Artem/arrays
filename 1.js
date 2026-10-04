function subtractRowAverages(matrix) {
  return matrix.map(row => {
    const sum = row.reduce((acc, val) => acc + val, 0);
    const avg = sum / row.length;
    return row.map(val => Number((val - avg).toFixed(2)));
  });
}


const mat1 = [
  [10, 20, 30], 
  [2, 4, 6]     
];
console.log("Результат віднімання середнього рядка:");
console.log(subtractRowAverages(mat1));