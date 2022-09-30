/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const dominoArr = dominoes.split('');
    let start = 0;
    let rightIndex = -1;
    const pushTo = (direction, start, end) => {
        for (let j = start; j <  end; j++) {
            dominoArr[j] = direction;
        }
    };

    for (let i = 0; i < dominoArr.length; i++) {
        switch (dominoArr[i]) {
            case 'R':
                if (rightIndex !== -1) {
                    pushTo('R', rightIndex, i);
                }

                rightIndex = i;
                start = i;
                break;
            case 'L':
                if (rightIndex !== -1) {
                    let rightStart = rightIndex + 1;
                    let leftEnd = i - 1;
                    while (rightStart < leftEnd) {
                        dominoArr[rightStart] = 'R';
                        dominoArr[leftEnd] = 'L';
                        rightStart++;
                        leftEnd--;
                    }
                } else {
                    pushTo('L', start, i);
                }

                rightIndex = -1;
                start = i + 1;
                break;
            case '.':
                break;
        }
    }

    if (rightIndex !== -1) {
        pushTo('R', rightIndex, dominoArr.length);
    }

    return dominoArr.join('');
};

console.log(pushDominoes('RR.L'));
console.log(pushDominoes('.L.R...LR..LR.'));
