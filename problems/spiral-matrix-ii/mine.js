/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    let cur = 1;
    for (let i = 0; i < n / 2; i++) {
        if (i === n - i - 1) {
            matrix[i][i] = cur;
            break;
        }

        // row to right
        for (let j = i; j < n - i - 1; j++) {
            matrix[i][j] = cur;
            cur++;
        }

        // column to bottom
        for (let j = i; j < n - i - 1; j++) {
            matrix[j][n - i - 1] = cur;
            cur++;
        }

        // row to left
        for (let j = n - i - 1; j > i; j--) {
            matrix[n - i - 1][j] = cur;
            cur++;
        }

        // column to top
        for (let j = n - i - 1; j > i; j--) {
            matrix[j][i] = cur;
            cur++;
        }
    }

    return matrix;
};

console.log(generateMatrix(1));
console.log(generateMatrix(20));
