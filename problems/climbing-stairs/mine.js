/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const minSteps = Math.ceil(n / 2);
    let i = n - 1;
    let sum = 1;
    while (i >= minSteps) {
        let curSum = 1;
        let j = 1;
        while (j <= n - i) {
            curSum *= (i - j + 1) / j;

            j++;
        }

        sum += curSum;

        i--;
    }

    return sum;
};

console.log(climbStairs(45));
console.log(climbStairs(3));
