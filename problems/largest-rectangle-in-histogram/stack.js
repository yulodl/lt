/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const idxStack = [];
    const len = heights.length;
    let max = 0;
    for (let i = 0; i <= len; i++) {
        const curHeight = i === len ? 0 : heights[i];
        while (idxStack.length && curHeight < heights[idxStack[idxStack.length - 1]]) {
            const idx = idxStack.pop();

            max = Math.max(max, heights[idx] * (idxStack.length ? i - idxStack[idxStack.length - 1] - 1 : i));
        }

        idxStack.push(i);
    }

    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
