/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let ans = 0;
    const dp = Array(nums2.length + 1).fill(0);
    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.length - 1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                dp[j + 1] = dp[j] + 1;
            } else {
                dp[j + 1] = 0;
            }

            if (ans < dp[j + 1]) {
                ans = dp[j + 1];
            }
        }
    }

    return ans;
};
