/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachable = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > maxReachable) break;

        maxReachable = Math.max(maxReachable, i + nums[i]);
    }

    return maxReachable >= nums.length - 1;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
