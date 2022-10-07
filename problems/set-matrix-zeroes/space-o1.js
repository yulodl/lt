/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let col0 = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (j === 0) {
                    col0 = 0;
                } else {
                    matrix[0][j] = 0
                }

                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
