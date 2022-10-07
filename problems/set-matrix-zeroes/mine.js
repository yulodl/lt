/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rowIdxSet = new Set();
    const colIdxSet = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowIdxSet.add(i);
                colIdxSet.add(j);
            }
        }
    }
    Array.from(rowIdxSet).forEach(rowIdx => {
        for (let j = 0; j < n; j++) {
            matrix[rowIdx][j] = 0;
        }
    });

    Array.from(colIdxSet).forEach(colIdx => {
        for (let i = 0; i < m; i++) {
            matrix[i][colIdx] = 0;
        }
    });
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
