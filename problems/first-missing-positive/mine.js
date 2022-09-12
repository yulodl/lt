/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // space complexity is not valid...
    const arr = [];
    nums.forEach(num => {
        if (num > 0) {
            arr[num - 1] = num;
        }
    });
    const idx = arr.findIndex(num => num === undefined);

    return idx === -1 ? arr.length + 1 : idx + 1;
};
