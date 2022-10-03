/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ans = [];
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < Math.min(col / 2, row / 2); i++) {
        // row to right
        for (let j = i; j <= col - i - 1; j++) {
            ans.push(matrix[i][j]);
        }

        // col to bottom
        for (let j = i + 1; j < row - i - 1; j++) {
            ans.push(matrix[j][col - i - 1]);
        }

        // row to left
        if (row - i - 1 !== i) {
            for (let j = col - i - 1; j >= i; j--) {
                ans.push(matrix[row - i - 1][j]);
            }
        }

        // col to top
        if (col - i -1 !== i) {
            for (let j = row - i - 2; j > i; j--) {
                ans.push(matrix[j][i]);
            }
        }
    }

    return ans;
};

console.log(spiralOrder([[6,9,7]]));
console.log(spiralOrder([[3],[2]]));
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
