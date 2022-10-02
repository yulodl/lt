/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    if (target > n * k) return 0;

    let dpMap = Object.fromEntries(Array(k).fill(1).map((one, idx) => [idx + 1, 1]));
    for (let i = 1; i < n; i++) {
        const nextMap = {};
        for (let sum = i + 1; sum <= Math.min(k * (i + 1), target); sum++) {
            nextMap[sum] = Array(k).fill(0).reduce((total, cur, idx) => {
                return ((dpMap[sum - idx - 1] || 0) + total) % (1e9 + 7);
            }, 0);
        }

        dpMap = nextMap;
    }
    //console.log(dpMap);

    return dpMap[target];
};

console.log(numRollsToTarget(2, 6, 7));
console.log(numRollsToTarget(30, 30, 500));
