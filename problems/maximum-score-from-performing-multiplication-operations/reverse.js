/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const mLen = multipliers.length;
    const nLen = nums.length;
    const result = Array(mLen + 1).fill(0);
    for (let m = mLen - 1; m>=0; m--) {
        const prevRst = [...result];

        for(let n = m; n >= 0; n--) {
            result[n] = Math.max(
                multipliers[m] * nums[n] + prevRst[n + 1],
                multipliers[m] * nums[nLen - 1 - (m - n)] + prevRst[n]
            );
        }

        console.log(m, result);
    }

    return result[0];
};

console.log(maximumScore([1,2,3], [3,2,1]));
console.log(maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]));
