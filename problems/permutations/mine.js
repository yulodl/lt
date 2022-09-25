/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    function getPath(curPath, restNums) {
        if (restNums.length === 1) {
            ans.push([...curPath, restNums[0]]);
        } else {
            for (let i = 0; i < restNums.length; i++) {
                curPath.push(restNums[i]);
                const nextRestNums = restNums.slice(0);
                nextRestNums.splice(i, 1);
                getPath(curPath, nextRestNums);
                curPath.pop();
            }
        }
    }

    getPath([], nums);

    return ans;
};

console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));
