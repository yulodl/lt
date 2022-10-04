/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const len = intervals.length;
    const ans = [];
    let i = 0;
    while (i < len && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }

    while (i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);

        i++;
    }

    ans.push(newInterval);

    while (i < len){
        ans.push(intervals[i]);
        i++;
    }


    return ans;
};

console.log(insert([[1,5]], [2,3]));
console.log(insert([], [2,5]));
console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
