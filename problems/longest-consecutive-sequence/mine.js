/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = nums.reduce((acc, num) => {
        if (!(num in acc)) {
            acc[num] = 1;
        }

        return acc;
    }, {});
    nums.forEach(num => {
        if ((num - 1) in map) {
            map[num] = 0;
        }
    });
    let max = 0;
    nums.forEach(num => {
        let cur = 1;
        if (map[num] === 1) {
            while(map[++num] === 0) {
                cur++;
            }
        }

        max = Math.max(max, cur);
    });

    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
