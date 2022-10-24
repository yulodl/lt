/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [[]];
    for (const num of nums) {
        ans.push(...ans.map(arr => [...arr, num]));
    }

    return ans;
};

console.log(subsets([1,2,3]));
console.log(subsets([0]));
