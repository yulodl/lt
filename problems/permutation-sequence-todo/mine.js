/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = Array(n).fill(0).map((zero, idx) => idx + 1);
    const ans = [];
    let order = 0;

    const findAnswer = (restNums) => {
        for (let i = 0; i < restNums.length; i++) {
            ans.push(restNums[i]);
            if (ans.length === n) {
                order += 1;
            } else {
                const nextRestNums = [...restNums];
                nextRestNums.splice(i, 1);
                findAnswer(nextRestNums);
            }

            if (order === k) break;

            ans.pop();
        }
    }

    findAnswer(nums);

    return ans.join('');
};

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));
