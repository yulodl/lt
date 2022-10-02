/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const ans = [];
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));

    const isSafe = (row, col) => {
        // column (vertical top)
        for (let i = 0; i < row; i++) {
            if (matrix[i][col]) return false;
        }

        // top left
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (matrix[i][j]) return false;
        }

        // top right
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (matrix[i][j]) return false;
        }

        return true;
    };

    const solve = rows => {
        const rowIdx = n - rows;
        for (let j = 0; j < n; j++) {
            // console.log({rowIdx, j}, isSafe(rowIdx, j));
            if (isSafe(rowIdx, j)) {
                matrix[rowIdx][j] = 1;
                if (rows > 1) {
                    solve(rows - 1);
                } else {
                    ans.push(matrix.map(row => row.map(value => value ? 'Q' : '.').join('')));
                }

                // reset
                matrix[rowIdx][j] = 0;
            }
        }
    };

    solve(n);

    return ans;
};


console.log(solveNQueens(9));
console.log(solveNQueens(4));
console.log(solveNQueens(1));
