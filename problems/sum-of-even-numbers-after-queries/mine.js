/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const ans = [];
    let sum = nums.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
    for (let i = 0; i < queries.length; i++) {
        const [diff, idx] = queries[i];
        const num = nums[idx];
        nums[idx] = num + diff;
        if (num % 2 === 0) {
            if (diff % 2 === 0) {
                sum += diff;
            } else {
                sum -= num;
            }
        } else {
            if (diff % 2 !== 0) {
                sum += nums[idx];
            }
        }

        ans[i] = sum;
    }

    return ans;
};
