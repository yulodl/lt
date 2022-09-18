/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length - 1;
    let leftMax = height[i];
    let rightMax = height[j];
    let sum = 0;
    while (i < j) {
        if (leftMax <= rightMax) {
            if (height[i] < leftMax) {
                sum += leftMax - height[i];
            } else {
                leftMax = height[i];
            }
        } else {
            if (height[j] < rightMax) {
                sum += rightMax - height[j];
            } else {
                rightMax = height[j];
            }
        }

        console.log({i, j});
        if (leftMax <= rightMax) {
            i++;
        } else {
            j--;
        }
    }

    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
