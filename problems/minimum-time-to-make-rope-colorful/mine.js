/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    if (colors.length === 0) return 0;

    let cost = 0
    let preIdx = 0;
    for(let i = 1; i < colors.length; i++) {
        if (colors[preIdx] === colors[i]) {
            if (neededTime[preIdx] < neededTime[i]) {
                cost += neededTime[preIdx];
                preIdx = i;
            } else {
                cost += neededTime[i];
            }
        } else {
            preIdx = i;
        }
    }

    return cost;
};

console.log(minCost('abaac', [1,2,3,4,5]));
console.log(minCost('abc', [1,2,3]));
console.log(minCost('aabaa', [1,2,3,4,1]));
