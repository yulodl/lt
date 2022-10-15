/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] === 0 || (i > 0 &&  heights[i] <= heights[i - 1])) continue;

        let finalHeight = heights[i];
        let wasted = 0;
        for (let j = i; j < heights.length; j++) {
            if (heights[j] === 0) break;

            finalHeight = Math.min(finalHeight, heights[j]);
            wasted += heights[j] - finalHeight;
            max = Math.max(max, finalHeight * (j - i + 1));

            if (j === heights.length - 1 && wasted <= finalHeight) return max;
        }
    }

    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
