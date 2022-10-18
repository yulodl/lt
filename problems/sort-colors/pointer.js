/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = 0;
    let k = nums.length - 1;
    while (j <= k) {
        if (nums[j] === 0) {
            if(j > i) {
                const tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
                i++;
            } else {
                j++;
            }
        } else if (nums[j] === 2) {
            const tmp = nums[k];
            nums[k] = nums[j];
            nums[j] = tmp;
            k--;
            continue;
        } else {
            j++;
        }
    }

    return nums;
};

console.log(sortColors([2,0]));
console.log(sortColors([2,1]));
console.log(sortColors([1,0]));
console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));
