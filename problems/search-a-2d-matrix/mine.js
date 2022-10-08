/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;

    let rowStart = 0;
    let rowEnd = m;
    let rowMid;
    while (rowStart < rowEnd) {
        rowMid = Math.floor((rowStart + rowEnd) / 2)
        if (matrix[rowMid][0] > target) {
            if (rowEnd === rowMid) return false;

            rowEnd = rowMid;
        } else if (matrix[rowMid][n - 1] < target) {
            if (rowStart === rowMid) return false;

            rowStart = rowMid;
        } else {
            break;
        }
    }

    let colStart = 0;
    let colEnd = n;
    let colMid;
    while (colStart < colEnd) {
        colMid = Math.floor((colStart + colEnd) / 2)
        // console.log(rowMid, {colStart, colMid, colEnd}, matrix[rowMid][colMid]);
        if (matrix[rowMid][colMid] > target) {
            if (colEnd === colMid) return false;

            colEnd = colMid;
        } else if (matrix[rowMid][colMid] < target) {
            if (colStart === colMid) return false;

            colStart = colMid;
        } else {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1],[3]], 2));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
