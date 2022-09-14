/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isCellValid = (i, j, numStr) => {
        const subBoxRowStart = Math.floor(i / 3) * 3;
        const subBoxColStart = Math.floor(j / 3) * 3;
        for (let k = 0; k < 9; k++) {
            if (
                board[i][k] === numStr
                || board[k][j] === numStr
                || board[subBoxRowStart + k % 3][subBoxColStart + Math.floor(k / 3)] === numStr
            ) {
                return false;
            }
        }

        return true;
    };

    const tryAnswer = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') continue;

                for (let k = 0; k < 9; k++) {
                    const answer = `${k + 1}`;
                    if (isCellValid(i, j, answer)) {
                        console.log(i, j, answer);
                        board[i][j] = answer;
                        if (!tryAnswer()) {
                            board[i][j] = '.';
                        } else {
                            return true;
                        }
                    }
                }

                return false;
            }
        }

        return true;
    };

    tryAnswer();
};

const sudoku = [[".",".",".","2",".",".",".","6","3"],["3",".",".",".",".","5","4",".","1"],[".",".","1",".",".","3","9","8","."],[".",".",".",".",".",".",".","9","."],[".",".",".","5","3","8",".",".","."],[".","3",".",".",".",".",".",".","."],[".","2","6","3",".",".","5",".","."],["5",".","3","7",".",".",".",".","8"],["4","7",".",".",".","1",".",".","."]];

solveSudoku(sudoku);
console.log(sudoku);

