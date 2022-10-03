/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [];
    let [start, end] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > end) {
            ans.push([start, end]);
            [start, end] = intervals[i];
        } else {
            end = Math.max(end, intervals[i][1]);
        }

        if (i === intervals.length - 1) {
            ans.push([start, end]);
        }
    }

    return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[0,4]]));
console.log(merge([[1,4],[2,3]]));
