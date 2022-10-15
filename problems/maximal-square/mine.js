/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                continue;
            }

            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
            }

            max = Math.max(max, dp[i][j]);
        }
    }

    return max ** 2;
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
console.log(maximalSquare([["0","1"],["1","0"]]));
console.log(maximalSquare([["0"]]));
