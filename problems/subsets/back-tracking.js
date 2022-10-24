/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    function backTracking(start, stack, len) {
        if (stack.length === len) {
            ans.push(stack.slice(0));
            return;
        }

        for (let i = start; i <= nums.length - 1; i++) {
            stack.push(nums[i]);
            backTracking(i + 1, stack, len);
            stack.pop();
        }
    }

    for (let len = 0; len <= nums.length; len++) {
        backTracking(0, [], len);
    }

    return ans;
};

console.log(subsets([1,2,3]));
console.log(subsets([0]));
