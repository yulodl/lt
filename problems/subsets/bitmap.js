/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    const n = nums.length;
    for (let num = 1 << n; num < 1 << (n + 1); num++) {
        const bitStr = num.toString(2);
        const set = [];
        for (let i = 1; i <= n; i++) {
            if (bitStr[i] === '1') {
                set.push(nums[i - 1]);
            }
        }

        ans.push(set);
    }

    return ans;
};

console.log(subsets([1,2,3]));
console.log(subsets([0]));
