/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    function getCombine(start, stack) {
        for (let i = start; i <= n - k + stack.length + 1; i++) {
            stack.push(i);
            if (stack.length === k) {
                ans.push(stack.slice(0));
            } else {
                getCombine(i + 1, stack);
            }
            stack.pop();
        }
    }

    getCombine(1, []);

    return ans;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
