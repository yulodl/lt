/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const triedAnswersArr = [];
    const getPosibleAnswersFromArray = array => new Array(9).fill(0).flatMap((zero, idx) => {
        const num = `${idx + 1}`;
        return array.includes(num) ? [] : num;
    });
    const getPosibleAnswersFromPosition = (i, j) => {
        const row = board[i];
        const rowAnswers = getPosibleAnswersFromArray(row);

        const column = board.map(r => r[j]);
        const columnAnswers = getPosibleAnswersFromArray(column);

        const subBox = board.flatMap((r, idx) => {
            const rowStart = 3 * Math.floor(i / 3);
            const colStart = 3 * Math.floor(j / 3);
            if (idx >= rowStart && idx < rowStart + 3) {
                return r.slice(colStart, colStart + 3);
            }

            return [];
        });
        const subBoxAnswers = getPosibleAnswersFromArray(subBox);
        const answers = rowAnswers.filter(a => columnAnswers.includes(a) && subBoxAnswers.includes(a));
        const triedAnswers = triedAnswersArr.find(ta => ta[0] === i && ta[1] === j)?.[2];

        // console.log({rowAnswers, columnAnswers, subBoxAnswers, answers, triedAnswers, triedAnswersArr: JSON.stringify(triedAnswersArr)});

        const finalAnswers = answers.filter(a => !triedAnswers?.includes(a));

        if (finalAnswers.length === 1 && triedAnswers) {
            triedAnswers.push(finalAnswers[0])
        }

        return finalAnswers;
    };
    const resetTriedAnswer = triedAnswer => {
        const [i, j, tried, tailing = []] = triedAnswer;
        [[i, j], ...tailing].forEach(([i, j]) => {
            board[i][j] = '.';
        });
        triedAnswer[3] = [];
    };
    let completed = false;
    const findAnswer = () => {
        let settled;
        let minLenPosibleAnswers;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                // console.log(i, j);
                if (board[i][j] !== '.') continue;

                const tmpPosAnswers = getPosibleAnswersFromPosition(i, j);
                let lastTried = triedAnswersArr.length ? triedAnswersArr[triedAnswersArr.length - 1] : undefined;
                if (tmpPosAnswers.length === 0) {
                    resetTriedAnswer(lastTried);

                    if (lastTried[0] === i && lastTried[1] === j) {
                        console.log('beforePop', {triedAnswersArr: JSON.stringify(triedAnswersArr)});
                        triedAnswersArr.pop();
                        if (triedAnswersArr.length) {
                            resetTriedAnswer(triedAnswersArr[triedAnswersArr.length - 1])
                        }

                        console.log('afterPop', {triedAnswersArr: JSON.stringify(triedAnswersArr)});
                    }

                    return;
                }

                if (tmpPosAnswers.length === 1) {
                    board[i][j] = tmpPosAnswers[0];
                    if (lastTried) {
                        if (!lastTried[3]) {
                            lastTried[3] = [[i, j]];
                        } else {
                            lastTried[3].push([i, j]);
                        }
                    }

                    settled = true;
                } else {
                    if (tmpPosAnswers.length > 1 && (!minLenPosibleAnswers || tmpPosAnswers.length < minLenPosibleAnswers[2].length)) {
                        minLenPosibleAnswers = [i, j, tmpPosAnswers];
                    }
                }
            }
        }

        if (!settled) {
            if (minLenPosibleAnswers) {
                const [i, j, [num]] = minLenPosibleAnswers;
                const lastTried = triedAnswersArr.length ? triedAnswersArr[triedAnswersArr.length - 1] : undefined;
                if (num) {
                    board[i][j] = num;
                    if (lastTried && i === lastTried[0] && j === lastTried[1]) {
                        lastTried[2].push(num);
                    } else {
                        triedAnswersArr.push([i, j, [num]]);
                    }
                }

                console.log({minLenPosibleAnswers, triedAnswersArr: JSON.stringify(triedAnswersArr)});
            } else {
                completed = true;
            }
        }
    }

    while (!completed) {
        findAnswer();
    }
};

const sudoku = [[".",".",".","2",".",".",".","6","3"],["3",".",".",".",".","5","4",".","1"],[".",".","1",".",".","3","9","8","."],[".",".",".",".",".",".",".","9","."],[".",".",".","5","3","8",".",".","."],[".","3",".",".",".",".",".",".","."],[".","2","6","3",".",".","5",".","."],["5",".","3","7",".",".",".",".","8"],["4","7",".",".",".","1",".",".","."]];

solveSudoku(sudoku);
console.log(sudoku);
