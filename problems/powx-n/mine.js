/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;

    const bArr = Math.abs(n).toString(2).split('').reverse();
    const powerArr = [x];
    let i = 1;
    while (i < bArr.length) {
        powerArr[i] = powerArr[i - 1] * powerArr[i - 1];
        i++;
    }

    // console.log(powerArr, bArr);
    const sum = bArr.reduce((acc, cur, i) => {
        if (cur === '1') {
            acc *= powerArr[i];
        }

        return acc;
    }, 1);

    return n > 0 ? sum : 1 / sum;

    /*
    if (n === 0) return 1;

    const ans = 1;
    let i = 1
    while (i <= Math.abs(n)) {
        ans *= x;
        i++
    }

    return n > 0 ? ans : 1 / ans;
    */
};

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -4));
console.log(myPow(2, -2147483648));
