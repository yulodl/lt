/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    const len = nums.length;
    while (i < len) {
        let num = nums[i];
        if (num > 0 && i !== num - 1 && num !== nums[num - 1]) {
            nums[i] = nums[num - 1];
            nums[num - 1] = num;
            console.log(nums);
            if (nums[i] && nums[i] > 0) continue;
        }

        i++;
    }
    const idx = nums.findIndex((num, i) => num !== i + 1);

    return idx === -1 ? nums.length + 1 : idx + 1;
};

console.log(firstMissingPositive([1,1,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
console.log(firstMissingPositive([2147483647]));
