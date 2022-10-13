/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    const maxNum = 2 ** 31 - 1;
    let first = maxNum;
    let second = maxNum;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > second) {
            // console.log(first, second, nums[i]);
            return true;
        }

        if (nums[i] < second && nums[i] > first) {
            second = nums[i];
        }

        if (nums[i] < first) {
            // first and second keep track of two different group of sequence
            first = nums[i];
        }
    }

    return false;
};

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));
