/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let minStart = null;
    let maxLen = 0;
    const getLen = (arr, loopStartIdx) => {
        console.log(arr, loopStartIdx);
        for (let j = loopStartIdx; j < nums.length; j++) {
            if (nums[j] <= arr[0]) {
                continue;
            } else {
                const pre = arr[arr.length - 1];
                if (nums[j] > pre) {
                    arr.push(nums[j]);
                    return getLen(arr, j + 1);
                } else if (nums[j] < pre) {
                    const nextArr = arr.slice();
                    while (nums[j] <= nextArr[nextArr.length - 1]) {
                        nextArr.pop();
                    }

                    nextArr.push(nums[j]);
                    return Math.max(getLen(arr, j + 1), getLen(nextArr, j + 1));
                }
            }
        }

        return arr.length;
    };
    for (let i = 0; i < nums.length; i++) {
        if (minStart && nums[i] >= minStart) {
            continue;
        }

        minStart = minStart === null ? nums[i] : Math.min(nums[i], minStart);
        maxLen = Math.max(maxLen, getLen([nums[i]], i + 1));
    }

    return maxLen;
};

console.log(lengthOfLIS([-813,82,-728,-82,-432,887,-551,324,-315,306,-164,-499,-873,-613,932,177,61,52,1000,-710,372,-306,-584,-332,-500,407,399,-648,290,-866,222,562,993,-338,-590,303,-16,-134,226,-648,909,582,177,899,-343,55,629,248,333,1,-921,143,629,981,-435,681,844,349,613,457,797,695,485,15,710,-450,-775,961,-445,-905,466,942,995,-289,-397,434,-14,34,-903,314,862,-441,507,-966,525,624,-706,39,152,536,874,-364,747,-35,446,-608,-554,-411,987,-354,-700,-34,395,-977,544,-330,596,335,-612,28,586,228,-664,-841,-999,-100,-620,718,489,346,450,772,941,952,-560,58,999,-879,396,-101,897,-1000,-566,-296,-555,938,941,475,-260,-52,193,379,866,226,-611,-177,507,910,-594,-856,156,71,-946,-660,-716,-295,-927,148,620,201,706,570,-659,174,637,-293,736,-735,377,-687,-962,768,430,576,160,577,-329,175,51,699,-113,950,-364,383,5,748,-250,-644,-576,-227,603,832,-483,-237,235,893,-336,452,-526,372,-418,356,325,-180,134,-698]));
console.log(lengthOfLIS([1,2,3,4,5,6,7,8,2,9,10]));
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));
