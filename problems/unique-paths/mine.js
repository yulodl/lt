/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = Array(m).fill(0).map((zero, idx) => {
        if (idx === 0) return Array(n).fill(1);

        return [1, ...Array(n - 1).fill(0)];
    });

    for (let i = 1;  i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }

    return matrix[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
