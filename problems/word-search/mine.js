/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const len = word.length;
    function wordExist(i, j, idx, usedKeys) {
        const key = [i, j].join('-');
        const isUnusedSameChar = !usedKeys.includes(key) && board[i][j] === word[idx];

        // console.log(i, j, idx, isUnusedSameChar);
        if (idx === len - 1 || !isUnusedSameChar) {
            return isUnusedSameChar;
        }

        usedKeys.push(key);
        const nextIdx = idx + 1;
        const left = i > 0 && wordExist(i - 1, j, nextIdx, usedKeys);
        const right = i < m - 1 && wordExist(i + 1, j, nextIdx, usedKeys);
        const top = j > 0 && wordExist(i, j - 1, nextIdx, usedKeys);
        const bottom = j < n - 1 && wordExist(i, j + 1, nextIdx, usedKeys);

        usedKeys.pop();
        return top || right || bottom || left;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (wordExist(i, j, 0, [])) {
                return true;
            }
        }
    }

    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));
