/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];
    function getPath(curPath, restNums) {
        if (restNums.length === 1) {
            ans.push([...curPath, restNums[0]]);
        } else {
            let tried = [];
            for (let i = 0; i < restNums.length; i++) {
                if (tried.includes(restNums[i])) {
                    continue;
                }

                tried.push(restNums[i]);
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

console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([1,2,3]));
