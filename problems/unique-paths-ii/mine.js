/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = obstacleGrid.map(() => Array(n).fill(0));
    const setDpVal = (i, j) => {
        if (obstacleGrid[i][j]) return dp[i][j] = 0;

        if (i === 0 && j === 0) return dp[i][j] = 1;

        if (i === 0) {
            return dp[i][j] = dp[i][j - 1];
        }

        if (j === 0) {
            return dp[i][j] = dp[i - 1][j];
        }

        return dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            setDpVal(i, j);
        }
    }

    return dp[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
