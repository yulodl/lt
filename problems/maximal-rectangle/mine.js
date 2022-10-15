/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') continue;

            if (i === 0) {
                dp[i][j] = j > 0 ? dp[i][j - 1] + 1 : 1;
            } else if (j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 1 + dp[i][j - 1];
            }

            for (let height = 1, width = dp[i][j]; height <= i + 1; height++) {
                width = Math.min(width, dp[i + 1 - height][j]);
                max = Math.max(max, width * height);
            }
        }
    }

    return max;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
console.log(maximalRectangle([["0"]]));
console.log(maximalRectangle([["1"]]));
